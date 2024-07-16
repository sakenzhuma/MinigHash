import A from "../components/A";
import { Flex, SimpleGrid, Image, Text, Box, Title } from "@mantine/core";
import { PageTitle } from "../components/Htm";
import ImgBase from '../assets/base.jpeg';
import { CardTitle, ContractBox, Page, Subtitle } from '../components/Page';
import p from '../source/coin';


export default function Coin(){
   return(<A>
      <Flex direction='column'>
      <PageTitle title={p.title} subtitle={p.subtitle} />
         <FirstRow />
         <SecondRow />
      </Flex>
   </A>)
}

function FirstRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 3 }}>
      <Page>
         <Image mb={20} src={ImgBase} alt='Image' />
         <CardTitle v={p.p1.title} />
         {p.p1.list.map((item, index) => {
            return <Text py={2} key={index}>
               <Text display='inline' fw='bold'>{item.title}</Text> {item.val}</Text>
         })}
         <ContractBox title={p.p1.contact.title} val={p.p1.contact.val} />
      </Page>
      <Page>
         <CardTitle v={p.p2.title} />
         {p.p2.list.map((item, index) => {
            return <Box key={index}>
                <Title order={5} my={10}>{item.title[0]} {item.title[1]}</Title>
                <Text mb={10}>{item.val}</Text>
            </Box>
         })}
         <ContractBox title={p.p2.contact.title} val={p.p2.contact.val} />
      </Page>
      <Page>
         <CardTitle v={p.p3.title} />
         <Subtitle v={p.p3.subtitle} />
         {p.p3.list.map((item, index) => {
            return <Box key={index}>
               <Text mb={10}>{item}</Text>
            </Box>
         })}
      </Page>
   </SimpleGrid>
   )
}

function SecondRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 3 }}>
      <Page>
         <CardTitle v={p.p4.title} />
         <Subtitle v={p.p4.subtitle} />
         {p.p4.list.map((item, index) => {
            return <Text mb={10} key={index}>{item}</Text>
         })}
      </Page>
      <Page>
         <CardTitle v={p.p5.title} />
         {p.p5.list.map((item, index) => {
            return <Text mb={10} key={index}>{item}</Text>
         })}
      </Page>
      <Page>
         <CardTitle v={p.p6.title} />
         {p.p6.list.map((item, index) => {
            return <Text mb={10} key={index}>{item}</Text>
         })}
      </Page>
   </SimpleGrid>
   )
}

