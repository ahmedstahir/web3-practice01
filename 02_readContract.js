require('dotenv').config();

const Web3 = require("web3");

const rpcUrl = process.env["INFURA_MAINNET_URL"];
const web3 = new Web3(rpcUrl);

const abi = require('./uni_abi.json');
const contractAddress = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'; // UNI token on Ethereum mainnet

const contract = new web3.eth.Contract(abi, contractAddress);
const tokenHolderAddress = '0x47173b170c64d16393a52e6c480b3ad8c302ba1e';

const readContractAsync = async () => {
    try {
        const tokenName = await contract.methods.name().call();
        console.log('Token name: ', tokenName);

        const totalSupply = await contract.methods.totalSupply().call();
        console.log('Total supply: ', totalSupply);

        const accountBal = await contract.methods.balanceOf(tokenHolderAddress).call();
        console.log('Account balance: ', accountBal);
    } catch (e) {
        console.log('Error: ', e);
    }
}

readContractAsync();