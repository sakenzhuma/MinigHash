const p = {
   title: 'Paper',
   subtitle: 'Hash Coin paper and token distribution',
   p1: {
      title: "Hash Coin Paper",
      subtitle: "Welcome to the Hash Coin ecosystem, where innovation and community engagement are the driving forces behind our mission.",
      content: "Our tokenomics and mechanics are designed to ensure stability, incentivize participation, and support the long-term growth of our project. This document outlines the core aspects of token distribution, NFT staking mechanics, and profit distribution.",
      contact: {
         title:"Contract Information",
         subtitle:"Participants interact with the following contracts:"
      },
      contracts: [
         { title: "NFT Contract", val: "0x3ACCCbCDfd1ed5C4fb926c9AFFD619E546f3a95D"},
         { title: "Inventory Contract", val:"0x13CE10a3e09FA8000BA8A13fCbe8813f476584e7"},
         { title: "Rewards Contract", val: "0xA9B631ABcc4fd0bc766d7C0C8fCbf866e2bB0445" },
         { title: "Staking Contract", val: "0xBBc4f75874930EB4d8075FCB3f48af2535A8E848" }
      ]
   },
   p2: {
      title: "Token Distribution",
      subtitle: "Our token distribution strategy ensures a balanced and sustainable ecosystem:",
      list: [
         { title: "80% for Mining", val: "The majority of our tokens are available for mining, allowing participants to actively engage with the ecosystem."},
         { title: "20% for Project Development", val: "A portion of the tokens is allocated to support the current development and improvement of our project." }
      ],
      link: { label: "Tokenomics", val: "/coin" }
   },
   p3: {
      title: "NFT Staking Mechanics",
      subtitle: "Participants can acquire and stake NFTs to receive rewards in HASH tokens. Mining speed depends on the type and quantity of NFTs. We offer various types of NFTs:",
      list: [
         { title: "NFT GPU:", val: "Cost: $1.99 / Mining Speed: 0.042 #hash per hour"},
         { title: "NFT Asic", val:"Cost: $9.50 / Mining Speed: 0.42 #hash per hour" },
         { title: "NFT Farm:", val:"Cost: $29.20 / Mining Speed: 2.42 #hash per hour" }
      ],
      content: "In the future, additional inventory such as Rig, Rack, Container will be introduced."
   },
   p4: {
      title: "Key Features",
      list: [
         { title: "Universal Participation:", val: "Anyone can participate in our ecosystem without regional restrictions."},
         { title: "Initiation:", val: [
            "To start mining HASH tokens, a participant must create an NFT-space (registration).",
            "This minting process is free except for gas fees and is performed once per participant account. Afterward, participants can purchase NFT inventory for HASH token mining through staking.",
            "Participants have the right to exit staking and claim rewards at any time, considering the token balance in the pool. Rewards are distributed by the contract on a first-come, first-served basis."
         ]},
         { title: "Flexibility of Staking:", val: "Participants can withdraw NFTs from staking and list them for sale on the SEA NFT market if they decide to cease token mining."}
      ],
      contract: {
         title: "Contract", val: "0xBBc4f75874930EB4d8075FCB3f48af2535A8E848"
      }
   },
   p5: {
      title: "Profit Distribution from NFT Sales",
      subtitle: "Profits from NFT sales are strategically allocated to ensure the stability and growth of the project:",
      list: [
         { title: "50%", val: "of the proceeds are directed to the HASH/stablecoin liquidity pool, ensuring stability and liquidity in trading pairs." },
         { title: "35%", val: "forms reserves in the Treasury Fund: For future investments and project development." },
         { title: "15%", val: "to the Team Fund: Provides funding for the team to continue product development and improvement." }
      ]
   },
   p6: {
      title: "Future Development",
      subtitle: "We strive for continuous improvement and innovation. Our future plans include:",
      list: [
         { title: "Enhanced Analytics:", val: "Adding analytical data for a deeper understanding of the HASH coin ecosystem and movement." },
         { title: "Improved Interface: ", val: "Enhancing the user interface to improve the user experience." },
         { title: "Community Engagement and Partner Acquisition.", val:"" }
      ],
      link: {
         label: "Roadmap", val:"/road"
      }
   },
   p7: {
      title: "Conclusion",
      subtitle: "Hash Coin aims to create a reliable and engaging ecosystem. Our tokenomics and NFT staking mechanics are designed to ensure stability, incentivize participation, and support the long-term growth of our project. Join us in building a thriving community and a sustainable future. Follow our social networks for additional information and updates."
   }
};

export default p;
