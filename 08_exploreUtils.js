require('dotenv').config();

const Web3 = require("web3");
const _ = require("underscore");

const rpcUrl = process.env["INFURA_MAINNET_URL"];
const web3 = new Web3(rpcUrl);

const getAverageGasPrice = async () => {
    try {
        const gasPrice = await web3.eth.getGasPrice();
        console.log('Gas (wei): ', gasPrice);
        console.log('Gas (gwei): ', web3.utils.fromWei(gasPrice, 'gwei'));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const generateHash = (stringToEncode) => {
    try {
        console.log('sha3:', web3.utils.sha3(stringToEncode));
        console.log('keccak256:', web3.utils.keccak256(stringToEncode));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const generateRandomHex = (bytes) => {
    try {
        console.log('Random Hex:', web3.utils.randomHex(bytes));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const useUnderscoreJsLibrary = () => {
    try {
        console.log('Contains?', _.contains([1, 2, 3], 2));
        console.log('Contains?', _.contains([1, 2, 3], 4));
    } catch (e) {
        console.log('Error: ', e);
    }
}

//getAverageGasPrice();

//generateHash('Web3 Practice');

//generateRandomHex(10);

//useUnderscoreJsLibrary();