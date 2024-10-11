# Lottery DApp

## Overview
This is a decentralized lottery application (DApp) built using Chainlink VRF (Verifiable Random Function) and Chainlink Automation. The DApp ensures fairness and transparency in lottery draws by leveraging secure, verifiable randomness for winner selection.

## Features
- Fairness and Transparency: Utilizes Chainlink VRF to generate random numbers that are cryptographically verifiable.
- Automated Winner Selection: Implements Chainlink Automation to automatically select winners without manual intervention.
- User-Friendly Interface: Developed with React and Next.js for an intuitive user experience.

## Technical Stack
- Smart Contracts: Written in Solidity, using with the help of RemixIDE.
- Blockchain Integration: Deployed on Ethereum (or compatible networks).
- Frontend Framework: Built with React .
- Randomness Generation: Employs Chainlink VRF for generating unpredictable random numbers.

## Smart Contract Address
The deployed smart contract address is:
0xF442A3743171229300DFf28c32A34Fedd820200c

## How It Works
1. Users purchase lottery tickets through the DApp interface.
2. Upon reaching the ticket sales deadline, the DApp requests a random number from Chainlink VRF.
3. The random number is verified on-chain for authenticity.
4. The winner is automatically selected based on the generated random number, and notifications are sent to all participants.

## Installation
1. Clone the repository:
   git clone https://github.com/Anjaligupta845793/Lotterydapp.git
   cd Lotterydapp

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the root directory and add your configuration variables (e.g., API keys, contract addresses).

4. Deploy the smart contracts:
   npx hardhat run scripts/deploy.js --network <network-name>

5. Start the development server:
   npm run dev

## Usage
1. Navigate to http://localhost:3000 in your browser.
2. Connect your wallet (e.g., MetaMask).
3. Purchase lottery tickets and wait for the draw.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Chainlink for their VRF and Automation services.
