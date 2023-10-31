import React, { useState } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import ProjectInfo from '../components/projectInfo'

export default function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [activeTab, setActiveTab] = useState('projects');  // default to 'projects'

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return <ProjectInfo />
            case 'experiences':
                return <div>Experiences Content</div>;
            case 'skills':
                return <div>Skills Content</div>;
            default:
                return <div>Default Content</div>;
        }
    }

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
            {/* <Box alignSelf="center" px="32">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box> */}
            <Box px={isNotSmallerScreen ? "32" :"0"}>
            <Box alignSelf="center" py="16">
                <Text fontWeight="bold" fontSize="2xl">More about me.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex onClick={() => setActiveTab('projects')} rounded="xl" direction="column" mt={4}
                    bg={activeTab == 'projects' ? "blue.400" : "gray.100"} h="30vh" w="30vh" _hover={{ bg: "blue.400", }} justify="flex-end">
                        <Text color={activeTab == 'projects' ? "white" : "black"} p="4" fontSize="xl" fontWeight="semibold">
                            Projects
                        </Text>
                    </Flex>
                    <Flex onClick={() => setActiveTab('experiences')} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={activeTab == 'experiences' ? "teal.400" : "gray.100"} h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color={activeTab == 'experiences' ? "white" : "black"} p="4" fontSize="xl" fontWeight="semibold">
                            Experiences
                        </Text>
                    </Flex>
                    <Flex onClick={() => setActiveTab('skills')} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={activeTab == 'skills' ? "green.400" : "gray.100"} h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}>
                        <Text color={activeTab == 'skills' ? "white" : "black"} p="4" fontSize="xl" fontWeight="semibold">
                            Skills
                        </Text>
                    </Flex>
                </Flex>
            </Box>
                <Box mt={4}>
                    {renderContent()}
                </Box>
            </Box>
        </Flex>
    )
}