import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useColorMode,
    Flex,
    useMediaQuery,
    Image
  } from '@chakra-ui/react'
import { accordionTheme } from '../components/accordion'
import { extendTheme, ChakraProvider, Link, Text } from "@chakra-ui/react";

export const theme = extendTheme({
components: { Accordion: accordionTheme },
})

export default function ProjectInfo() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ChakraProvider theme={theme}>
        <Accordion defaultIndex={[0]} allowMultiple allowToggle width="100%">
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%">
                Boundless Bazaar

                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                June 2023 - Present
            </Text>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}>
            <Box pb='5'>
            <Text pb={10}>
            Created a web platform that uses a  marketplace to connect buyers 
            aspiring to purchase products that do not ship to their location 
            to travellers – a mutually beneficial ecosystem that empowers travelers 
            to monetize their trips by assisting buyers in purchasing and delivering 
            their desired items, while also enabling buyers to access unique products from 
            around the world. Learnt and familiarised with Next.js 13, Tailwind CSS, Node.js, 
            Primsa ORM, Stripe Pay.
            </Text>
            <Link href="https://docs.google.com/document/d/1wqOvf7xZXOROcQBBKikaxZ4znDYnS4p2" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Project README
            </Link>
            <br />
            <Link href="https://boundless-bazaar.vercel.app/"
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Website
            </Link>
            </Box>
            <Box ml={isNotSmallerScreen ? 10 : 0}>
            <Link href="https://boundless-bazaar.vercel.app/"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='bb.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Surf
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                December 2022 - Present
            </Text>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}>
            <Box pb='5'>
            <Text pb={10}>
            Created an AI-powered in-browser IDE for aspiring web3 developers and existing 
            web3 developers to supercharge their workflow.	 Surf saves its intended users 
            time from prompt engineering and streamlining their workflow from debugging to deployment. 
            Learnt and familiarised with frontend React.js library Chakra UI, serverless computing 
            platform AWS Lambda, and more.

            </Text>
            <Link href="https://bit.ly/Surf_DApp" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Slide Deck
            </Link>
            <br />
            <Link href="https://smartcontract.surf"
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Website
            </Link>
            </Box>
            <Box ml={isNotSmallerScreen ? 10 : 0}>
            <Link href="https://smartcontract.surf"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='surf.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
        {/* <AccordionItem>
        <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%">
                In progress...
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        </AccordionItem> */}
        </Accordion>
        </ChakraProvider>
    )
}