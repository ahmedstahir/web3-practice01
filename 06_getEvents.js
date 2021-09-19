require('dotenv').config();

const Web3 = require("web3");

const rpcUrl = process.env["INFURA_MAINNET_URL"];
const web3 = new Web3(rpcUrl);

const abi = require('./uni_abi.json');
const contractAddress = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'; // UNI token on Ethereum mainnet

const contract = new web3.eth.Contract(abi, contractAddress);

const getEventsAsync = async () => {
    try {
        const events = await contract.getPastEvents('Approval', { 'fromBlock': 13256800, 'toBlock': 'latest' });
        console.log('Events count:', events.length);
    } catch (e) {
        console.log('Error: ', e);
    }
}

getEventsAsync();