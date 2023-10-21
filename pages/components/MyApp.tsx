import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa'
import Head from './heading'
import Profile from './profile'

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
                <IconButton isRound={true} aria-label="1" icon={isDark ? <FaMoon/> : <FaSun/>} 
                onClick={toggleColorMode}></IconButton>
                </Flex>
                <Head />
                {/* <Social /> */}
                <Profile />
            </VStack>
        </div>
    )
}