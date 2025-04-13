const hre = require("hardhat");

// not working because of 0.00 ETH transfer limits of the testnet

async function main() {
  const [client] = await hre.ethers.getSigners();

  const contractAddress = "0x062d2305c2D72E1dB3591b8EDDa4694f8bB74145";
  const contractFactory = await hre.ethers.getContractFactory("FreelanceJob");
  const contract = contractFactory.attach(contractAddress);

  console.log("Marking job as completed...");

  const tx = await contract.connect(client).markJobDone();
  await tx.wait();

  console.log("✅ Job marked as completed, funds transferred to freelancer.");
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exitCode = 1;
});