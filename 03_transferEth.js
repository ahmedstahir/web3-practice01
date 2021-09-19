require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;

const rpcUrl = process.env["INFURA_ROPSTEN_URL"];
const web3 = new Web3(rpcUrl);

const senderAccount = '0x07e0112ADe2ff109ba3F2946A8e465211472AAfD';
const recipientAccount = '0xB694ce10e146AF99D50fdFe052D6B5891D8d7D3e';
const senderPrivateKey = Buffer.from(process.env["PRIVATE_KEY_1"], 'hex');

const transferEthAsync = async () => {
    try {
        const txNonce = await web3.eth.getTransactionCount(senderAccount);

        // Build a transaction object
        const txObject = {
            nonce: web3.utils.toHex(txNonce),
            to: recipientAccount,
            value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
            gasLimit: web3.utils.toHex(21000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // Sign the transaction
        const tx = new Tx(txObject, { 'chain': 'ropsten' });
        tx.sign(senderPrivateKey);

        // Broadcast the transaction
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        const response = await web3.eth.sendSignedTransaction(raw);
        console.log('Transaction Hash: ', response.transactionHash);

    } catch (e) {
        console.log('Error: ', e);
    }
}

transferEthAsync();