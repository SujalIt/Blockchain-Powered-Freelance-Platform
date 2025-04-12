require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // <-- must come before using process.env


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Replace with your Alchemy URL
      accounts: [`0x${process.env.PRIVATE_KEY}`], // ⚠️ Never share this!
    },
  },
};
