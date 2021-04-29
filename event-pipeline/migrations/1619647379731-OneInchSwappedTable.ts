import {MigrationInterface, QueryRunner, Table} from "typeorm";

const events1InchSwappedEventsTable = new Table({
    name: 'events.oneinch_swapped_events',
    columns: [
        {name: 'observed_timestamp', type: 'bigint'},
        {name: 'contract_address', type: 'varchar'},
        {name: 'transaction_hash', type: 'varchar', isPrimary: true},
        {name: 'transaction_index', type: 'bigint'},
        {name: 'log_index', type: 'bigint', isPrimary: true},
        {name: 'block_hash', type: 'varchar'},
        {name: 'block_number', type: 'bigint'},
        {name: 'src_token', type: 'varchar'},
        {name: 'dst_token', type: 'varchar'},
        {name: 'spent_amount', type: 'numeric'},
        {name: 'return_amount', type: 'numeric'},
    ],
});

/*
 Indexes useful for the following use cases:
 lookup based on transaction hashes
 lookup based on block#
 lookup based on the contract address
*/
const create1InchSwappedIndexQuery = `
    CREATE INDEX oneinch_swapped_transaction_hash_index
    ON events.oneinch_swapped_events (transaction_hash);
    CREATE INDEX oneinch_swapped_block_number_index
    ON events.oneinch_swapped_events (block_number);
    CREATE INDEX oneinch_swapped_contract_address_index
    ON events.oneinch_swapped_events (contract_address);
`;

const drop1InchSwappedIndexQuery = `
    DROP INDEX events.oneinch_swapped_transaction_hash_index;
    DROP INDEX events.oneinch_swapped_block_number_index;
    DROP INDEX events.oneinch_swapped_contract_address_index;
`;


export class OneInchSwappedTable1619647379731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(events1InchSwappedEventsTable);
        await queryRunner.query(create1InchSwappedIndexQuery);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(drop1InchSwappedIndexQuery);
        await queryRunner.dropTable(events1InchSwappedEventsTable);
    }

}
