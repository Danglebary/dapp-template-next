import Head from 'next/head'
import { Container } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
    title: string
}

const Page = ({ children, title }: Props) => {
    return (
        <Container maxW="100%">
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </Container>
    )
}

export default Page
