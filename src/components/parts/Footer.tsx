import { Container, Flex, Text, Group, Anchor, Grid, Image, List } from "@mantine/core"
import { IconBrandTelegram, IconBrandDiscord, IconBrandX, IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

export default function Footer(){
   return (<Flex direction='column' bg='zinc.9' c='gray.2'>
      <MobileLinks />
      <Flex display={{ base: 'none', sm: 'inherit' }} py={40}><Container mx='auto'>
         <Grid gutter={10}>
            <Grid.Col span={{ base: 12, sm: 3 }}><RightSide /></Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}><QuickLinks /></Grid.Col>
            <Grid.Col span={{ base: 12, sm: 3 }}><LeftSide /></Grid.Col>
         </Grid>
      </Container></Flex>
      <Copywrite />
   </Flex>)
}

function RightSide(){
   return(
      <Flex direction='column' justify='center'>
         <AppLogo />
         <Text size="sm" ta='center' px={10}>Become an NFT inventory owner and unlock the world of crypto mining!</Text>
      </Flex>
   )
}

function LeftSide(){
   return(
         <Text size="sm" ta='center' pt={{ base: 0, sm: 40 }}><Anchor href="https://www.base.org/ecosystem" target="_blank">Base Network</Anchor>,
         developed by Coinbase, enhances Ethereum's scalability and reduces transaction costs, supporting a wide range of decentralized applications.</Text>
   )
}

function MobileLinks(){
   return(
      <Group display={{ base: 'inherit', sm: 'none' }} py={16} mx='auto'>
         <Link to="/coin">Coin</Link>
         <Link to="/roadmap">Road</Link>
         <Link to="/paper">Paper</Link>
      </Group>
   )
}

function QuickLinks(){
   const py = 2;
   const Links = [
      'https://lookhook.info',
      'https://opensea.io/collection/farm-inventory'];
   return (
   <Flex direction='column'>
      <Text fw='bold' size="xl" mx='auto' pt={14}>Quick Links</Text>
      <Flex justify='center' py={25}>
         <List listStyleType='none'>
            <List.Item py={py}><Anchor href={Links[0]} target="_blank">
               Team <IconExternalLink size={16} /></Anchor></List.Item>
            <List.Item py={py}><Anchor href={Links[1]} target="_blank">
               OTC <IconExternalLink size={16} /></Anchor></List.Item>
            <List.Item py={py}><Text>Invest</Text></List.Item>
         </List>
         <List listStyleType='none' px={50}>
            <List.Item py={py}><Link to="/coin">Coin</Link></List.Item>
            <List.Item py={py}><Link to="/roadmap">Road</Link></List.Item>
            <List.Item py={py}><Link to="/paper">Paper</Link></List.Item>
         </List>
         <List listStyleType='none'>
            <List.Item py={py}><Link to="/promo">Promo</Link></List.Item>
            <List.Item py={py}><Link to="/eco">Eco</Link></List.Item>
            <List.Item py={py}><Text>Tag</Text></List.Item>
         </List>
      </Flex>
   </Flex>)
}

function Copywrite(){
   const Links = [
      'https://twitter.com/HashCoinFarm',
      'https://discord.com/invite/D55sWhNgcb',
      'https://t.me/ChainInside/524',
      'https://github.com/LookHookInfo'
   ];
   return(<Flex justify='center' align='center' p={16}
      style={{ borderTop: '1px solid #555' }}>
         <Flex direction='column' justify='center'>
            <Group p={10} pb={5}>
               <Anchor href={Links[0]} target="_blank"><IconBrandX /></Anchor>
               <Anchor href={Links[1]} target="_blank"><IconBrandDiscord /></Anchor>
               <Anchor href={Links[2]} target="_blank"><IconBrandTelegram /></Anchor>
               <Anchor href={Links[3]} target="_blank"><IconBrandGithub /></Anchor>
            </Group>
            <Text size="sm">© 2024 All rights reserved.</Text>
         </Flex>
   </Flex>)
}

export function AppLogo(){
   return(<Flex direction='column' align='center' justify='center' p={10}>
      <Image mb={10} display='flex' w='48px' src={Logo} radius='100%' alt='Logo'
      style={{ border: '1px solid #666' }} />
      <Group display='block' ta='center'>
         <Text size='sm' lh={0.5} c='gray.2'>Mining</Text>
         <Text size='xl' fw='bold' c='gray.2'>Hash</Text>
      </Group>
   </Flex>)
}
