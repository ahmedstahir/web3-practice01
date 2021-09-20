# Web3 Practice

<b>Step #1:</b>\
Read an account's ether balance on Ethereum Mainnet

<b>Step #2:</b>\
Read data from the ERC20 UNI token contract deployed on Ethereum Mainnet

<b>Step #3:</b>\
Transfer 0.1 ETH from one account to another on Ropsten Testnet

<b>Step #4:</b>\
Deployed a simple contract, on Ropsten Testnet, that has a `uint256` state variable and the following four functions:
- `setNumber` to set a specific value in the variable
- `increment` will increase the value of the variable by 1
- `decrement` will decrease the value by 1
- `getNumber` returns the current value

Address of the deployed contract is `0x5Bdc2d267058F861a609da09fB81a075395B520C`

<b>Step #5:</b>\
Calling functions of the smart contract deployed in previous step

<b>Step #6:</b>\
Read events from the ERC20 UNI token contract deployed on Ethereum Mainnet

<b>Step #7:</b>\
To inspect the content within a block, the following three functions are implemented:
- `getLatestBlockNumber` to display number of the latest block
- `getLatestBlock` displays content of the latest block
- `getLastBlocks` shows the block number and hash of the latest x blocks (where x is a number provided as a parameter to the function)

<b>Step #8:</b>\
The following Web3 Utilities had been explored:
- `getAverageGasPrice` gets the average gas price currently for the network
- `generateHash` displays `sha3` and `keccak256` hashes of the provided string
- `generateRandomHex` generates a random hexadecimal number of the provided bytes
- `useUnderscoreJsLibrary` uses the `contains` function of the Underscore.js library

<hr />

###### This [tutorial](https://www.dappuniversity.com/articles/web3-js-intro) is being used as reference for this exercise.
