import { Flex, Image, Text, Box, Container, Group, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import Footer from "./parts/Footer";
import { ConnectWallet } from "@thirdweb-dev/react";
import { IconExternalLink } from "@tabler/icons-react";
import React from "react";


export default function A({ children }: Readonly<{ children: React.ReactNode }>){
   return(<Flex direction='column' mih='100%'>
      <Navbar />
      <Flex direction='column' flex={1} bg='gray.2'>
         <Container mx='auto' p={{ base: 20, sm: 40 }}>{ children }</Container>
      </Flex>
      <Footer />
   </Flex>)
}

function Navbar(){
   return (<Box bg='zinc.9'>
      <Container mx='auto'>
         <Flex>
            <AppLogo />
            <NavLinks />
            <Flex align='center'>
               <ConnectWallet />
            </Flex>
         </Flex>
      </Container>
   </Box>)
}


function AppLogo(){
   return(<Flex display={{ base: 'none', sm: 'inherit' }} align='center' justify='center' p={10}>
      <Image mr={10} display='flex' w='48px' src={Logo} radius='100%' alt='Logo'
      style={{ border: '1px solid #666' }} />
      <Flex direction='column' pt={11}>
         <Text size='sm' lh={0.5} c='gray.0'>Mining</Text>
         <Text size='xl' fw='bold' c='gray.0'>Hash</Text>
      </Flex>
   </Flex>)
}

function NavLinks(){
   return(<Flex py={20} px={0} flex={1} align='center'
      justify={{ base: 'start', sm: 'center' }}>
   <Group justify="center" c='white'>
      <Link to="/">Play</Link>
      <Link to="/shop">Shop</Link>
      <Anchor href="https://guild.xyz/hashcoin" target="_blank">Gluid
         <IconExternalLink size={16} /> </Anchor>
   </Group></Flex>)
}
