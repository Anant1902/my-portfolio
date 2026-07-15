import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Spacer,
    Tooltip,
    useColorMode,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import { FaFileAlt, FaGithub, FaLinkedin, FaMoon, FaSun, FaEnvelope } from 'react-icons/fa'
import Head from './heading'
import Profile from './profile'

export default function MyApp() {
    const {colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const pageBg = useColorModeValue(
        "linear(to-b, white, ocean.50, ocean.100)",
        "linear(to-b, ocean.700, ocean.800, gray.900)"
    );
    const pageBaseBg = useColorModeValue("ocean.100", "gray.900");

    return(
        <Box
            minH="100vh"
            bg={pageBaseBg}
            bgGradient={pageBg}
            bgSize="100% 100vh"
            bgRepeat="no-repeat"
        >
            <VStack spacing={0} align="stretch">
                <Flex
                    as="nav"
                    w="100%"
                    maxW="1180px"
                    mx="auto"
                    px={{ base: 5, md: 10 }}
                    pt={{ base: 4, md: 6 }}
                    pb={0}
                >
                    <Spacer />
                    <HStack spacing={2} overflowX="auto" maxW="100%" py={1}>
                        <Tooltip label="LinkedIn">
                            <Link href="https://www.linkedin.com/in/anant-shanker/" isExternal>
                                <IconButton variant="ghost" aria-label="LinkedIn" icon={<FaLinkedin/>} />
                            </Link>
                        </Tooltip>
                        <Tooltip label="GitHub">
                            <Link href="https://github.com/Anant1902" isExternal>
                                <IconButton variant="ghost" aria-label="GitHub" icon={<FaGithub/>} />
                            </Link>
                        </Tooltip>
                        <Tooltip label="Email">
                            <Link href="mailto:shankeranant@gmail.com">
                                <IconButton variant="ghost" aria-label="Email" icon={<FaEnvelope/>} />
                            </Link>
                        </Tooltip>
                        <Link href="https://drive.google.com/file/d/1BI9J4YW3R726g13bf-YbMZ6pT6Ftflwr/view?usp=sharing" isExternal>
                            <IconButton variant="ghost" aria-label="Resume" icon={<FaFileAlt/>} />
                        </Link>
                        <IconButton
                            variant="ghost"
                            aria-label="Toggle color mode"
                            icon={isDark ? <FaMoon/> : <FaSun/>}
                            onClick={toggleColorMode}
                        />
                    </HStack>
                </Flex>
                <Head />
                <Profile />
            </VStack>
        </Box>
    )
}
