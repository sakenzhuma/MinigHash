import { Button, Card, Flex, SimpleGrid, Text } from "@mantine/core";
import { Heading, QtyBox } from "../Htm";
import { Link } from "react-router-dom";
import { STAKING_ADDRESS } from "../../libs/common";
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Inventory({ address, data, contractStaking, contractTools }: {
   address: string, data: any, contractStaking: any, contractTools: any
}){

   async function stakeNFT(id: any, qty: any){
      const isApproved = await contractTools?.erc1155.isApproved(address, STAKING_ADDRESS)
      if (!isApproved) {
         await contractTools?.erc1155.setApprovalForAll(STAKING_ADDRESS, true)
      }
      await contractStaking?.call("stake", [id, qty]);
   }

   if(data?.length === 0) return <ShopDevice />;

   return (<Card mb={20}>
      <Heading title="Inventory:" />
      <SimpleGrid cols={2}>
         {data?.map((v: { v: any}) => <InventoryItem item={v} stakeNFT={stakeNFT} />)}
      </SimpleGrid>
   </Card>)
}


function ShopDevice(){
   return(<Card mb={20}>
      <Heading title="Inventory: " />
      <Link to='/shop'><Button fullWidth color="gray">
         Shop Device</Button></Link>
   </Card>)
}

function InventoryItem({ item, stakeNFT }: { item: any, stakeNFT: any }){
   const [value, setValue] = useState<number | string>(1);
   return(<Card radius='md' shadow="lg" bd='1px solid #ddd'>
      <Flex bg='white' justify='center'>
         <MediaRenderer width="90%" height="90%" src={item.metadata.image} alt="Inventory" />
      </Flex>
      <Text fw='bold' ta='center'>{item.metadata.name}</Text>
      <Text mb={10} ta='center' size='xs'>{item.metadata.description}</Text>
      <QtyBox value={value} setValue={setValue} />
      <Web3Button contractAddress={STAKING_ADDRESS}
         action={() => stakeNFT(item.metadata.id, value)}>Equip</Web3Button>
   </Card>)
}

