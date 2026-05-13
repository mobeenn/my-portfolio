export const blogs = [
   {
      id: 1,
      title: "Building a Full Stack MERN Application from Scratch",
      excerpt:
         "A practical guide to architecting and building a production-ready MERN stack application with authentication, REST APIs, and a React frontend.",
      date: "March 15, 2024",
      readTime: "12 min read",
      tags: ["MERN", "Node.js", "React", "MongoDB"],
      image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dev Mobeen",
      sections: [
         {
            type: "heading",
            content: "Introduction to the MERN Stack",
         },
         {
            type: "paragraph",
            content:
               "The MERN stack — MongoDB, Express, React, and Node.js — has become one of the most popular technology stacks for building modern full-stack web applications.",
         },
         {
            type: "paragraph",
            content:
               "In this guide, we will build a complete MERN application from scratch.",
         },
         {
            type: "subheading",
            content: "Project Setup",
         },
         {
            type: "paragraph",
            content:
               "Start by creating the project structure with server and client folders.",
         },
         {
            type: "code",
            language: "bash",
            content: `mkdir mern-app && cd mern-app
mkdir server client

cd server && npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken

cd ../client
npm create vite@latest . -- --template react
npm install axios react-router-dom`,
         },
         {
            type: "heading",
            content: "Conclusion",
         },
         {
            type: "paragraph",
            content:
               "We covered MERN setup, backend structure, and API integration. You can extend this with authentication and deployment.",
         },
      ],
   },

   {
      id: 2,
      title: "Smart Contract Development with Solidity",
      excerpt:
         "Learn to write secure Solidity smart contracts for DeFi and NFTs.",
      date: "April 2, 2024",
      readTime: "15 min read",
      tags: ["Solidity", "Blockchain", "Web3"],
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dev Mobeen",
      sections: [
         {
            type: "heading",
            content: "What is a Smart Contract?",
         },
         {
            type: "paragraph",
            content:
               "Smart contracts are self-executing programs deployed on blockchain networks like Ethereum.",
         },
         {
            type: "subheading",
            content: "ERC-20 Token Example",
         },
         {
            type: "code",
            language: "solidity",
            content: `pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }
}`,
         },
         {
            type: "heading",
            content: "Conclusion",
         },
         {
            type: "paragraph",
            content:
               "Smart contracts require strong security practices before deploying to mainnet.",
         },
      ],
   },
];
