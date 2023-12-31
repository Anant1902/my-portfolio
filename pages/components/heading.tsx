import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode"
import { Box, Flex, Stack, Text} from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";

export default function Heading() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"

    return ( 
        <Stack>
            <Flex direction={{md: "row", base: "column"}} width="full"
                p={{md: "32", base: "0"}}
                alignSelf="flex-start">
                <Box mt={{md: "0", base: '16'}} alignContent='flex-start' width={{md: '60%', base: '100%'}}>
                    <Text fontSize="7xl" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Anant Shanker</Text>
                    {/* <Text color={isDark ? "gray.200" : "gray.500"}>Year 2 Computer Science student at NUS</Text> */}
                    <Text fontSize="2xl">
                        <Text as="span" fontWeight="semibold">
                        Hi! I am Anant, a Year 2 student studying Computer Science at the 
                        National University of Singapore.</Text> As an avid technology enthusiast,
                        I aim to harness my passion for technopreneurship to transform businesses and
                        create lasting, positive impact in the societies I work with.
                        Inquisitive and diligent, I&apos;m someone who likes to dream big. In my free time,
                        I enjoy singing, playing the guitar, and expanding my knowledge on topics 
                        I&apos;m less familiar with!
                    </Text>

                    <Link href="https://www.linkedin.com/in/anant-shanker" isExternal>
                        <Button mt={8} colorScheme="blue">Let&apos;s connect.</Button>
                    </Link>
                    <Link href="https://drive.google.com/file/d/139bcwkTROPc2jW1BapNwRetc6uuwuGTE/view?usp=sharing" isExternal>
                        <Button mt={8} ml={5} colorScheme="gray">My Resume.</Button>
                    </Link>
                </Box>
                <Image alignSelf="center" mt={{md: "0", base: "12"}} ml={{md: "20", base: "0"}}  borderRadius='full'
                        backgroundColor="transparent" boxShadow='lg' src='./pp.JPG' alt="icon" boxSize="300px" />
            </Flex>
        </Stack>
    )
}