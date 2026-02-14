"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Spotlight } from "@/components/shared/spotlight"
import { TextScramble } from "@/components/shared/text-scramble"
import { MagneticButton } from "@/components/shared/magnetic-button"
import { DotBackground } from "@/components/shared/dot-background"

export function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            <DotBackground className="absolute inset-0 z-0" />
            <Spotlight className="absolute inset-0 z-10 hidden md:flex" />

            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
                <Badge variant="secondary" className="mb-8 animate-fade-in opacity-0 [animation-delay:200ms]">
                    ✨ Available for opportunities
                </Badge>

                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl animate-slide-up opacity-0 [animation-delay:400ms]">
                    Hi, I&apos;m <span className="text-primary">Software Engineer</span>
                </h1>

                <div className="mb-8 h-8 text-xl font-mono text-muted-foreground sm:text-2xl animate-fade-in opacity-0 [animation-delay:600ms]">
                    I build <TextScramble text="scalable web applications" />
                </div>

                <p className="mb-10 max-w-2xl text-muted-foreground animate-fade-in opacity-0 [animation-delay:800ms]">
                    A passionate developer crafting performant, accessible, and beautiful
                    web experiences with modern technologies like Next.js, React, and
                    Tailwind CSS.
                </p>

                <div className="mb-12 flex gap-4 animate-fade-in opacity-0 [animation-delay:1000ms]">
                    <Button variant="glow" size="lg" asChild>
                        <Link href="#projects">View My Work</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>

                <div className="flex gap-6 animate-fade-in opacity-0 [animation-delay:1200ms]">
                    <MagneticButton>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </MagneticButton>
                </div>
            </div>
        </section>
    )
}
