import {
    Badge,
    Box,
    Button,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: "NUS Health Informatics Research Lab",
        role: "Software Engineer, Part Time",
        date: "Feb 2026 - Jun 2026",
        description: "Engineering for EMPOWER, a SingHealth, Duke-NUS, and Abbott chronic disease self-management app supporting population health research.",
        highlights: [
            "Spearheaded and engineered Social Prescribing, a community health integration to be used by 10,000+ SG citizens.",
            "Built Python, FastAPI, Postgres, SQLAlchemy, and Docker based services.",
            "Reduced API latency by 40% by internalizing external API dependencies and batch syncing with APScheduler cron jobs.",
            "Created Python scripts to improve data quality by integrating LLM layers within data pipelines."
        ],
        tags: ["FastAPI", "Postgres", "SQLAlchemy", "Docker", "Sentry", "Gemini", "Flutter", "iOS Development", "Android Development"],
        links: [
            { label: "EMPOWER Study", href: "https://www.singhealth.com.sg/about-singhealth/who-we-are/community-population-health/population-health-research/empower", icon: FaExternalLinkAlt },
            { label: "EMPOWER App", href: "https://www.singhealth.com.sg/about-singhealth/who-we-are/community-population-health/population-health-research/empower/empower-app", icon: FaExternalLinkAlt }
        ]
    },
    {
        title: "Surf",
        role: "Co-founder / Head of Engineering",
        date: "Dec 2022 - May 2024",
        description: "AI-powered smart contract auditor for blockchain developers.",
        highlights: [
            "Architected a Next.js, AWS Lambda, Firebase, and GPT-3.5 system that reduced debugging time by 70% for 50+ developers.",
            "Won 1st Prize at Solana Builders League and Fintech Grizzlython, plus $10,000 from NUS.",
            "Attracted $100,000+ in VC funding and 3 SME clients."
        ],
        tags: ["Next.js", "AWS Lambda", "Firebase", "GPT-3.5", "Web3"],
        links: [
            { label: "Website", href: "https://smartcontract.surf", icon: FaExternalLinkAlt },
            { label: "Deck", href: "https://bit.ly/Surf_DApp", icon: FaExternalLinkAlt }
        ]
    },
    {
        title: "Boundless Bazaar",
        role: "Marketplace project",
        date: "Jun 2023 - 2024",
        description: "Marketplace connecting buyers with travelers who can purchase and deliver products that do not ship to the buyer's location.",
        highlights: [
            "Implemented buyer-traveler marketplace flows with Next.js 13, Tailwind CSS, Node.js, Prisma, Stripe, and NextAuth.",
            "Designed the product around trust, payments, and order coordination for cross-border purchasing."
        ],
        tags: ["Next.js", "Tailwind", "Node.js", "Prisma", "Stripe", "NextAuth"],
        links: [
            { label: "Website", href: "https://boundless-bazaar.vercel.app/", icon: FaExternalLinkAlt },
            { label: "README", href: "https://docs.google.com/document/d/1wqOvf7xZXOROcQBBKikaxZ4znDYnS4p2", icon: FaExternalLinkAlt }
        ]
    },
    {
        title: "Stock Sentiment Analysis",
        role: "Personal project",
        date: "Apr 2020 - May 2020",
        description: "Compared stock prices with social media sentiment to explore correlations between market movement and public discussion.",
        highlights: [
            "Used Python libraries including pandas, matplotlib, tweepy, and vaderSentiment.",
            "Integrated online APIs and MySQL-backed data workflows."
        ],
        tags: ["Python", "pandas", "MySQL", "APIs"],
        links: [
            { label: "GitHub", href: "https://github.com/Anant1902/stock-sentiment-analysis", icon: FaGithub }
        ]
    }
];

export default function ProjectInfo() {
    const cardBg = useColorModeValue("rgba(255, 255, 255, 0.78)", "whiteAlpha.100");
    const borderColor = useColorModeValue("ocean.100", "whiteAlpha.200");
    const muted = useColorModeValue("gray.700", "ocean.100");

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
            {projects.map((project) => (
                <Box
                    key={project.title}
                    p={{ base: 5, md: 6 }}
                    bg={cardBg}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="8px"
                    minH="100%"
                >
                    <Stack spacing={4} h="100%">
                        <Box>
                            <HStack justify="space-between" align="flex-start" gap={4}>
                                <Box>
                                    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="800">{project.title}</Text>
                                    <Text color={muted} mt={1}>{project.role}</Text>
                                </Box>
                                <Badge colorScheme="palm" px={3} py={1} borderRadius="full" flexShrink={0}>
                                    {project.date}
                                </Badge>
                            </HStack>
                            <Text mt={4}>{project.description}</Text>
                        </Box>

                        <Stack spacing={3}>
                            {project.highlights.map((highlight) => (
                                <Text key={highlight} color={muted} fontSize="sm" lineHeight="1.7">
                                    {highlight}
                                </Text>
                            ))}
                        </Stack>

                        <Wrap>
                            {project.tags.map((tag) => (
                                <WrapItem key={tag}>
                                    <Badge colorScheme="lagoon" px={3} py={1} borderRadius="full">{tag}</Badge>
                                </WrapItem>
                            ))}
                        </Wrap>

                        {project.links && (
                            <HStack spacing={3} pt={2} flexWrap="wrap">
                                {project.links.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link key={link.href} href={link.href} isExternal>
                                            <Button size="sm" colorScheme="ocean" variant="outline" leftIcon={<Icon/>}>{link.label}</Button>
                                        </Link>
                                    )
                                })}
                            </HStack>
                        )}
                    </Stack>
                </Box>
            ))}
        </SimpleGrid>
    )
}
