import { Card, Box, List, Text, Title } from '@mantine/core'
import React from 'react'

interface Children {
   children: React.ReactNode
}

export function Page({ children }: Children ): React.ReactNode {
   return <Card mb={20} py={{ base: 20, sm: 40 }}
      px={{ base: 10, sm: 20 }} radius='md'>{children}</Card>
}

export function ListBox({ children }: Children ): React.ReactNode {
   return <List listStyleType="none" mb={20}>{children}</List>
}

export function CardTitle({ v, ta = "left" }: { v: string, ta?: any }): React.ReactNode {
   return <Title order={4} mb={16} ta={ta}>{v}</Title>
}

export function Subtitle({ v, ta }: { v: string, ta?: any }): React.ReactNode {
   return <Title order={5} mb={4} ta={ta}>{v}</Title>
}

export function ContractBox({ title, val }: { title: string, val: string }): React.ReactNode {
   return <Box ta='center' py={10}>
      <Text fw='bold' size='sm' mb={3}>{title}</Text>
      <Text className='break' size='sm'>{val}</Text>
   </Box>
}
