import {
    Badge,
    Box,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react'

const experiences = [
    {
        role: "Software Engineering Intern",
        company: "JPMorgan Chase",
        location: "Singapore",
        date: "Jun 2025 - Aug 2025",
        summary: "Built AI-powered liquidity tooling for merchant clients including Amazon, Netflix, and Walmart.",
        impact: [
            "Developed a React, FastAPI, and Python chatbot giving roughly 5,000 operations users real-time liquidity insights.",
            "Reduced data retrieval time by 80% by moving frequent liquidity questions into instant conversational workflows.",
            "Designed and scaled an MCP server for service integrations, cutting integration time by 70% and backend changes by 30%."
        ],
        tags: ["React", "FastAPI", "Python", "MCP", "AI tooling"]
    },
    {
        role: "Software Engineering Intern",
        company: "GovTech Singapore",
        location: "Singapore",
        date: "May 2024 - Dec 2024",
        summary: "Engineered digital asset management systems used across 20+ government agencies.",
        impact: [
            "Optimized folder operation latency by 70% across more than 3M folder hierarchies with materialized views and concurrency control.",
            "Enabled multi-tagging and reverse metadata search across more than 5M digital assets, helping attract 5 government agencies.",
            "Applied test-driven development to sustain 90%+ line coverage across production services."
        ],
        tags: ["Vite", "NestJS", "PostgreSQL", "AWS", "Docker", "TDD"]
    },
    {
        role: "AI Engineering Intern",
        company: "International Baccalaureate",
        location: "Singapore",
        date: "Jan 2024 - May 2024",
        summary: "Built an internal AI chatbot to help 100,000+ teachers retrieve educational content from documents.",
        impact: [
            "Integrated React, Quart, and Azure AI Studio to support document-grounded content retrieval.",
            "Improved chatbot intent recognition accuracy by 40% with Azure CLU across 6 intents.",
            "Improved answer accuracy by nearly 50% through static dropdown flows and prompt engineering."
        ],
        tags: ["React", "Quart", "Azure AI", "LLMs", "Python"]
    },
    {
        role: "Software Engineering Intern",
        company: "Tradesocio",
        location: "Singapore",
        date: "Jun 2023 - Aug 2023",
        summary: "Created AI workflows for financial content analysis and client-facing chat experiences.",
        impact: [
            "Developed Telegram and Meta financial chatbots using Express.js and GPT-4, contributing to 2 client wins.",
            "Integrated MySQL analytics to improve chatbot personalization by 40%.",
            "Built a Next.js financial news analyzer that reduced executive research time by 60%."
        ],
        tags: ["Next.js", "Express", "GPT-4", "MySQL", "Analytics"]
    },
    {
        role: "Data Analyst Intern",
        company: "Gilgamesh",
        location: "Singapore",
        date: "Feb 2022 - May 2022",
        summary: "Automated reporting and improved data quality for financial analysis workflows.",
        impact: [
            "Reduced daily financial report generation time by 95% through automated aggregate metrics.",
            "Restructured and cleaned a MySQL database to increase retrieval efficiency two fold.",
            "Built automated live reports and Tableau visuals from MySQL integrations."
        ],
        tags: ["MySQL", "Tableau", "Automation", "Data quality"]
    }
];

export default function ExperienceInfo() {
    const cardBg = useColorModeValue("rgba(255, 255, 255, 0.78)", "whiteAlpha.100");
    const borderColor = useColorModeValue("ocean.100", "whiteAlpha.200");
    const muted = useColorModeValue("gray.700", "ocean.100");

    return (
        <Stack spacing={5}>
            {experiences.map((experience) => (
                <Box
                    key={`${experience.company}-${experience.role}`}
                    p={{ base: 5, md: 6 }}
                    bg={cardBg}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="8px"
                >
                    <Stack spacing={4}>
                        <HStack justify="space-between" align="flex-start" gap={4} flexWrap="wrap">
                            <Box>
                                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="800">
                                    {experience.role}
                                </Text>
                                <Text color={muted} mt={1}>
                                    {experience.company} - {experience.location}
                                </Text>
                            </Box>
                            <Badge colorScheme="ocean" px={3} py={1} borderRadius="full">
                                {experience.date}
                            </Badge>
                        </HStack>

                        <Text fontSize={{ base: "md", md: "lg" }}>{experience.summary}</Text>

                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
                            {experience.impact.map((item) => (
                                <Box
                                    key={item}
                                    p={4}
                                    border="1px solid"
                                    borderColor={borderColor}
                                    borderRadius="8px"
                                >
                                    <Text color={muted} fontSize="sm" lineHeight="1.7">{item}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>

                        <Wrap>
                            {experience.tags.map((tag) => (
                                <WrapItem key={tag}>
                                    <Badge colorScheme="lagoon" px={3} py={1} borderRadius="full">{tag}</Badge>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Stack>
                </Box>
            ))}

            <Text color={muted} fontSize="sm">
                For the latest role details, visit my <Link href="https://www.linkedin.com/in/anant-shanker/" isExternal color="ocean.500">LinkedIn profile</Link>.
            </Text>
        </Stack>
    )
}
