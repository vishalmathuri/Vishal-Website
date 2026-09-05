export const projects = [
  {
    id: "evm-lending-protocol",

    title: "Production-Grade EVM Lending Protocol",

    shortTitle: "EVM Lending Protocol",

    category: ["Ethereum / Solidity"],

    roles: ["Blockchain Developer", "Solidity Developer"],

    featured: true,

    description:
      "A modular overcollateralized DeFi lending protocol with multi-asset lending, interest accrual, risk management, liquidations, Chainlink price feeds and production-oriented security controls.",

    technologies: [
      "Solidity",
      "Ethereum",
      "Foundry",
      "Chainlink",
      "OpenZeppelin",
      "DeFi",
      "EVM"
    ],

    highlights: [
      "Scaled-balance interest accounting",
      "Multi-asset collateral and borrowing",
      "Health-factor based liquidations",
      "Chainlink oracle integration",
      "Fuzz and invariant testing",
      "227 passing tests",
      "Ethereum Sepolia deployment"
    ],

    impact:
      "Demonstrates production-oriented DeFi protocol architecture, smart-contract security, risk management and advanced Solidity testing.",

    github:
      "https://github.com/vishalmathuri/Production-grade-EVM-lending-protocol",

    live: ""
  },

  {
    id: "nft-marketplace",

    title: "NFT Marketplace",

    shortTitle: "NFT Marketplace",

    category: ["Ethereum / Solidity"],

    roles: ["Blockchain Developer", "Web3 Developer"],

    featured: true,

    description:
      "A full-stack NFT marketplace on Ethereum Sepolia supporting NFT minting, listing and purchasing with wallet integration and decentralized metadata storage.",

    technologies: [
      "Solidity",
      "ERC-721",
      "OpenZeppelin",
      "React.js",
      "Ethers.js",
      "Node.js",
      "Express.js",
      "IPFS",
      "Pinata"
    ],

    highlights: [
      "ERC-721 NFT minting",
      "NFT listing and purchasing",
      "MetaMask wallet integration",
      "IPFS-based image and metadata storage",
      "Reentrancy protection",
      "Ethereum Sepolia deployment"
    ],

    impact:
      "Demonstrates end-to-end Web3 development across smart contracts, wallet interactions, decentralized storage, frontend and backend infrastructure.",

    github:
      "https://github.com/vishalmathuri/NFT-Marketplace",

    live:
      "https://nft-marketplace-ecru-rho.vercel.app"
  },

  {
    id: "solana-crowdfunding",

    title: "Solana Crowdfunding Protocol",

    shortTitle: "Solana Crowdfunding",

    category: ["Rust / Solana"],

    roles: ["Rust Developer", "Blockchain Developer"],

    featured: true,

    description:
      "Building a Rust and Solana crowdfunding protocol for campaign creation, SOL contributions, funding goals, deadlines, withdrawals and contributor refunds.",

    technologies: [
      "Rust",
      "Solana",
      "Anchor",
      "PDAs",
      "TypeScript",
      "Wallet Adapter"
    ],

    highlights: [
      "Campaign creation",
      "SOL contributions",
      "PDA-based state",
      "Campaign authorization",
      "Deadline handling",
      "Contributor refunds"
    ],

    impact:
      "Demonstrates Rust-based blockchain development, Solana account architecture and on-chain authorization using Anchor and PDAs.",

    github:
      "https://github.com/vishalmathuri/Solana-Crowdfunding-Protocol",

    live: "https://solana-crowdfunding-protocol.vercel.app/"
  },

  {
    id: "cross-chain-protocol",

    title: "Cross-Chain Protocol",

    shortTitle: "Cross-Chain Protocol",

    category: ["Ethereum / Solidity", "Rust / Solana"],

    roles: ["Blockchain Developer", "Rust Developer"],

    featured: true,

    description:
      "Building a cross-chain protocol designed to connect EVM smart contracts with another blockchain environment through a relayer-based messaging architecture.",

    technologies: [
      "Solidity",
      "Rust",
      "EVM",
      "Cross-Chain Messaging",
      "Relayer",
      "Foundry"
    ],

    highlights: [
      "Cross-chain messaging architecture",
      "EVM smart-contract layer",
      "Rust-based components",
      "Relayer design",
      "Message verification"
    ],

    impact:
      "Expands beyond single-chain application development into blockchain interoperability, protocol architecture and distributed message handling.",

    github:
      "https://github.com/vishalmathuri/Cross-Chain-Protocol",

    live: ""
  },

  {
    id: "scai-warrior",

    title: "Scai Warrior — Web3 Telegram Game",

    shortTitle: "Scai Warrior",

    category: ["Ethereum / Solidity"],

    roles: ["Blockchain Developer", "Web3 Developer"],

    featured: false,

    description:
      "A Web3-enabled Telegram gaming application combining a Telegram bot, blockchain smart contracts, backend infrastructure and browser-based game components.",

    technologies: [
      "Solidity",
      "Ethereum",
      "JavaScript",
      "Ethers.js",
      "Telegram",
      "Web3"
    ],

    highlights: [
      "Telegram game integration",
      "Smart-contract based game logic",
      "Wallet connectivity",
      "Backend and bot infrastructure"
    ],

    impact:
      "Demonstrates blockchain integration inside a non-traditional application environment using Telegram, wallets and smart contracts.",

    github:
      "https://github.com/vishalmathuri/ScaiWarrior_bot",

    live:
      "https://scai-warrior-bot.vercel.app"
  },

  {
    id: "rbac-dapp",

    title: "RBAC Smart Contract DApp",

    shortTitle: "RBAC DApp",

    category: ["Ethereum / Solidity"],

    roles: ["Solidity Developer", "Blockchain Developer"],

    featured: false,

    description:
      "A role-based access control DApp implementing Admin, Editor and Viewer permissions through Solidity smart contracts and wallet-based authorization.",

    technologies: [
      "Solidity",
      "OpenZeppelin",
      "AccessControl",
      "Hardhat",
      "Ethers.js",
      "MetaMask"
    ],

    highlights: [
      "Role-based authorization",
      "Admin role management",
      "OpenZeppelin AccessControl",
      "Wallet-based authentication",
      "Smart-contract unit testing"
    ],

    impact:
      "Demonstrates secure authorization patterns and permission management for decentralized applications.",

    github:
      "https://github.com/vishalmathuri/rbac-smart-contract-dapp",

    live: ""
  },

  {
    id: "soulbound-identity",

    title: "Soulbound Identity System",

    shortTitle: "Soulbound Identity",

    category: ["Ethereum / Solidity"],

    roles: ["Solidity Developer", "Blockchain Developer"],

    featured: false,

    description:
      "A decentralized identity system using non-transferable Soulbound Tokens to represent permanent blockchain-based credentials.",

    technologies: [
      "Solidity",
      "ERC-721",
      "OpenZeppelin",
      "Hardhat",
      "Ethers.js",
      "Ethereum"
    ],

    highlights: [
      "Non-transferable identity tokens",
      "Admin-controlled credential issuance",
      "Credential revocation",
      "OpenZeppelin contracts",
      "Sepolia deployment"
    ],

    impact:
      "Demonstrates blockchain identity, credential issuance and non-transferable token design using Solidity.",

    github:
      "https://github.com/vishalmathuri/soulbound-identity",

    live: ""
  },

  {
    id: "task-manager",

    title: "Blockchain Task Manager",

    shortTitle: "Task Manager",

    category: ["Ethereum / Solidity"],

    roles: ["Solidity Developer", "Web3 Developer"],

    featured: false,

    description:
      "A decentralized task management application where users create, modify, complete and delete tasks through an Ethereum-compatible smart contract.",

    technologies: [
      "Solidity",
      "Ethers.js",
      "OpenZeppelin",
      "Hardhat",
      "MetaMask",
      "JavaScript"
    ],

    highlights: [
      "On-chain task management",
      "Task ownership controls",
      "Contract event emissions",
      "MetaMask integration",
      "OpenZeppelin ownership"
    ],

    impact:
      "Demonstrates Solidity state management, mappings, structs, events, ownership rules and frontend-to-contract interaction.",

    github:
      "https://github.com/vishalmathuri/TaskManager",

    live: ""
  }
];