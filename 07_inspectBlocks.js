require('dotenv').config();

const Web3 = require("web3");

const rpcUrl = process.env["INFURA_MAINNET_URL"];
const web3 = new Web3(rpcUrl);

// get latest block number
const getLatestBlockNumber = async () => {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Latest Block Number:', blockNumber);
    } catch (e) {
        console.log('Error: ', e);
    }
}

// get latest block
const getLatestBlock = async () => {
    try {
        const block = await web3.eth.getBlock('latest');
        console.log('Latest Block:', block);
    } catch (e) {
        console.log('Error: ', e);
    }
}

const getLastBlocks = async (count) => {
    try {
        const latestBlockNumber = await web3.eth.getBlockNumber();

        for (var i = 0; i < count; i++) {
            const block = await web3.eth.getBlock(latestBlockNumber - i);
            console.log('Block Number (Hash):', `${block.number} (${block.hash})`);
        }
    } catch (e) {
        console.log('Error: ', e);
    }
}

//getLatestBlockNumber();

//getLatestBlock();

getLastBlocks(5);