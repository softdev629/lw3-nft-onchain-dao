const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the NFT Contract
  // const nftContract = await hre.ethers.deployContract("CryptoDevsNFT");
  // await nftContract.waitForDeployment();
  // console.log("CryptoDevsNFT deployed to:", nftContract.target);

  // Deploy the Fake Marketplace Contract
  // const fakeNftMarketplaceContract = await hre.ethers.deployContract(
  // "FakeNFTMarketplace"
  // );
  // await fakeNftMarketplaceContract.waitForDeployment();
  // console.log(
  // "FakeNFTMarketplace deployed to:",
  // fakeNftMarketplaceContract.target
  // );

  // Deploy the DAO Contract
  // const amount = hre.ethers.parseEther("1"); // You can change this value from 1 ETH to something else
  // const daoContract = await hre.ethers.deployContract(
  // "CryptoDevsDAO",
  // [fakeNftMarketplaceContract.target, nftContract.target],
  // { value: amount }
  // );
  // await daoContract.waitForDeployment();
  // console.log("CryptoDevsDAO deployed to:", daoContract.target);

  // Sleep for 30 seconds to let Etherscan catch up with the deployments
  // await sleep(30 * 1000);

  // Verify the NFT Contract
  await hre.run("verify:verify", {
    address: "0xE3baE1df50444E6d88d344AA42b1d59C3da4601B",
    constructorArguments: [],
  });

  // Verify the Fake Marketplace Contract
  await hre.run("verify:verify", {
    address: "0x269Ed3C240F3a615328b029AA18bcfB0939ce0CD",
    constructorArguments: [],
  });

  // Verify the DAO Contract
  await hre.run("verify:verify", {
    address: "0xa902574Fd862d8401163dAD1fB336C3D1522a56f",
    constructorArguments: [
      "0x269Ed3C240F3a615328b029AA18bcfB0939ce0CD",
      "0xE3baE1df50444E6d88d344AA42b1d59C3da4601B",
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
