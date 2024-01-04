import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Image
  } from '@chakra-ui/react'
import { accordionTheme } from '../../styles/accordion'
import { extendTheme, ChakraProvider, Link, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const theme = extendTheme({
components: { Accordion: accordionTheme },
})

export default function ProjectInfo() {

    return (
        <ChakraProvider theme={theme}>
        <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple width="100%">

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
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Created an AI-powered in-browser IDE and Code Auditor for aspiring and existing web3 developers
            to supercharge their smart contract development workflow. Surf saves its intended users 
            time from prompt engineering and streamlining their workflow from debugging to deployment. 
            Learnt and familiarised with Next.JS 13, Frontend React.js library Chakra UI, AWS Lambda, AWS API
            Gateway, Firebase Auth, OpenAI API, Google Analytics 4.

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
            <Box ml={{md: 10, base: 0}}>
            <Link href="https://smartcontract.surf"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='surf_new.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>

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
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Created a web platform that uses a  marketplace to connect buyers 
            aspiring to purchase products that do not ship to their location 
            to travellers – a mutually beneficial ecosystem that empowers travelers 
            to monetize their trips by assisting buyers in purchasing and delivering 
            their desired items, while also enabling buyers to access unique products from 
            around the world. Learnt and familiarised with Next.js 13, Tailwind CSS, Node.js, 
            Primsa ORM, Stripe Pay, Next Auth.
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
            <Box ml={{md: 10, base: 0}}>
            <Tabs>
            <TabList>
                <Tab>Website</Tab>
                {/* <Tab>Demo Video</Tab> */}
                <Tab>Poster</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>
                <Link href="https://boundless-bazaar.vercel.app/"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='bb.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
                </p>
                </TabPanel>
                {/* <TabPanel>
                <p>
                <video width="3000" height="500" controls>
                    <source src='bb_demo.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </p>
                </TabPanel> */}
                <TabPanel>
                <p>
                <Link
                fontWeight="bold" fontSize="2xl" isExternal>
                <Image src='bb_poster.jpg' borderRadius='40px' alt='boundless bazaar poster' />
                </Link>
                </p>
                </TabPanel>
            </TabPanels>
            </Tabs>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' mr={10}>
                Stock Sentiment Analysis
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
            April 2020 - May 2020
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Coded a Stock Sentiment Analysis Program that compared stock prices with 
            social media sentiments to find existing correlation between the two. Learnt 
            and familiarised with python libraries (such as pandas, matplotlib, tweepy, and 
            vaderSentiment), mySQL, and the intergration of online APIs in code
            </Text>
            <Link href="https://github.com/Anant1902/stock-sentiment-analysis" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Github Repository
            </Link>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Flappy Bird Bot
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                June 2021
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Coded artificially intelligent birds to learn and master the game ‘Flappy Bird’.
            Designed the game environment and used a Feed Forward Neural Network that tweaked 
            its weights after each run of the code to improve the performance of the bird genomes.
             Learnt and familiarised with Object Oriented Programming, python libraries (such as 
            pygame and neat), and the working of neural networks.
            </Text>
            <Link href="https://github.com/Anant1902/flappy-bird-bot" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Github Repository
            </Link>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
    
        </Accordion>
        </ChakraProvider>
    )
}