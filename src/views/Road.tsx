import A from "../components/A";
import { Flex, SimpleGrid, Text, List, Title } from "@mantine/core";
import { IconStatus, PageTitle } from "../components/Htm";
import { CardTitle, Page, Subtitle } from '../components/Page';
import p from '../source/road';

export default function Road(){
   return(<A>
      <Flex direction='column'>
      <PageTitle title={p.title} subtitle={p.subtitle} />
         <FirstRow />
         <SecondRow />
         <FourRow />
      </Flex>
   </A>)
}

function FirstRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p1.title} ta='center' />
         <Subtitle v={p.p1.subtitle} ta='center' />
         <List px={15} mb={10}>
         {p.p1.list.map((item, index) => {
            return <List.Item key={index} icon={<IconStatus idx={item.status} />} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
      </Page>
      <Page>
         <CardTitle v={p.p2.title} ta='center' />
         <Subtitle v={p.p2.subtitle} ta='center' />
         <List px={15} mb={10}>
         {p.p2.list.map((item, index) => {
            return <List.Item key={index} icon={<IconStatus idx={item.status} />} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
      </Page>
   </SimpleGrid>
   )
}

function SecondRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p3.title} ta='center' />
         <Subtitle v={p.p3.subtitle} ta='center' />
         <List px={15} mb={10}>
         {p.p3.list.map((item, index) => {
            return <List.Item key={index} icon={<IconStatus idx={item.status} />} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
      </Page>
      <Page>
         <CardTitle v={p.p4.title} ta='center' />
         <Subtitle v={p.p4.subtitle} ta='center' />
         <Title order={5} my={10}>{p.p4.step1.title}</Title>
         <List px={15} mb={10}>
         <List.Item key={100} py={3} icon={<IconStatus idx={0} />}>
               <Text fw='bold'>{p.p4.step1.title}</Text>
            </List.Item>
         {p.p4.list.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         <List.Item key={101} py={3} icon={<IconStatus idx={3} />}>
            <Text fw='bold'>{p.p4.step2.title}</Text>
            <Text>{p.p4.step2.val}</Text>
         </List.Item>
         </List>
      </Page>
   </SimpleGrid>
   )
}

function FourRow(): React.ReactNode {
   return ( <SimpleGrid cols={1}>
      <Page>
         <CardTitle v={p.p5.title} ta='center' />
         <Text ta='center' mb={10} px={{ base: 10, sm: 40 }}>{p.p5.subtitle}</Text>
      </Page>
   </SimpleGrid>
   )
}





