require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    polygon_amoy: {
      url: process.env.URL, // RPC URL for Amoy testnet
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80002, // Correct chain ID for Amoy testnet
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY, // Your Polygonscan API key
    customChains: [
      {
        network: "polygon_amoy", // Network name
        chainId: 80002, // Chain ID for Amoy testnet
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api", // API URL for verification
          browserURL: "https://amoy.polygonscan.com/", // Block explorer URL
        },
      },
    ],
  },
  sourcify: {
    enabled: true, // Enable Sourcify verification
  },
};
