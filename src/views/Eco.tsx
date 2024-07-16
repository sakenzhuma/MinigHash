import A from "../components/A";
import { Anchor, Container, List, SimpleGrid, Text } from "@mantine/core";
import { PageTitle } from "../components/Htm";
import { CardTitle, Page } from '../components/Page';
import p from '../source/eco';

export default function Eco(){
   return(<A>
      <Container fluid>
         <PageTitle title={p.title} subtitle={p.subtitle} />
         <FirstRow />
         <SecondRow />
      </Container>
   </A>)
}

function FirstRow(): React.ReactNode {
   return (<SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p1.title} ta='center' />
         <Text ta='center'>{p.p1.subtitle}</Text>
      </Page>
      <Page>
         <CardTitle v={p.p2.title} ta='center' />
         <List listStyleType="none">
         {p.p2.links.map((item, index) => {
            return <List.Item key={index}>
               {item.title} <Anchor c="blue.9" href={item.val} target="_blank">{item.label}</Anchor>
            </List.Item>
         })}
         </List>
      </Page>
   </SimpleGrid>)
}

function SecondRow(): React.ReactNode {
   return (<SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p3.title} ta='center' />
         <List listStyleType="none">
         {p.p3.links.map((item, index) => {
            return <List.Item key={index}>
               {item.title} <Anchor c="blue.9" href={item.val} target="_blank">{item.label}</Anchor>
            </List.Item>
         })}
         </List>
      </Page>
      <Page>
         <CardTitle v={p.p4.title} ta='center' />
         <List listStyleType="none">
         {p.p4.links.map((item, index) => {
            return <List.Item key={index}>
               {item.title} <Anchor c="blue.9" href={item.val} target="_blank">{item.label}</Anchor>
            </List.Item>
         })}
         </List>
      </Page>
   </SimpleGrid>)
}







