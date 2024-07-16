import A from "../components/A";
import { Flex, SimpleGrid, Text, Box, List, Button } from "@mantine/core";
import { PageTitle } from "../components/Htm";
import { CardTitle, Page } from '../components/Page';
import p from '../source/paper';
import { Link } from "react-router-dom";


export default function Paper(){
   return(<A>
      <Flex direction='column'>
      <PageTitle title={p.title} subtitle={p.subtitle} />
         <FirstRow />
         <SecondRow />
         <ThirdRow />
         <FourRow />
      </Flex>
   </A>)
}

function FirstRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p1.title} ta='center' />
         <Text ta='center' mb={10} px={10}>{p.p1.subtitle}</Text>
         <Text>{p.p1.content}</Text>
         <Box my={15}>
            <Text fw='bold'>{p.p1.contact.title}</Text>
            <Text>{p.p1.contact.subtitle}</Text>
         </Box>
         <List pl={10} mb={10}>
         {p.p1.contracts.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold' size="sm">{item.title}</Text>
               <Text className="break" size="sm">{item.val}</Text>
            </List.Item>
         })}
         </List>
      </Page>
      <Page>
         <CardTitle v={p.p2.title} ta='center' />
         <Text ta='center' mb={20} px={10}>{p.p2.subtitle}</Text>
         <List px={15}>
         {p.p2.list.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold' mb={2}>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
         <Link to={p.p2.link.val}>
            <Button fullWidth my={20} color="gray">{p.p2.link.label}</Button></Link>
      </Page>
   </SimpleGrid>
   )
}

function SecondRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p3.title} ta='center' />
         <Text ta='center' mb={10} px={10}>{p.p3.subtitle}</Text>
         <List px={15} mb={10}>
         {p.p3.list.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
         <Text ta='center' px={20}>{p.p3.content}</Text>
      </Page>
      <Page>
         <CardTitle v={p.p4.title} ta='center' />
         <Box mb={15}>
            <Text fw='bold'>{p.p4.list[0].title}</Text>
            <Text>{p.p4.list[0].val}</Text>
         </Box>
         <Box>
            <Text fw='bold'>{p.p4.list[1].title}</Text>
            <Text mb={15}>{p.p4.list[1].val[0]}</Text>
            <Text mb={15}>{p.p4.list[1].val[1]}</Text>
            <Text mb={15}>{p.p4.list[1].val[2]}</Text>
         </Box>
         <Box mb={15}>
            <Text fw='bold'>{p.p4.list[2].title}</Text>
            <Text>{p.p4.list[2].val}</Text>
         </Box>
      </Page>
   </SimpleGrid>
   )
}

function ThirdRow(): React.ReactNode {
   return ( <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p5.title} ta='center' />
         <Text ta='center' mb={10} px={10}>{p.p5.subtitle}</Text>
         <List px={15} mb={10}>
         {p.p5.list.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
      </Page>
      <Page>
         <CardTitle v={p.p6.title} ta='center' />
         <Text ta='center' mb={10} px={10}>{p.p6.subtitle}</Text>
         <List px={15} mb={10}>
         {p.p6.list.map((item, index) => {
            return <List.Item key={index} py={3}>
               <Text fw='bold'>{item.title}</Text>
               <Text>{item.val}</Text>
            </List.Item>
         })}
         </List>
         <Link to={p.p6.link.val}>
         <Button fullWidth my={20} color="gray">{p.p6.link.label}</Button></Link>
      </Page>
   </SimpleGrid>
   )
}

function FourRow(): React.ReactNode {
   return ( <SimpleGrid cols={1}>
      <Page>
         <CardTitle v={p.p7.title} ta='center' />
         <Text ta='center' mb={10} px={{ base: 10, sm: 40 }}>{p.p7.subtitle}</Text>
      </Page>
   </SimpleGrid>
   )
}





