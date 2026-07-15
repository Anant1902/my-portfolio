import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/layout";
import { Badge, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Heading() {
    const muted = useColorModeValue("gray.600", "ocean.100");
    const panelBg = useColorModeValue("white", "whiteAlpha.100");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
    const nameColor = useColorModeValue("ocean.700", "white");

    return (
        <Stack w="100%" maxW="1180px" mx="auto" px={{ base: 5, md: 10 }} pt={{ base: 8, md: 10 }} pb={{ base: 12, md: 16 }}>
            <Flex direction={{ md: "row", base: "column" }} width="full" gap={{ base: 8, md: 12 }} align="center">
                <VStack align="flex-start" spacing={5} flex="1">
                    <HStack spacing={3} flexWrap="wrap">
                        <Badge colorScheme="ocean" px={3} py={1} borderRadius="full">NUS Computer Science</Badge>
                        <Badge colorScheme="palm" px={3} py={1} borderRadius="full">Singaporean</Badge>
                        <Badge colorScheme="sun" px={3} py={1} borderRadius="full">Backend + AI Systems</Badge>
                    </HStack>

                    <Box>
                        <Text
                            as="h1"
                            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                            lineHeight="1"
                            fontWeight="800"
                            letterSpacing="0"
                            color={nameColor}
                        >
                            Anant Shanker
                        </Text>
                    </Box>

                    <Text color={muted} fontSize={{ base: "md", md: "lg" }} maxW="740px" lineHeight="1.8">
                        Hey! I am Anant, a recent CS undergraduate from NUS. I am passionate about high-quality code,
                        systems, AI, and all other things tech. I enjoy working on complex problems, creating cool
                        tech, collaborating with people, and positively impacting the teams I work with.
                        <br />
                        My experience
                        spans JPMorgan Chase, GovTech Singapore, International Baccalaureate, and Tradesocio, where I
                        built scalable APIs, AI interfaces, data workflows, and production systems with strong testing
                        habits.
                    </Text>

                    <Text color={muted} fontSize={{ base: "md", md: "lg" }} maxW="740px" lineHeight="1.8">
                        Outside of engineering, you will usually find me playing tennis, jamming, or learning about
                        topics I know little about.
                    </Text>

                    <HStack spacing={3} flexWrap="wrap">
                        <Link href="https://www.linkedin.com/in/anant-shanker/" isExternal>
                            <Button rightIcon={<FaArrowRight/>} colorScheme="ocean">Connect on LinkedIn</Button>
                        </Link>
                        <Link href="https://github.com/Anant1902" isExternal>
                            <Button leftIcon={<FaGithub/>} colorScheme="lagoon" variant="outline">View GitHub</Button>
                        </Link>
                        <Link href="mailto:shankeranant@gmail.com">
                            <Button leftIcon={<FaEnvelope/>} colorScheme="ocean" variant="ghost">shankeranant@gmail.com</Button>
                        </Link>
                    </HStack>
                </VStack>

                <Box position="relative" flexShrink={0}>
                    <Image
                        alignSelf="center"
                        borderRadius="24px"
                        backgroundColor="transparent"
                        boxShadow="2xl"
                        border="1px solid"
                        borderColor={borderColor}
                        src="./anant-shanker-coast-profile.jpg"
                        alt="Anant Shanker"
                        w={{ base: "240px", md: "310px" }}
                        h={{ base: "310px", md: "390px" }}
                        objectFit="cover"
                        objectPosition="52% 65%"
                    />
                </Box>
            </Flex>
        </Stack>
    )
}
