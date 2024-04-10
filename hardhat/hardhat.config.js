require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ETH_API_KEY = process.env.ETHERSCAN_API_KEY;
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETH_API_KEY,
    },
  },
};
