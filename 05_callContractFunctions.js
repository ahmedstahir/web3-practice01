require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;

const rpcUrl = process.env["INFURA_ROPSTEN_URL"];
const web3 = new Web3(rpcUrl);

const account = '0x07e0112ADe2ff109ba3F2946A8e465211472AAfD';
const accountPrivateKey = Buffer.from(process.env["PRIVATE_KEY_1"], 'hex');

const abi = require('./demoContract_abi.json');
const contractAddress = '0x5Bdc2d267058F861a609da09fB81a075395B520C';

const contract = new web3.eth.Contract(abi, contractAddress);

// Uncomment the line depending on the function you want to call
const calledMethod = contract.methods.setNumber(6000).encodeABI();
//const calledMethod = contract.methods.increment().encodeABI();
//const calledMethod = contract.methods.decrement().encodeABI();

const callContractFunctionsAsync = async () => {
    const txNonce = await web3.eth.getTransactionCount(account);

    // Build a transaction object
    const txObject = {
        nonce: web3.utils.toHex(txNonce),
        gasLimit: web3.utils.toHex(500000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
        data: calledMethod
    }

    // Sign the transaction
    const tx = new Tx(txObject, { 'chain': 'ropsten' });
    tx.sign(accountPrivateKey);

    // Broadcast the transaction
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    const response = await web3.eth.sendSignedTransaction(raw);
    console.log('Transaction Hash:', response.transactionHash);
}

const readStateVariableAsync = async () => {
    const response = await contract.methods.getNumber().call();
    console.log('Value:', response);
}

callContractFunctionsAsync();

//readStateVariableAsync();