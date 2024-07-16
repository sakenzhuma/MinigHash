import { Card, Flex, Loader, Text } from "@mantine/core";
import { MediaRenderer, useContractRead } from '@thirdweb-dev/react';
import { convertAmount } from "../../libs/common";
import { Heading } from "../Htm";

export default function MiningCenter({ nft, address, contractStaking, contractRewards }: {
      nft?: any, address: string, contractStaking: any, contractRewards: any }){
   const { data: totalRewards, isLoading: isTotal } =
   useContractRead(contractStaking, "getRewardTokenBalance");
   const { data: dataRewards, isLoading: isAmount } =
   useContractRead(contractRewards, "balanceOf", [address]);
   if(isTotal || isAmount) return <Loader />;

   return (<Card mb={20}>
      <Heading title="Mining Center:" />
      <MediaRenderer width="100%" height="100%" src={nft.metadata.image} alt="NFT Image" />
      <Flex gap={10} py={10} mt={6} justify='space-between'>
         <Flex direction='column' justify='start'>
            <Text fw='bold'>$HASH Balance:</Text>
            <Text>{convertAmount(dataRewards['_hex'])}</Text>
         </Flex>
         <Flex direction='column' justify='end'>
            <Text fw='bold'>Rewards available in Contract:</Text>
            <Text>{convertAmount(totalRewards['_hex'])}</Text>
         </Flex>
      </Flex>
   </Card>)
}
