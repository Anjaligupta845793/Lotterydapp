const { ethers } = require("hardhat");

async function main() {
  const Raffle = await ethers.getContractFactory("Raffle");

  // Deploy the contract
  const RaffleContract = await Raffle.deploy(
    "10000000000000000",
    "350",
    "0x816bedba8a50b294e5cbd47842baf240c2385f2eaf719edbd4f250a137a8c899",
    "20500446694926606060884664302904790834881895134248418585937947310313809747788",
    "2500000"
  );

  // Wait for the deployment to be mined
  await RaffleContract.deployed();

  console.log("Raffle deployed to:", RaffleContract.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//id -46370712667100603137865621104437997389110050304650650607238106881599753658814
//key hass- 0x816bedba8a50b294e5cbd47842baf240c2385f2eaf719edbd4f250a137a8c899
//fee - 10000000000000000
