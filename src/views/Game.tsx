import { FARMER_ADDRESS, TOOLS_ADDRESS, STAKING_ADDRESS, REWARDS_ADDRESS } from '../libs/common';
import { useContract, useOwnedNFTs, useContractRead } from '@thirdweb-dev/react'
import { Flex, Loader, SimpleGrid } from "@mantine/core";
import ClaimFarmer from '../components/widgets/ClaimFarmer';
import MiningCenter from '../components/widgets/MiningCenter';
import Inventory from '../components/widgets/Inventory';
import Equipments from '../components/widgets/Equipments';

export default function Game({ address }: { address : string }){

   const { contract: contractFarmer } = useContract(FARMER_ADDRESS);
   const { contract: contractTools } = useContract(TOOLS_ADDRESS);
   const { contract: contractStaking } = useContract(STAKING_ADDRESS);
   const { contract: contractRewards } = useContract(REWARDS_ADDRESS);

   const { data: dataFarmer, isLoading: isLoadingNFTsFarmer } = useOwnedNFTs(contractFarmer, address);
   const { data: dataTools, isLoading: isLoadingNFTsTools } = useOwnedNFTs(contractTools, address);
   const { isLoading: isStakeInfoLoading } =
      useContractRead(contractStaking,"getStakeInfo", [address]);

   if(isLoadingNFTsFarmer) return <Loader />;
   if(dataFarmer?.length === 0) return <ClaimFarmer contract={contractFarmer} />;
   if(isLoadingNFTsTools) return <Loader />;


   if(isStakeInfoLoading) return <Loader />
   return(
      <Flex direction='column'>
         <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <MiningCenter nft={dataFarmer?.[0]} address={address}
               contractStaking={contractStaking}
               contractRewards={contractRewards} />
            <Inventory address={address} data={dataTools}
               contractStaking={contractStaking}
               contractTools={contractTools} />
         </SimpleGrid>
         <Equipments address={address}
            contractStaking={contractStaking}
            contractTools={contractTools} />
      </Flex>
   )
}
