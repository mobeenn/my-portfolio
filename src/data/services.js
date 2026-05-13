import { FaCode, FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";

export const services = [
   {
      id: 1,
      title: "Full Stack Web Development",
      description:
         "End-to-end web application development using the MERN stack. From database design to pixel-perfect frontends with seamless API integration.",
      features: [
         "React.js SPA & SSR apps",
         "Node.js + Express REST APIs",
         "MongoDB database design",
         "JWT authentication & authorization",
         "Real-time features with Socket.io",
      ],
      icon: FaGlobe,
      gradient: "from-[#0f7d86] to-[#1e5a5c]",
   },
   {
      id: 2,
      title: "Blockchain Development",
      description:
         "Building decentralized applications and protocols on Ethereum and EVM-compatible chains with a focus on security and gas optimization.",
      features: [
         "dApp architecture & design",
         "On-chain data indexing",
         "Multi-chain support",
         "Gas optimization strategies",
         "DeFi protocol development",
      ],
      icon: SiSolidity,
      gradient: "from-[#1a6b73] to-[#0d4a50]",
   },
   {
      id: 3,
      title: "Smart Contract Development",
      description:
         "Secure and audited Solidity smart contracts for tokens, NFTs, DeFi protocols, and DAO governance systems.",
      features: [
         "ERC-20 / ERC-721 / ERC-1155 tokens",
         "DeFi: staking, farming, AMMs",
         "Security audits & best practices",
         "OpenZeppelin integrations",
         "Hardhat testing & deployment",
      ],
      icon: FaCode,
      gradient: "from-[#267880] to-[#134042]",
   },
   {
      id: 4,
      title: "Web3 Integration",
      description:
         "Connecting traditional web applications to the blockchain ecosystem through wallet integrations, contract interactions, and token gating.",
      features: [
         "MetaMask / WalletConnect setup",
         "Ethers.js & Web3.js integration",
         "NFT minting & marketplace UIs",
         "Token-gated content systems",
         "IPFS & Arweave storage",
      ],
      icon: FaPuzzlePiece,
      gradient: "from-[#346870] to-[#1a3b3d]",
   },
];
