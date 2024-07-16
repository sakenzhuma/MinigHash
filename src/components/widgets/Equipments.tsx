import { Avatar, Badge, Card, Divider, Flex, Loader, SimpleGrid, Text } from "@mantine/core";
import { Heading, QtyBox } from "../Htm";
import { MediaRenderer, useContractRead, useNFT, Web3Button } from '@thirdweb-dev/react'
import { formatUnits } from "ethers/lib/utils";
import { STAKING_ADDRESS } from "../../libs/common";
import { useState } from "react";

interface Props {
   address: string,
   contractStaking: any, contractTools: any
}

interface EquipmentProps {
   index: number, id: number, address: string,
   contractStaking: any, contractTools: any
}

export default function Equipments({ address, contractStaking,
   contractTools }: Props){
   const { data: dataStaking, isLoading: isLoading } =
      useContractRead(contractStaking, "getStakeInfo", [address]);
   if(isLoading) return <Loader />;
   if(dataStaking?.length === 0) return <></>;

   return (<Card mb={20}>
   <Heading title="Equipments:" />
   <SimpleGrid>
      {dataStaking[0].map((nft: any, index: number) => <Equipment
         index={index} id={nft.toNumber()} address={address}
         contractStaking={contractStaking} contractTools={contractTools} />)}
   </SimpleGrid></Card>)
}

function Equipment({ index, id, address, contractStaking, contractTools }: EquipmentProps ){
   const [value, setValue] = useState<number | string>(1);
   const { data: nft, isLoading: isNFTsLoading } = useNFT(contractTools, id);
   const { data: rewards, isLoading } =
      useContractRead(contractStaking, "getStakeInfoForToken", [id, address])

   if(isNFTsLoading || isLoading ) return <Loader />
   if(! nft) return <></>;

   const onWithdraw = (contract: any) => {
      contract.call("withdraw", [id, value])
   }

   return (<Card mb={10} key={index} maw='230px' bd='1px solid #ddd' shadow="md">
      <Flex justify='center'>
      <MediaRenderer width="90%" height="90%"
         src={nft.metadata.image} alt={"Equipemnt " + index} />
      </Flex>
      <Text fw='bold' ta='center'>{nft.metadata.name}</Text>
      <Text mb={10} ta='center' size='xs'>{nft.metadata.description}</Text>
      <Text mb={10} ta='center' size='xs'>
         <b>Equipped:</b> { formatUnits(rewards[0], 0)}
      </Text>
      <QtyBox value={value} setValue={setValue} />
      <Web3Button contractAddress={STAKING_ADDRESS}
         action={onWithdraw}>Unequip</Web3Button>
      <Divider my={15} labelPosition="center"
         label={<Avatar radius='xl'>OR</Avatar>} />
      <Text mb={10} ta='center' size='xs'>Claimable $HASH:</Text>
      <Badge mx='auto' mb={12} variant='outline' color="black">{formatUnits(rewards[1], 18)}</Badge>
      <Web3Button
         contractAddress={STAKING_ADDRESS}
         action={(contract) => contract.call("claimRewards", [id])}>
      Claim $HASH</Web3Button>
   </Card>)
}



