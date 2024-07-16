import A from "../components/A";
import { Flex, SimpleGrid, Text, Image, Group, Anchor } from "@mantine/core";
import { PageTitle } from "../components/Htm";
import { CardTitle, Page } from '../components/Page';
import p from '../source/promo';
import ImgPublic from '../assets/news.jpg';
import ImgProfile from '../assets/profile.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';

export default function Promo(){
   return(<A>
      <Flex direction='column'>
      <PageTitle title={p.title} subtitle={p.subtitle} />
         <FirstRow />
         <SecondRow />
         <ThirdRow />
         <Bottom />
      </Flex>
   </A>)
}

function FirstRow(): React.ReactNode {
   return (<SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p1.title} ta='center' />
         <Text ta='center' mb={15} px={10}>{p.p1.subtitle}</Text>
         <Text ta='center'>{p.p1.content}</Text>
      </Page>
      <Page>
         <CardTitle v={p.p2.title} ta='center' />
         <Text ta='center' mb={15} px={10}>{p.p2.list[0]}</Text>
         <Text ta='center'>{p.p2.list[1]}</Text>
         <Group align="center" pt={20} mx='auto'>
            {p.p2.links.map((item, index) => {
               return <Anchor fw='bold' c='blue.6' key={index} href={item.val}>
                  {item.label}</Anchor>
            })}
         </Group>
      </Page>
   </SimpleGrid>)
}

function SecondRow(): React.ReactNode {
   return (<SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Page>
         <CardTitle v={p.p3.title} ta='center' />
         <Image w='100%' src={ImgPublic} alt='News' />
      </Page>
      <Page>
         <CardTitle v={p.p4.title} ta='center' />
         <Image w='100%' src={ImgProfile} alt='Profile' />
         <Text p={20} ta='center' mt={15}>{p.p4.content}</Text>
      </Page>
   </SimpleGrid>)
}

function ThirdRow(): React.ReactNode {
   return (<SimpleGrid cols={{ base: 1, sm: 3 }}>
      <Page><Image w='100%' src={logo1} alt='Logo 1' /></Page>
      <Page><Image w='100%' src={logo2} alt='Logo 2' /></Page>
      <Page><Image w='100%' src={logo3} alt='Logo 3' /></Page>
   </SimpleGrid>)
}

function Bottom(): React.ReactNode {
   return ( <SimpleGrid cols={1}>
      <Page>
         <CardTitle v={p.p6.title} ta='center' />
         <Text ta='center' mb={10} px={{ base: 10, sm: 40 }}>
            <Anchor fw='bold' c='blue.6' href={p.p6.link.val}>{p.p6.link.label}</Anchor>
         </Text>
      </Page>
   </SimpleGrid>
   )
}





