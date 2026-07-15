import React, { RefObject, useState } from 'react'
import { Box, Button, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { FaBriefcase, FaCodeBranch, FaGraduationCap, FaLayerGroup } from 'react-icons/fa'
import ProjectInfo from './projectInfo'
import ExperienceInfo from './experienceInfo'
import SkillsInfo from './skillsInfo'
import EducationInfo from './educationInfo'

const tabs = [
    { id: 'experiences', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCodeBranch },
    { id: 'skills', label: 'Skills', icon: FaLayerGroup },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
]

type ProfileProps = {
    topOffset?: number;
    previewRef?: RefObject<HTMLDivElement>;
}

export default function Profile({ topOffset = 0, previewRef }: ProfileProps) {
    const [activeTab, setActiveTab] = useState('experiences');
    const tabBg = useColorModeValue("rgba(255, 255, 255, 0.78)", "whiteAlpha.100");
    const borderColor = useColorModeValue("ocean.100", "whiteAlpha.200");

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return <ProjectInfo />
            case 'experiences':
                return <ExperienceInfo />
            case 'skills':
                return <SkillsInfo />
            case 'education':
                return <EducationInfo />
            default:
                return <ExperienceInfo />;
        }
    }

    return (
        <Flex
            w="100%"
            maxW="1180px"
            mx="auto"
            px={{ base: 5, md: 10 }}
            pb={{ base: 16, md: 24 }}
            style={{ marginTop: topOffset }}
        >
            <Box w="100%">
                <Box ref={previewRef} mb={8}>
                    <Box mb={8}>
                        <Text fontWeight="800" fontSize={{ base: "3xl", md: "4xl" }}>More about me!</Text>
                    </Box>

                    <HStack
                        spacing={2}
                        overflowX="auto"
                        bg={tabBg}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="8px"
                        p={2}
                    >
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const selected = activeTab === tab.id;

                            return (
                                <Button
                                    key={tab.id}
                                    leftIcon={<Icon/>}
                                    onClick={() => setActiveTab(tab.id)}
                                    colorScheme={selected ? "ocean" : "gray"}
                                    variant={selected ? "solid" : "ghost"}
                                    minW="fit-content"
                                >
                                    {tab.label}
                                </Button>
                            )
                        })}
                    </HStack>
                </Box>

                {renderContent()}
            </Box>
        </Flex>
    )
}
