const abiCoder = require('web3-eth-abi');
import { RawLogEntry } from 'ethereum-types';
import {OneInchSwappedEvent} from '../../entities';

import { parseEvent } from './parse_event';
import {ONEINCH_SWAPPED_1_ABI, ONEINCH_SWAPPED_2_ABI, ONEINCH_SWAPPED_3_ABI} from '../../constants';
import { BigNumber } from '@0x/utils';

// Function that parses 1inch's Swapped event from an event log
export function parse1InchSwapped1Event(eventLog: RawLogEntry): OneInchSwappedEvent{

    const oneInchSwappedEvent = new OneInchSwappedEvent();

    parseEvent(eventLog, oneInchSwappedEvent);

    // decode the basic info directly into oneInchSwappedEvent
    // As it's non-anonymous event as defined in the ABI, topic[0] should not be provided for the decoding
    const decodedLog = abiCoder.decodeLog(ONEINCH_SWAPPED_1_ABI.inputs, eventLog.data, eventLog.topics.slice(1));

    oneInchSwappedEvent.srcToken = decodedLog.fromToken.toLowerCase();
    oneInchSwappedEvent.dstToken = decodedLog.toToken.toLowerCase();

    oneInchSwappedEvent.spentAmount = new BigNumber(decodedLog.fromAmount);
    oneInchSwappedEvent.returnAmount = new BigNumber(decodedLog.toAmount);

    return oneInchSwappedEvent;
} 


export function parse1InchSwapped2Event(eventLog: RawLogEntry): OneInchSwappedEvent{

    const oneInchSwappedEvent = new OneInchSwappedEvent();

    parseEvent(eventLog, oneInchSwappedEvent);

    // decode the basic info directly into oneInchSwappedEvent
    // As it's non-anonymous event as defined in the ABI, topic[0] should not be provided for the decoding
    const decodedLog = abiCoder.decodeLog(ONEINCH_SWAPPED_2_ABI.inputs, eventLog.data, eventLog.topics.slice(1));

    oneInchSwappedEvent.srcToken = decodedLog.srcToken.toLowerCase();
    oneInchSwappedEvent.dstToken = decodedLog.dstToken.toLowerCase();
    oneInchSwappedEvent.spentAmount = new BigNumber(decodedLog.spentAmount);
    oneInchSwappedEvent.returnAmount = new BigNumber(decodedLog.returnAmount);

    return oneInchSwappedEvent;
} 


export function parse1InchSwapped3Event(eventLog: RawLogEntry): OneInchSwappedEvent{

    const oneInchSwappedEvent = new OneInchSwappedEvent();

    parseEvent(eventLog, oneInchSwappedEvent);

    // decode the basic info directly into oneInchSwappedEvent
    // As it's non-anonymous event as defined in the ABI, topic[0] should not be provided for the decoding
    const decodedLog = abiCoder.decodeLog(ONEINCH_SWAPPED_3_ABI.inputs, eventLog.data, eventLog.topics.slice(1));

    oneInchSwappedEvent.srcToken = decodedLog.srcToken.toLowerCase();
    oneInchSwappedEvent.dstToken = decodedLog.dstToken.toLowerCase();
    oneInchSwappedEvent.spentAmount = new BigNumber(decodedLog.spentAmount);
    oneInchSwappedEvent.returnAmount = new BigNumber(decodedLog.returnAmount);

    return oneInchSwappedEvent;
} 