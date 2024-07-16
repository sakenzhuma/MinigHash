import { Card, Loader, Text } from "@mantine/core"
import { useContractMetadata, MediaRenderer, Web3Button } from "@thirdweb-dev/react"
import { FARMER_ADDRESS } from "../../libs/common";
import { ErrorBox } from "../Htm";

export default function ClaimFarmer({ contract }: { contract: any }){

   const {data, isLoading, error } = useContractMetadata(contract);
   if(isLoading) return <Loader />;
   if(error) return <ErrorBox />;
   if(data?.length === 0) return <></>;

   return(<Card radius='md' shadow="lg" my={50}>
      <MediaRenderer src={data.image} height="280px" width="280px" />
      <Text size="xs" lh={1}>&nbsp;</Text>
      <Web3Button contractAddress={FARMER_ADDRESS}
         action={(contract) => contract.erc1155.claim(0, 1)}>
            Claim</Web3Button>
   </Card>)
}
