import {
    Badge,
    Box,
    Button,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const courses = [
    { code: "CS2040S", name: "Data Structures and Algorithms" },
    { code: "CS2106", name: "Operating Systems" },
    { code: "CS2105", name: "Computer Networks" },
    { code: "CS2102", name: "Database Systems" },
    { code: "CS2103T", name: "Software Engineering" },
    { code: "CS4248", name: "Natural Language Processing" },
    { code: "CS4225", name: "Big Data Systems for Data Science" },
    { code: "CS5224", name: "Cloud Computing" },
    { code: "CS2109S", name: "Introduction to AI and Machine Learning" },
    { code: "ST2334", name: "Statistics and Probability" },
    { code: "MA2001", name: "Linear Algebra" },
    { code: "MA1521", name: "Calculus for Computing" },
    { code: "CS2030S", name: "Programming Methodologies 2" },
];

const taStats = [
    { value: "4.7/5", label: "Overall teacher effectiveness", note: "vs. 4.3 CS average" },
    { value: "4.8/5", label: "Core teaching score", note: "thinking, feedback, interest" },
    { value: "4.9/5", label: "Learning interaction score", note: "vs. 4.2 CS average" },
    { value: "100%", label: "Positive feedback", note: "across reported metrics" },
];

const studentQuotes = [
    "Very friendly, approachable and helped us to understand the concepts in a simple, comprehensive manner.",
    "Anant was a tutor who ensured that tutorial classes were not boring and made them something to look forward to. On top of teaching the content of the module, he is also a very approachable senior who is willing to help whenever one needs help.",
    "His composed demeanour, helpful personality, and strong knowledge of the course content all make him worthy of being nominated for this award.",
];

export default function EducationInfo() {
    const cardBg = useColorModeValue("white", "whiteAlpha.100");
    const quoteBg = useColorModeValue("gray.50", "blackAlpha.300");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
    const muted = useColorModeValue("gray.600", "ocean.100");

    return (
        <Stack spacing={6}>
            <Box>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800">
                    Education
                </Text>
                <Text color={muted} mt={2}>
                    NUS Computer Science foundation with an Artificial Intelligence focus area and systems-heavy coursework.
                </Text>
            </Box>

            <Box p={{ base: 5, md: 6 }} bg={cardBg} border="1px solid" borderColor={borderColor} borderRadius="8px">
                <HStack spacing={3} flexWrap="wrap">
                    <Badge colorScheme="ocean" px={3} py={1} borderRadius="full">National University of Singapore</Badge>
                    <Badge colorScheme="palm" px={3} py={1} borderRadius="full">GPA 4.50/5.00</Badge>
                    <Badge colorScheme="lagoon" px={3} py={1} borderRadius="full">Focus Area: Artificial Intelligence</Badge>
                    <Badge colorScheme="sun" px={3} py={1} borderRadius="full">Aug 2022 - May 2026</Badge>
                </HStack>
                <Text fontSize="xl" fontWeight="800" mt={4}>
                    Bachelor of Computing in Computer Science
                </Text>
                <Text color={muted} mt={3}>
                    Teaching Assistant for CS2103T Software Engineering in AY 25/26. Top 10% of cohort for
                    CS2103T in AY 23/24. Student Exchange Programme at the University of Texas at Austin from
                    Jan 2025 to May 2025, studying algorithm design and machine learning.
                </Text>
            </Box>

            <Box p={{ base: 5, md: 6 }} bg={cardBg} border="1px solid" borderColor={borderColor} borderRadius="8px">
                <HStack spacing={3} flexWrap="wrap">
                    <Badge colorScheme="ocean" px={3} py={1} borderRadius="full">Teaching Assistant</Badge>
                    <Badge colorScheme="lagoon" px={3} py={1} borderRadius="full">CS2103T Software Engineering</Badge>
                    <Badge colorScheme="palm" px={3} py={1} borderRadius="full">3 teaching award nominations</Badge>
                    <Badge colorScheme="sun" px={3} py={1} borderRadius="full">AY 2025/2026 Sem 1</Badge>
                </HStack>
                <Text fontSize="xl" fontWeight="800" mt={4}>
                    Teaching Assistant - CS2103T Software Engineering
                </Text>
                <Text color={muted} mt={3}>
                    Led a software engineering tutorial for NUS CS students and received student evaluation scores
                    above the Computer Science and School of Computing averages.
                </Text>

                <Link href="/anant-shanker-cs2103t-ta-report.pdf" isExternal>
                    <Button mt={4} size="sm" colorScheme="ocean" variant="outline" leftIcon={<FaExternalLinkAlt/>}>
                        View full TA report
                    </Button>
                </Link>

                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3} mt={5}>
                    {taStats.map((stat) => (
                        <Box
                            key={stat.label}
                            p={4}
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="8px"
                        >
                            <Text fontSize="2xl" fontWeight="800">{stat.value}</Text>
                            <Text mt={1} fontWeight="700" fontSize="sm">{stat.label}</Text>
                            <Text mt={1} color={muted} fontSize="xs">{stat.note}</Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt={5}>
                    {studentQuotes.map((quote) => (
                        <Box
                            key={quote}
                            p={4}
                            bg={quoteBg}
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="8px"
                        >
                            <Text color={muted} fontSize="sm" lineHeight="1.7">
                                &quot;{quote}&quot;
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            <Box p={{ base: 5, md: 6 }} bg={cardBg} border="1px solid" borderColor={borderColor} borderRadius="8px">
                <HStack spacing={3} flexWrap="wrap">
                    <Badge colorScheme="lagoon" px={3} py={1} borderRadius="full">Award</Badge>
                    <Badge colorScheme="sun" px={3} py={1} borderRadius="full">Issued Jan 2025</Badge>
                </HStack>
                <Text fontSize="xl" fontWeight="800" mt={4}>
                    Top Students Award - Digital Platforms for Business (IS2218)
                </Text>
                <Text color={muted} mt={3}>
                    Awarded by the National University of Singapore for strong performance in Digital Platforms for Business.
                </Text>
                <Link href="https://credentials.nus.edu.sg/bcb87ec7-0652-4eef-b445-2b55a9653853#acc.Wg8mvJIq" isExternal>
                    <Button mt={4} size="sm" colorScheme="ocean" variant="outline" leftIcon={<FaExternalLinkAlt/>}>
                        View credential
                    </Button>
                </Link>
            </Box>

            <Box>
                <Text fontSize="xl" fontWeight="800">Relevant coursework</Text>
                <Text color={muted} mt={2}>
                    Courses most relevant to software engineering, AI, backend systems, and data-intensive infrastructure.
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {courses.map((course, index) => (
                    <Box
                        key={`${course.code}-${index}`}
                        p={5}
                        bg={cardBg}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="8px"
                    >
                        <HStack justify="space-between" align="flex-start" gap={4}>
                            <Box>
                                <Text fontWeight="800">{course.code}</Text>
                                <Text color={muted} mt={1}>{course.name}</Text>
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Stack>
    )
}
