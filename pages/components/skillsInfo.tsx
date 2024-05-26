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
    Box
  } from '@chakra-ui/react'
import { tagTheme } from '../../styles/tag'

export const theme = extendTheme({
    components: { Tag: tagTheme },
    })

export default function SkillsInfo() {

    return (
        <ChakraProvider theme={theme}>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Proficient in...
        </Text>
        <Box mb={5}>
            <Tag size='ml' colorScheme='yellow'>
            Python
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Javascript
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Typescript  
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            Java
            </Tag>
            <Tag size='ml' colorScheme='yellow'>
            mySQL
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
            Express.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Node.js
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            REST API
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            Tailwind CSS
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            ChakraUI
            </Tag>
            <Tag size='ml' colorScheme='linkedin'>
            MantineUI
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
            <Tag size='ml' colorScheme='pink'>
            Firebase Auth
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            AWS Lambda
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Azure OpenAI Service
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Azure AI Language
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Google Analytics 4
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Numpy
            </Tag>
            <Tag size='ml' colorScheme='pink'>
            Pytorch
            </Tag>
        </Box>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Getting better at...
        </Text>
        <Box mb={5}>
        <Tag size='ml' colorScheme='linkedin'>
            Vite.JS
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            Stripe Pay
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            Azure AI Search
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            AWS EC2
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            Figma
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            Tableu
        </Tag>
        </Box>
        <Text fontSize="5xl" fontWeight="bold" mt={5}>
        Dabbled in...
        </Text>
        <Box mb={5}>
        <Tag size='ml' colorScheme='yellow'>
            Golang
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            Docker
        </Tag>
        <Tag size='ml' colorScheme='pink'>
            AWS SageMaker
        </Tag>
        </Box>
        </ChakraProvider>
    )
}  