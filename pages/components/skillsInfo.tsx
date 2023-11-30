import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
    HStack,
    extendTheme,
    ChakraProvider,
    Text,
    Flex,
    useMediaQuery
  } from '@chakra-ui/react'
import { tagTheme } from '../../styles/tag'

export const theme = extendTheme({
    components: { Tag: tagTheme },
    })

export default function SkillsInfo() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ChakraProvider theme={theme}>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Proficient in...
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mb={5} wrap="wrap">
            <Tag size='ml' colorScheme='yellow'>
            Python
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Javascript
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Java
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Source
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            C
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Next.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            React.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Tailwind CSS
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Express.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Node.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            REST API
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            OpenAI API
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Prisma ORM
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Git
            </Tag>
        </Flex>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Getting better at...
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mb={5} wrap="wrap">
        <Tag size='ml' colorScheme='yellow'>
            mySQL
        </Tag>
        <Tag size='ml' colorScheme='linkedin'>
            Chakra UI
            </Tag>
        <Tag size='ml' colorScheme='pink'>
            Stripe Pay
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            AWS EC2
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            AWS Lambda
        </Tag>
        </Flex>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Dabbled in...
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mb={5} wrap="wrap">
        <Tag size='ml' colorScheme='pink'>
            Firebase Auth
        </Tag>
        </Flex>

        </ChakraProvider>
    )
}  