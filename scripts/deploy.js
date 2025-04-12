const hre = require("hardhat");

async function main() {

  const [client] = await hre.ethers.getSigners();

  const freelancerAddress = "0x9460c29b9e33cfF3Ed10b95625FfA0057df9a991"; // change this
  const depositAmount = hre.ethers.parseEther("0.005");

  const contractFactory = await hre.ethers.getContractFactory("FreelanceJob");
  const contract = await contractFactory.deploy(freelancerAddress,{value: depositAmount});

  await contract.waitForDeployment();
  console.log(`Contract deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
