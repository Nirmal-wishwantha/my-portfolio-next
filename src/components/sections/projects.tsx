"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const filters = ["All", "Frontend", "Backend", "Full Stack"]

export function Projects() {
    // Simple filter logic for demo purposes - extending this would require category in data
    const [activeFilter, setActiveFilter] = useState("All")

    return (
        <SectionWrapper id="projects">
            <ScrollReveal>
                <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setActiveFilter(filter)}
                                className="rounded-full"
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[300px]">
                <AnimatePresence>
                    {projects.slice(0, 5).map((project, index) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "group relative overflow-hidden rounded-xl bg-muted/20 border border-white/5",
                                project.gridSize === "2x2" && "md:col-span-2 md:row-span-2",
                                project.gridSize === "2x1" && "md:col-span-2",
                                project.gridSize === "1x2" && "md:row-span-2"
                            )}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge key={tech} variant="tech" className="bg-background/50 backdrop-blur-sm">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    {project.githubUrl && (
                                        <Button size="sm" variant="outline" className="bg-background/50 backdrop-blur-sm h-8 w-8 p-0" asChild>
                                            <Link href={project.githubUrl} target="_blank">
                                                <Github className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {project.liveUrl && (
                                        <Button size="sm" variant="default" className="h-8 w-8 p-0" asChild>
                                            <Link href={project.liveUrl} target="_blank">
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild>
                    <Link href="/projects">View All Projects</Link>
                </Button>
            </div>
        </SectionWrapper>
    )
}
