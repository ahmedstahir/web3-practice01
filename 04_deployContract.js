require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;

const rpcUrl = process.env["INFURA_ROPSTEN_URL"];
const web3 = new Web3(rpcUrl);

const ownerAccount = '0x07e0112ADe2ff109ba3F2946A8e465211472AAfD';
const ownerPrivateKey = Buffer.from(process.env["PRIVATE_KEY_1"], 'hex');

const contractBytecode = '608060405234801561001057600080fd5b50610250806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632baeceb7146100515780633fb5c1cb1461005b578063d09de08a14610077578063f2c9ecd814610081575b600080fd5b61005961009f565b005b61007560048036038101906100709190610104565b6100c3565b005b61007f6100cd565b005b6100896100e6565b604051610096919061013c565b60405180910390f35b6000805411156100c1576000808154809291906100bb90610161565b91905055505b565b8060008190555050565b6000808154809291906100df9061018b565b9190505550565b60008054905090565b6000813590506100fe81610203565b92915050565b60006020828403121561011657600080fd5b6000610124848285016100ef565b91505092915050565b61013681610157565b82525050565b6000602082019050610151600083018461012d565b92915050565b6000819050919050565b600061016c82610157565b915060008214156101805761017f6101d4565b5b600182039050919050565b600061019682610157565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156101c9576101c86101d4565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b61020c81610157565b811461021757600080fd5b5056fea26469706673582212208ba23bf42b3a68fbbb12c591dcff1c09362984313b0ac6f4ed3bf0ebe17121f264736f6c63430008000033';
const contractBytecodeHex = Buffer.from(contractBytecode, 'hex');

const deployContractAsync = async () => {
    try {
        const txNonce = await web3.eth.getTransactionCount(ownerAccount);

        // Build a transaction object
        const txObject = {
            nonce: web3.utils.toHex(txNonce),
            gasLimit: web3.utils.toHex(1000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data: contractBytecodeHex
        }

        // Sign the transaction
        const tx = new Tx(txObject, { 'chain': 'ropsten' });
        tx.sign(ownerPrivateKey);

        // Broadcast the transaction
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        const response = await web3.eth.sendSignedTransaction(raw);
        console.log('Transaction Hash: ', response.transactionHash);
    } catch (err) {
        console.log('Error: ', err);
    }
}

deployContractAsync();