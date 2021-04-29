export const DEFAULT_LOCAL_POSTGRES_URI = 'postgresql://user:password@localhost/events';
export const DEFAULT_START_BLOCK_OFFSET = 35;
export const DEFAULT_MAX_BLOCKS_TO_PULL = 100;
export const DEFAULT_MAX_BLOCKS_TO_SEARCH = 100;
export const DEFAULT_CHAIN_ID = 1;
export const DEFAULT_BLOCK_FINALITY_THRESHOLD = 0;
export const DEFAULT_SECONDS_BETWEEN_RUNS = 15;
export const DEFAULT_STAKING_POOLS_JSON_URL =
    'https://raw.githubusercontent.com/0xProject/0x-staking-pool-registry/master/staking_pools.json';
export const DEFAULT_STAKING_POOLS_METADATA_JSON_URL =
    'https://raw.githubusercontent.com/0xProject/0x-staking-pool-registry/master/pool_metadata.json';
export const DEFAULT_BASE_GITHUB_LOGO_URL = 'https://github.com/0xProject/0x-staking-pool-registry/raw/master/logos/';
export const DEFAULT_START_BLOCK_TIMESTAMP_OFFSET = 459;
export const DEFAULT_MAX_TIME_TO_SEARCH = 1310;
export const DEFAULT_SCRAPE_CANCEL_EVENTS_FLAG = false;
export const DEFAULT_SCRAPE_TRANSACTIONS_FLAG = false;
export const TRANSFORMEDERC20_EVENT_TOPIC = ['0x0f6672f78a59ba8e5e5b5d38df3ebc67f3c792e2c9259b8d97d7f00dd78ba1b3'];
export const LIQUIDITYPROVIDERSWAP_EVENT_TOPIC = ['0x40a6ba9513d09e3488135e0e0d10e2d4382b792720155b144cbea89ac9db6d34'];
export const RFQORDERFILLED_EVENT_TOPIC = ['0x829fa99d94dc4636925b38632e625736a614c154d55006b7ab6bea979c210c32'];
export const LIMITORDERFILLED_EVENT_TOPIC = ['0xab614d2b738543c0ea21f56347cf696a3a0c42a7cbec3212a5ca22a4dcff2124'];
export const V4_FILL_START_BLOCK = 11591021; // Native order feature deployment block
export const EXCHANGE_PROXY_ADDRESS = '0xdef1c0ded9bec7f1a1670819833240f027b25eff';
export const EXCHANGE_PROXY_DEPLOYMENT_BLOCK = 10247094;
export const PLP_VIP_START_BLOCK = 11377457;
export const UNISWAPV2_SUBGRAPH_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
export const SUSHISWAP_SUBGRAPH_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/zippoxer/sushiswap-subgraph-fork';
export const START_DIRECT_UNISWAP_SEARCH = 1600834642;
export const V3_FILL_EVENT_TOPIC = ['0x6869791f0a34781b29882982cc39e882768cf2c96995c2a110c577c53bc932d5'];
export const V3_EXCHANGE_ADDRESS = '0x61935cbdd02287b511119ddb11aeb42f1593b7ef';
export const V4_CANCEL_START_BLOCK = 11674215; // first seen block - 1
export const V4_CANCEL_EVENT_TOPIC = ['0xa6eb7cdc219e1518ced964e9a34e61d68a94e4f1569db3e84256ba981ba52753'];
export const EXPIRED_RFQ_ORDER_EVENT_TOPIC = ['0xd9ee00a67daf7d99c37893015dc900862c9a02650ef2d318697e502e5fb8bbe2'];
export const MULTIPLEX_START_BLOCK = 12047508; // RANDOM BLOCK NUMBER FROM NOW FOR DATA PIPELINE TEST
export const NEWBRIDGEFILL_EVENT_TOPIC = ['0xe59e71a14fe90157eedc866c4f8c767d3943d6b6b2e8cd64dddcc92ab4c55af8'];
export const NEW_BRIDGEFILL_BLOCK = 12231666; // first seen block - 1
export const FLASHWALLET_ADDRESS = '0x22f9dcf4647084d6c31b2765f6910cd85c178c18';

export const ONEINCH_FIRST_BLOCK = 12330899; 

export const ONEINCH_SWAPPED_EVENT_1_TOPIC = ['0xe2cee3f6836059820b673943853afebd9b3026125dab0d774284e6f28a4855be'];
export const ONEINCH_SWAPPED_EVENT_2_TOPIC = ['0x76af224a143865a50b41496e1a73622698692c565c1214bc862f18e22d829c5e'];
export const ONEINCH_SWAPPED_EVENT_3_TOPIC = ['0xd6d4f5681c246c9f42c203e287975af1601f8df8035a9251f79aab5c8f09e2f8'];

