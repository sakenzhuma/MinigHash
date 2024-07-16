import A from "../components/A";
import { MediaRenderer, useContract, useNFTs, Web3Button, useActiveClaimCondition } from '@thirdweb-dev/react'
import { TOOLS_ADDRESS } from "../libs/common";
import { Badge, Card, Flex, Loader, SimpleGrid, Text } from "@mantine/core";
import { ErrorBox, PageTitle, QtyBox } from "../components/Htm";
import { useState } from "react";
import { formatUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";

export default function Shop(){
   const { contract } = useContract(TOOLS_ADDRESS);
   const { data: nfts, isLoading, error } = useNFTs(contract);

   if(isLoading) return <A><Card><Loader /></Card></A>;
   if(error) return <A><ErrorBox /></A>;
   if(nfts?.length === 0) return <A><></></A>;

   return (<A>
      <Flex direction='column'>
      <PageTitle title="Shop" subtitle="Purchase tools for Stablecoin to increase your earnings." />
      <SimpleGrid cols={{ base: 1, sm: 3 }}>
         {nfts?.map((nft: any, index: number) => <NFTsItem index={index}
           contract={contract} nft={nft} />)}
      </SimpleGrid></Flex>
   </A>)
}

function NFTsItem({ nft, index, contract}: {
      nft: any, index: number, contract: any
   }){
   const [value, setValue] = useState<number | string>(1);
   const { data, isLoading, error } = useActiveClaimCondition(
      contract, nft.metadata.id );

   if(isLoading) return <Loader />;
   if(error) return <ErrorBox />
   if(!data) return <></>;

   const getPrice = (v: BigNumber) => formatUnits(v, 6);

   return(<Card p={{ base: 10, sm: 30 }} shadow="lg" radius='md' key={index}>
      <MediaRenderer width="90%" height="90%"
         src={nft.metadata.image} alt={"Device " + index} />
      <Text fw='bold' ta='center'>{nft.metadata.name}</Text>
      <Text mb={10} ta='center' size='xs'>{nft.metadata.description}</Text>
      <Badge size='lg' mx='auto' mb={15} py={10} variant='outline' color="dark.9">
         { getPrice(data.price) }</Badge>
      <QtyBox value={value} setValue={setValue} />
      <Web3Button contractAddress={TOOLS_ADDRESS}
         action={(contract) => contract.erc1155.claim(nft.metadata.id, value)}>
            Buy</Web3Button>
   </Card>);
}
