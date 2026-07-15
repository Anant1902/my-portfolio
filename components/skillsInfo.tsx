import {
    Badge,
    Box,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react'

const skillGroups = [
    {
        title: "Languages",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "JSON"]
    },
    {
        title: "Backend and APIs",
        skills: ["FastAPI", "Node.js", "NestJS", "Express.js", "Spring Boot", "REST APIs", "Microservices"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "Vite.js", "Redux", "HTML/CSS3", "Tailwind CSS", "Chakra UI"]
    },
    {
        title: "Data and Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy", "TypeORM", "Prisma", "Tableau"]
    },
    {
        title: "Cloud and DevOps",
        skills: ["AWS Lambda", "AWS ECS", "AWS S3", "CloudWatch", "Azure", "Docker", "CI/CD", "Linux"]
    },
    {
        title: "Engineering Practices",
        skills: ["Test Driven Development", "Jest", "Vitest", "OOP", "Agile", "SDLC", "Git"]
    }
];

export default function SkillsInfo() {
    const cardBg = useColorModeValue("white", "whiteAlpha.100");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
    const muted = useColorModeValue("gray.600", "ocean.100");

    return (
        <Stack spacing={6}>
            <Box>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800">
                    Technical toolkit
                </Text>
                <Text color={muted} mt={2}>
                    Built from production internships, research engineering, and founder-led product work.
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                {skillGroups.map((group) => (
                    <Box
                        key={group.title}
                        p={5}
                        bg={cardBg}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="8px"
                    >
                        <Text fontWeight="800" mb={4}>{group.title}</Text>
                        <Wrap>
                            {group.skills.map((skill) => (
                                <WrapItem key={skill}>
                                    <Badge colorScheme="ocean" px={3} py={1} borderRadius="full">
                                        {skill}
                                    </Badge>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                ))}
            </SimpleGrid>
        </Stack>
    )
}
