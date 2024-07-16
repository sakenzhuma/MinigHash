import { Card, Flex, Image, Text, Group } from "@mantine/core";
import AsicLogo from "../../assets/asic-logo.png";
import Logo from '../../assets/logo.png';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Intro(){
   return (<Card shadow='lg' radius='md' display='flex' mx='auto'
      bg='white' miw='240px' py={30} my={{ base: 30, sm: 60 }}>
      <AppLogo />
      <Flex justify='center' py={14}>
         <Image w='130px' src={AsicLogo} alt='Asic Logo' />
      </Flex>
      <Flex direction='column'>
         <Text style={{ borderBottom: '1px solid #D0EBFF' }}
            fw='bolder' size='md' ta='center' py={6} mb={12}>TO PLAY</Text>
         <ConnectWallet />
      </Flex>
   </Card>)
}


function AppLogo(){
   return(<Flex direction='column' align='center' justify='center' p={10}>
      <Image mb={10} display='flex' w='54px' src={Logo} radius='100%' alt='Logo'
      style={{ border: '1px solid #666' }} />
      <Group display='block' ta='center'>
         <Text size='sm' lh={0.5} c='dark.9'>Mining</Text>
         <Text size='xl' fw='bold' c='dark.9'>Hash</Text>
      </Group>
   </Flex>)
}
