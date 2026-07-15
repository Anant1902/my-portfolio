import {
    Box,
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
import { useEffect, useRef, useState } from "react";
import { FaFileAlt, FaGithub, FaLinkedin, FaMoon, FaSun, FaEnvelope } from 'react-icons/fa'
import Head from './heading'
import Profile from './profile'

export default function MyApp() {
    const {colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const pageBg = useColorModeValue("ocean.100", "gray.900");
    const pageGradient = useColorModeValue(
        "linear(to-b, white 0%, ocean.50 42%, ocean.100 100vh)",
        "linear(to-b, ocean.700 0%, ocean.800 48%, gray.900 100vh)"
    );
    const navRef = useRef<HTMLDivElement | null>(null);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const profilePreviewRef = useRef<HTMLDivElement | null>(null);
    const [profileOffset, setProfileOffset] = useState(0);

    useEffect(() => {
        const previewBuffer = 32;

        const updateProfileOffset = () => {
            const viewportHeight = window.innerHeight;
            const navHeight = navRef.current?.offsetHeight ?? 0;
            const heroHeight = heroRef.current?.offsetHeight ?? 0;
            const previewHeight = profilePreviewRef.current?.offsetHeight ?? 0;
            const landingHeight = navHeight + heroHeight;
            const remainingFirstViewport = viewportHeight - landingHeight;

            if (remainingFirstViewport >= previewHeight + previewBuffer || landingHeight >= viewportHeight) {
                setProfileOffset(0);
                return;
            }

            setProfileOffset(Math.max(0, remainingFirstViewport));
        };

        updateProfileOffset();
        window.addEventListener("resize", updateProfileOffset);

        const observer = new ResizeObserver(updateProfileOffset);
        if (navRef.current) observer.observe(navRef.current);
        if (heroRef.current) observer.observe(heroRef.current);
        if (profilePreviewRef.current) observer.observe(profilePreviewRef.current);

        return () => {
            window.removeEventListener("resize", updateProfileOffset);
            observer.disconnect();
        };
    }, []);

    return(
        <Box minH="100vh" bg={pageBg} bgGradient={pageGradient} bgSize="100% 100vh" bgRepeat="no-repeat">
            <VStack spacing={0} align="stretch">
                <Flex
                    ref={navRef}
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
                <Box ref={heroRef}>
                    <Head />
                </Box>
                <Profile topOffset={profileOffset} previewRef={profilePreviewRef} />
            </VStack>
        </Box>
    )
}
