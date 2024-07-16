
import { Flex, Notification, NumberInput, Text, ThemeIcon, rem } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconAlertHexagon, IconCircleCheck, IconCircleChevronLeft, IconAlertCircle } from '@tabler/icons-react'
import { Link, useNavigate } from "react-router-dom";

export function Square(){
   return(<Flex direction='column' p={50} bg='yellow'>
      <Text>Apples and Oranges</Text>
   </Flex>)
}

export function Heading({ title }: { title: string}){
   return <Text fw='bold' mb={10}>{title}</Text>
}



export function PageTitle({ title, subtitle } : { title: string, subtitle?: string}){
   const { hovered, ref } = useHover()
   return (<Flex align='center' justify='center' mb={20}>
      <Link to='/'><Flex px={15} align='center' style={{
         borderRight: '1px solid #e1e1e1' }}>
            <ThemeIcon ref={ref} color={ hovered ? 'blue.6' : 'blue.3'} radius='xl' size={36}>
         <IconCircleChevronLeft color="white" size={40} /></ThemeIcon>
      </Flex></Link>
      <Flex p={10} px={20} align='center' direction='column'>
         <Text fw='bold' size="lg" lh={1.2}>{title}</Text>
         { subtitle && <Text>{subtitle}</Text> }
      </Flex>
   </Flex>)
}


export function ErrorBox({ message } : { message? : string }){
   const navigate = useNavigate();
   const xIcon = <IconAlertHexagon style={{ width: rem(20), height: rem(20) }} />;
   return <Notification my={50} onClose={() => navigate('/')}
      icon={xIcon} color="red" title="Notification">
   { message || 'Something went wrong while proccessing!' }
   </Notification>
}

export function QtyBox({ value, setValue }: {
   value: string | number, setValue: any
}){
   return(
      <NumberInput mb={12} radius='md' value={value} min={1} max={10000}
      thousandSeparator=',' onChange={setValue} />)
}

export function IconSuccess(){
   return (<ThemeIcon color="teal" size={24} radius="xl">
      <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
    </ThemeIcon>)
}

export function IconWarning({c = 'yellow'}: { c: string }){
   return (<ThemeIcon color={c} size={24} radius="xl">
      <IconAlertCircle style={{ width: rem(16), height: rem(16) }} />
    </ThemeIcon>)
}

export function IconStatus({ idx = 1 }: { idx : number }){
   return (idx === 1 ? <IconSuccess /> : <IconWarning
      c={idx === 2 ? 'yellow' : idx === 3 ? 'blue.5' : 'gray.5'} />);
}


