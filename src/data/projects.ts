export interface Project {
    slug: string
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    gridSize: "1x1" | "2x1" | "1x2" | "2x2"
    featured: boolean
}

export const projects: Project[] = [
    {
        slug: "ai-saas-platform",
        title: "AI SaaS Platform",
        description: "An all-in-one AI platform for varying content generation needs.",
        image: "/images/projects/project-placeholder.svg",
        technologies: ["Next.js", "React", "Tailwind CSS", "Prisma"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        gridSize: "2x2",
        featured: true,
    },
    {
        slug: "e-commerce-dashboard",
        title: "E-commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores.",
        image: "/images/projects/project-placeholder.svg",
        technologies: ["React", "Redux", "Material UI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        gridSize: "1x2",
        featured: true,
    },
    {
        slug: "portfolio-website",
        title: "Portfolio Website",
        description: "My personal portfolio website built with Next.js and Tailwind CSS.",
        image: "/images/projects/project-placeholder.svg",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        gridSize: "1x1",
        featured: true,
    },
    {
        slug: "social-media-app",
        title: "Social Media App",
        description: "A social media application for connecting with friends.",
        image: "/images/projects/project-placeholder.svg",
        technologies: ["React Native", "Firebase"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        gridSize: "2x1",
        featured: true,
    },
    {
        slug: "task-manager",
        title: "Task Manager",
        description: "A simple task manager app to keep track of your daily tasks.",
        image: "/images/projects/project-placeholder.svg",
        technologies: ["Vue.js", "Vuex"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        gridSize: "1x1",
        featured: true,
    },
]
