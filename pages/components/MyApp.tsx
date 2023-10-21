import { Flex, Heading, IconButton, Link, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp, FaGoogle, FaMailBulk} from 'react-icons/fa'
import Head from './heading'
import Profile from './profile'
import Social from './socials'

export default function MyApp() {
    const {colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return(
        <div>
            <VStack p={10}>
                <Flex w='100%'>
                    <Heading size="md" fontWeight="semibold" color="cyan.400">
                        @ananananant
                    </Heading>
                <Spacer></Spacer>

                <Link href="https://www.linkedin.com/in/anant-shanker-a960651a0/" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaLinkedin/>} mr='5' />
                </Link>
                <Link href="https://github.com/Anant1902" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaGithub/>} mr='5' />
                </Link>
                <Link href="https://t.me/ananananant" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaTelegram/>} mr='5' />
                </Link>
                {/* <Link href="https://www.linkedin.com/in/anant-shanker-a960651a0/" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaWhatsapp/>} mr='5' />
                </Link> */}
                <Link href="https://www.instagram.com/_.anxnt._/" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaInstagram/>} mr='5' />
                </Link>
                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=shankeranant@gmail.com&tf=cm" isExternal>
                <IconButton isRound={true} aria-label="1" icon={<FaGoogle/>} mr='20' />
                </Link>
                <IconButton isRound={true} aria-label="1" icon={isDark ? <FaMoon/> : <FaSun/>} 
                onClick={toggleColorMode}></IconButton>
                </Flex>
                <Head />
                <Profile />
            </VStack>
        </div>
    )
}