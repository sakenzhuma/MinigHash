const p = {
   title : "General Information",
   subtitle: "A breakdown of the tokenomics of the Hash Coin project.",
   p1: {
      title: "General Information",
      list: [
         { title: "Token Name:", val: "Hash Coin" },
         { title: "Token Symbol:", val: "HASH" },
         { title: "Network:", val: "Base" },
         { title: "Total Supply:", val: "10 billion HASH" },
      ],
      contact: { title: "Contract", val: "0xA9B631ABcc4fd0bc766d7C0C8fCbf866e2bB0445" }
   },
   p2: {
      title: "Mining Allocation",
      list: [
         {
            title: ["Mining - 80%", "(8 billion tokens)"],
            val: "These tokens are designated for mining through the staking of NFT inventory."
         },
         {
            title: ["Mining on EVM Networks - 40%", "(4 billion tokens)"],
            val: "These tokens are in the mining pool on the Base network and are available for mining now."
         },
         {
            title: ["Mining on Other Networks - 40%", "(4 billion tokens)"],
            val: "These tokens are held in a team reserve address and are intended for topping up the Staking Contract on the Base network or for creating a similar contract on other networks as decided by the project team."
         },
      ],
      contact: { title: "Staking Contract", val: "0xBBc4f75874930EB4d8075FCB3f48af2535A8E848" }
   },
   p3: {
      title: "Partnerships and Listing",
      subtitle: "10% (1 billion tokens)",
      list: [
         "These tokens are intended for integration programs, partner community incentives, and providing liquidity on staking platforms.",
         "Currently held in the team reserve address. Unused tokens may be sent to the Staking Contract."
      ]
   },
   p4: {
      title: "Community Development (Rewards)",
      subtitle: "5% (500 million tokens)",
      list: [
         "These tokens are intended for community development and incentives. Interaction with influencers, bloggers, and rewarding project ambassadors. Rewards for participating in various quests and completing valuable tasks.",
         "Currently held in the team reserve address. Unused tokens may be sent to the Staking Contract."
      ]
   },
   p5: {
      title: "Ecosystem Formation (Team)",
      list: [
         "These tokens are intended for initial ecosystem formation, liquidity pool funding, and developer incentives.",
         "Currently held in the team reserve address. Unused tokens may be sent to the Staking Contract."
      ]
   },
   p6: {
      title: "Special Features",
      list: [
         "We focus on token mining through the staking of NFT inventory. However, to enhance incentives and opportunities, we use 20% of the tokens for marketing and project development in the early stages.",
         "This strategy allows us to rapidly expand the ecosystem, integrate partner communities, and ensure liquidity across various platforms, ultimately contributing to the growth and success of the project."
      ]
   }
};

export default p;
