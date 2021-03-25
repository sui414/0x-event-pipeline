import { logUtils } from '@0x/utils';
import { Connection } from 'typeorm';

import { RawLogEntry } from 'ethereum-types';

import { Web3Source, LogPullInfo, ContractCallInfo } from '../../data_sources/web3';

import { MAX_BLOCKS_TO_SEARCH, START_BLOCK_OFFSET } from '../../config';
import {
    LastBlockProcessed,
} from '../../entities';

export interface DeleteOptions {
  isDirectTrade ?: boolean,
  directProtocol ?: string,
  protocolVersion ?: string,
  nativeOrderType ?: string,

}

export class PullAndSaveEventsByTopic {

    public async getParseSaveEventsByTopic<EVENT>(
        connection: Connection,
        web3Source: Web3Source,
        latestBlockWithOffset: number,
        eventName: string,
        tableName: string,
        topics: string[],
        contractAddress: string,
        startSearchBlock: number,
        parser: ((decodedLog: RawLogEntry) => EVENT),
        deleteOptions: DeleteOptions,
        ): Promise<void> {

        const startBlock = await this._getStartBlockAsync(eventName, connection, latestBlockWithOffset, startSearchBlock);
        const endBlock = Math.min(latestBlockWithOffset, startBlock + (MAX_BLOCKS_TO_SEARCH - 1));

        logUtils.log(`Searching for ${eventName} between blocks ${startBlock} and ${endBlock}`);

        // assert(topics.length === 1);

        const logPullInfo: LogPullInfo = {
            address: contractAddress,
            fromBlock: startBlock,
            toBlock: endBlock,
            topics,
        };

        const rawLogsArray = await web3Source.getBatchLogInfoForContractsAsync([logPullInfo]);

        await Promise.all(rawLogsArray.map(async rawLogs => {
            const parsedLogs = rawLogs.logs.map((encodedLog: RawLogEntry) => parser(encodedLog));
            
            if (eventName==='PancakeVIPEvent' && parsedLogs.length>0){

                var contractCallToken0Array = []
                var contractCallToken1Array = []

                for(var index in parsedLogs)
                { 
                    const contractCallToken0: ContractCallInfo = {
                        to: (parsedLogs[index] as any).contractAddress,
                        data: '0x0dfe1681',
                    };
                    contractCallToken0Array.push(contractCallToken0)

                    const contractCallToken1: ContractCallInfo = {
                        to: (parsedLogs[index] as any).contractAddress,
                        data: '0xd21220a7',
                    };
                    contractCallToken1Array.push(contractCallToken1)
                }
                const token0 = await web3Source.callContractMethodsAsync(contractCallToken0Array);
                const token1 = await web3Source.callContractMethodsAsync(contractCallToken1Array);

                logUtils.log(`token0 batch results ${token0}`);
                logUtils.log(`token1 batch results ${token1}`);

                for(var i = 0; i<parsedLogs.length; i++)
                { 
                    logUtils.log(`${i}th token0 in batch ${token0[i]}`);
                    logUtils.log(`${i}th token1 in batch ${token0[i]}`);

                    parsedLogs[i].fromToken = (parsedLogs[i].fromToken === '0') ? token0[i]: token1[i];
                    parsedLogs[i].toToken = (parsedLogs[i].toToken === '0' )? token0[i]: token1[i];
                }
            }

            logUtils.log(`Saving ${parsedLogs.length} ${eventName} events`);

            await this._deleteOverlapAndSaveAsync<EVENT>(
                connection,
                parsedLogs,
                startBlock,
                endBlock,
                tableName,
                await this._lastBlockProcessedAsync(eventName, endBlock),
                deleteOptions,
            );
        }));
    }

    private async _lastBlockProcessedAsync(eventName: string, endBlock: number): Promise<LastBlockProcessed> {
        const lastBlockProcessed = new LastBlockProcessed();
        lastBlockProcessed.eventName = eventName;
        lastBlockProcessed.lastProcessedBlockNumber = endBlock;
        lastBlockProcessed.processedTimestamp = new Date().getTime();
        return lastBlockProcessed;
    }

    private async _getStartBlockAsync(eventName: string, connection: Connection, latestBlockWithOffset: number, defaultStartBlock: number): Promise<number> {
        const queryResult = await connection.query(
            `SELECT last_processed_block_number FROM events_bsc.last_block_processed WHERE event_name = '${eventName}'`,
        );

        logUtils.log(queryResult);
        const lastKnownBlock = queryResult[0] || {last_processed_block_number: defaultStartBlock};

        return Math.min(Number(lastKnownBlock.last_processed_block_number) + 1, latestBlockWithOffset - START_BLOCK_OFFSET);
    }

    private async _deleteOverlapAndSaveAsync<T>(
        connection: Connection,
        toSave: T[],
        startBlock: number,
        endBlock: number,
        tableName: string,
        lastBlockProcessed: LastBlockProcessed,
        deleteOptions: DeleteOptions,
    ): Promise<void> {

        const queryRunner = connection.createQueryRunner();

        let deleteQuery: string;
        if (deleteOptions.isDirectTrade && deleteOptions.directProtocol != undefined) {
            deleteQuery = `DELETE FROM events_bsc.${tableName} WHERE block_number >= ${startBlock} AND block_number <= ${endBlock} AND direct_protocol = '${deleteOptions.directProtocol}'`;
        } else {
            if (tableName === 'native_fills' && deleteOptions.protocolVersion != undefined )
            {
            if (deleteOptions.protocolVersion === 'v4' && deleteOptions.nativeOrderType != undefined )
            {
                deleteQuery = `DELETE FROM events_bsc.${tableName} WHERE block_number >= ${startBlock} AND block_number <= ${endBlock} AND protocol_version = '${deleteOptions.protocolVersion}' AND native_order_type = '${deleteOptions.nativeOrderType}' `;
            } else {
                deleteQuery = `DELETE FROM events_bsc.${tableName} WHERE block_number >= ${startBlock} AND block_number <= ${endBlock} AND protocol_version = '${deleteOptions.protocolVersion}'`;
            }
            } else {
            deleteQuery = `DELETE FROM events_bsc.${tableName} WHERE block_number >= ${startBlock} AND block_number <= ${endBlock}`;
            }
        }

        await queryRunner.connect();

        await queryRunner.startTransaction();
        try {

            // delete events scraped prior to the most recent block range
            await queryRunner.manager.query(deleteQuery);
            await queryRunner.manager.save(toSave);
            await queryRunner.manager.save(lastBlockProcessed);

            // commit transaction now:
            await queryRunner.commitTransaction();

        } catch (err) {

            logUtils.log(err);
            // since we have errors lets rollback changes we made
            await queryRunner.rollbackTransaction();

        } finally {

            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
        
    }
}
