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
import { accordionTheme } from '../../styles/accordion'
import { extendTheme, ChakraProvider, Link, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const theme = extendTheme({
components: { Accordion: accordionTheme },
})

export default function ProjectInfo() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ChakraProvider theme={theme}>
        <Accordion defaultIndex={[0]} allowMultiple width="100%">
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left' width="100%" mr={10}>
                Summer Internship, Tradesocio
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                June 2023 - August 2023
            </Text>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}>
            <Box pb='5'>
            <Text pb={10}>
            Created website ‘Chat Summarise’ that summarises long articles or other pieces 
            of text and alters it based on user preference. Created telegram, instagram, and 
            facebook company chatbot ‘ChatGilgaBot’ that interacts with, and assists users on 
            financial knowledge and travel information using pre-feeded context and
            prompt engineering of OpenAI API&apos;s ML models.
            </Text>
            <Link href="https://chat-summarize-gilga.vercel.app" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Website
            </Link>
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
            <Box ml={isNotSmallerScreen ? 10 : 0}>
            <Tabs>
            <TabList>
                <Tab>Website</Tab>
                {/* <Tab>Demo Video</Tab> */}
                <Tab>Telegram bot</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>
                <Link href="https://chat-summarize-gilga.vercel.app"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='chat_summarize.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
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
                To be continued...
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text fontStyle="italic" fontWeight="semibold" pb='10px'>
                June 2023 - August 2023
            </Text>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}>
            <Box pb='5'>
            <Text pb={10}>
            Created website ‘Chat Summarise’ that summarises long articles or other pieces 
            of text and alters it based on user preference. Created telegram, instagram, and 
            facebook company chatbot ‘ChatGilgaBot’ that interacts with, and assists users on 
            financial knowledge and travel information using pre-feeded context and
            prompt engineering of OpenAI API&apos;s ML models.
            </Text>
            <Link href="https://chat-summarize-gilga.vercel.app" 
                fontWeight="bold" fontSize="2xl" isExternal>
            Project Website
            </Link>
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
            <Box ml={isNotSmallerScreen ? 10 : 0}>
            <Tabs>
            <TabList>
                <Tab>Website</Tab>
                {/* <Tab>Demo Video</Tab> */}
                <Tab>Telegram bot</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>
                <Link href="https://chat-summarize-gilga.vercel.app"
                fontWeight="bold" fontSize="2xl" isExternal>
            <Image src='chat_summarize.png' borderRadius='40px' alt='boundless bazaar landing page' />
            </Link>
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
        </Accordion>
        </ChakraProvider>
    )
}