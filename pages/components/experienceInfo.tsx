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
        <Accordion defaultIndex={[0, 1, 2]} allowMultiple width="100%">
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Software Engineering Intern, GovTech Singapore
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                May 2024 - December 2024
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5' width='150%'>
            <Text pb={10}>
            Working with the Video Analytics team at DSAID to create a Digital Asset Management system.
            </Text>
            <br />
            </Box>
            <Box ml={{md: 10, base: 0}}>
            {/* <Image src='ibo_chatbot.png' borderRadius='40px' alt='boundless bazaar landing page' /> */}
            {/* </Link> */}
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Data AI Intern, International Baccalaureate
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                January 2024 - May 2024 (Part Time)
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5' width='150%'>
            <Text pb={10}>
            Created an AI-powered chatbot for internal stakeholders to better access educational resources.
            Worked with enterprise Cloud AI microservices on Microsoft Azure such as OpenAI Studio,
            Conversational Language Understanding, QnA, and Language Orchestration Studio.
            Worked with a Python based backend framework – Quart and React.JS to integrate these
            microservices and develop a domain-specific chatbot.
            </Text>
            <br />
           
            </Box>
            <Box ml={{md: 10, base: 0}}>
            <Image src='ibo_chatbot.png' borderRadius='40px' alt='boundless bazaar landing page' />
            {/* </Link> */}
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Software Engineering Intern, Tradesocio
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                June 2023 - August 2023
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Created website ‘Chat Summarise’ that summarises long articles or other pieces 
            of text and alters it based on user preference. Created telegram, instagram, and 
            facebook company chatbot ‘ChatGilgaBot’ that interacts with, and assists users on 
            financial knowledge and travel information using pre-feeded context and
            prompt engineering of OpenAI API&apos;s ML models. Incorporated MySQL Database Integration
            within the chatbot to keep track of user traffic.
            Technologies used: Next.JS, React.JS, Express.JS, OpenAI API, mysql2/promise
            </Text>
            {/* <Link href="https://chat-summarize-gilga.vercel.app" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Website
            </Link> */}
            <br />
            <Link href="https://github.com/Anant1902/chat-summarize-gilga" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Github Repository - Project Website
            </Link>
            <br />
            <Link href="https://github.com/Anant1902/chat-gilga-tele-bot-main"
                fontWeight="bold" fontSize="2xl" isExternal>
            Github Repository - Project telegram bot
            </Link>
            </Box>
            <Box ml={{md: 10, base: 0}}>
            <Tabs>
            <TabList>
                <Tab>Website</Tab>
                {/* <Tab>Demo Video</Tab> */}
                <Tab>Telegram bot</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>
                {/* <Link href="https://chat-summarize-gilga.vercel.app"
                fontWeight="bold" fontSize="2xl" isExternal> */}
            <Image src='chat_summarize.png' borderRadius='40px' alt='boundless bazaar landing page' />
            {/* </Link> */}
                </p>
                </TabPanel>
                <TabPanel>
                <p>
                <Link
                fontWeight="bold" fontSize="2xl" isExternal>
                <Image src='chatgilgabot.png' borderRadius='20px' width='5000px' alt='boundless bazaar poster' />
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
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Data Analyst Intern, Gilgamesh Consulting
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                Feb 2022 - May 2022
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Consulted CFD Broker ‘Tickpal’ with Risk Management and Analysis. 
            Generated tri-daily analysis reports for TickPal stakeholders, automated data 
            reporting aspect of TickPal&apos;s Data Retrieval Dashboard, cleansed and re-formatted 
            TickPal&apos;s core mySQL database, and integrated TickPal&apos;s mySQL database with data 
            visualisation tool, Tableu, to generate live, easy-to-read, and comprehensive visuals.
            </Text>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Business Analyst, Allianz Consulting
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                March 2020
            </Text>
            <Flex direction={{md: 'row', base: 'column'}}>
            <Box pb='5'>
            <Text pb={10}>
            Consulted the client, Allianz Technologies, with a 3rd Party Risk Management 
            Project where I interacted with senior stakeholders across different countries to 
            gather key information regarding Procurement Contracts in order to classify them accordingly. 
            Gained familiarity and expertise with SIP Ariba, a procurement and supply management tool used by the client.
            </Text>
            </Box>
            </Flex>
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        </ChakraProvider>
    )
}