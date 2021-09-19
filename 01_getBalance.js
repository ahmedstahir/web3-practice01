require('dotenv').config();

var Web3 = require("web3");

var rpcUrl = process.env["INFURA_MAINNET_URL"];
var web3 = new Web3(rpcUrl);
var accountToQuery = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

const getBalanceAsync = async () => {
    try {
        const balance = await web3.eth.getBalance(accountToQuery);
        console.log('Wei balance: ', balance);
        console.log('Ether balance: ', web3.utils.fromWei(balance, 'ether'));
    } catch (e) {
        console.log('Error: ', e);
    }
}

getBalanceAsync();