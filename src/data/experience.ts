export interface Experience {
    id: number
    role: string
    company: string
    period: string
    description: string
    highlights: string[]
    technologies: string[]
}

export const experience: Experience[] = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "Tech Corp",
        period: "2024 - Present",
        description: "Leading a team of 5 engineers to build scalable web applications.",
        highlights: ["Reduced load time by 40%", "Implemented CI/CD pipelines"],
        technologies: ["React", "Node.js", "AWS"],
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "StartUp Inc",
        period: "2022 - 2024",
        description: "Developed and maintained multiple client-facing applications.",
        highlights: ["Launch 3 major features", "Mentored junior developers"],
        technologies: ["Vue.js", "Firebase", "Google Cloud"],
    },
    {
        id: 3,
        role: "Junior Developer",
        company: "Web Solutions",
        period: "2020 - 2022",
        description: "Collaborated with designers to implement UI/UX designs.",
        highlights: ["Built responsive landing pages", "Optimized SEO"],
        technologies: ["HTML", "CSS", "JavaScript"],
    },
]