export const ONEINCH_CONTRACT_ADDRESS_1 = '0x11111254369792b2ca5d084ab5eea397ca8fa48b';
export const ONEINCH_CONTRACT_ADDRESS_2 = '0x111111125434b319222cdbf8c261674adb56f3ae';
export const ONEINCH_CONTRACT_ADDRESS_3 = '0x11111112542d85b3ef69ae05771c2dccff4faa26';

export {
    EXPIRED_RFQ_ORDER_ABI,
    LIMIT_ORDER_FILLED_ABI,
    LIQUIDITY_PROVIDER_SWAP_ABI,
    RFQ_ORDER_FILLED_ABI,
    TRANSFORMED_ERC20_ABI,
    V4_CANCEL_ABI,
} from '@0x/pipeline-utils';

export const ONEINCH_SWAPPED_1_ABI = {

    "anonymous":false,
    "inputs":[
        {
            "indexed":true,
            "internalType":"contract IERC20",
            "name":"fromToken",
            "type":"address"
        },
        {
            "indexed":true,
            "internalType":"contract IERC20",
            "name":"toToken",
            "type":"address"
        },
        {
            "indexed":true,
            "internalType":"address",
            "name":"referrer",
            "type":"address"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"fromAmount",
            "type":"uint256"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"toAmount",
            "type":"uint256"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"referrerFee",
            "type":"uint256"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"fee",
            "type":"uint256"
        }
    ],
    "name":"Swapped",
    "type":"event"
}

export const ONEINCH_SWAPPED_2_ABI = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "contract IERC20",
            "name": "srcToken",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "contract IERC20",
            "name": "dstToken",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "dstReceiver",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "spentAmount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "returnAmount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "minReturnAmount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "guaranteedAmount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "referrer",
            "type": "address"
        }
    ],
    "name": "Swapped",
    "type": "event"
}

export const ONEINCH_SWAPPED_3_ABI = {

    "anonymous":false,
    "inputs":[
        {
            "indexed":false,
            "internalType":"address",
            "name":"sender",
            "type":"address"
        },
        {
            "indexed":false,
            "internalType":"contract IERC20",
            "name":"srcToken",
            "type":"address"
        },
        {
            "indexed":false,
            "internalType":"contract IERC20",
            "name":"dstToken",
            "type":"address"
        },
        {
            "indexed":false,
            "internalType":"address",
            "name":"dstReceiver",
            "type":"address"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"spentAmount",
            "type":"uint256"
        },
        {
            "indexed":false,
            "internalType":"uint256",
            "name":"returnAmount",
            "type":"uint256"
        }
    ],
    "name":"Swapped",
    "type":"event"
}

export const NEW_BRIDGE_FILL_ABI = {
    anonymous: false,
    inputs: [
        {
            indexed: false,
            internalType: 'bytes32',
            name: 'source',
            type: 'bytes32',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'inputToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'outputToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'inputTokenAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'outputTokenAmount',
            type: 'uint256',
        },
    ],
    name: 'BridgeFill',
    type: 'event',
};

export const ERC20_BRIDGE_TRADE_ABI = {
    anonymous: false,
    inputs: [
        {
            indexed: false,
            internalType: 'address',
            name: 'fromToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'toToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'fromTokenAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'toTokenAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'from',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'to',
            type: 'address',
        },
    ],
    name: 'ERC20BridgeTransfer',
    type: 'event',
};

export const BRIDGE_FILL_ABI = {
    anonymous: false,
    inputs: [
        {
            indexed: false,
            internalType: 'uint256',
            name: 'source',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'inputToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'outputToken',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'inputTokenAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'outputTokenAmount',
            type: 'uint256',
        },
    ],
    name: 'BridgeFill',
    type: 'event',
};

export const V3_FILL_ABI = {
    anonymous: false,
    inputs: [
        {
            indexed: true,
            internalType: 'address',
            name: 'makerAddress',
            type: 'address',
        },
        {
            indexed: true,
            internalType: 'address',
            name: 'feeRecipientAddress',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'bytes',
            name: 'makerAssetData',
            type: 'bytes',
        },
        {
            indexed: false,
            internalType: 'bytes',
            name: 'takerAssetData',
            type: 'bytes',
        },
        {
            indexed: false,
            internalType: 'bytes',
            name: 'makerFeeAssetData',
            type: 'bytes',
        },
        {
            indexed: false,
            internalType: 'bytes',
            name: 'takerFeeAssetData',
            type: 'bytes',
        },
        {
            indexed: true,
            internalType: 'bytes32',
            name: 'orderHash',
            type: 'bytes32',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'takerAddress',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'address',
            name: 'senderAddress',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'makerAssetFilledAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'takerAssetFilledAmount',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'makerFeePaid',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'takerFeePaid',
            type: 'uint256',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'protocolFeePaid',
            type: 'uint256',
        },
    ],
    name: 'Fill',
    type: 'event',
};
