import Image from "next/image"
import Link from "next/link"
import { Download, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { skills } from "@/data/skills"

export function About() {
    return (
        <SectionWrapper id="about">
            <ScrollReveal>
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                    About <span className="text-primary">Me</span>
                </h2>
            </ScrollReveal>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                <ScrollReveal width="100%">
                    <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-white/10 bg-muted/20 shadow-2xl lg:ml-auto lg:mr-0">
                        <Image
                            src="/images/profile.svg"
                            alt="Profile"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            priority
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%">
                    <div className="flex h-full flex-col justify-center">
                        <Card glass className="mb-8">
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                                    <Terminal className="h-5 w-5" />
                                    <span className="font-mono text-sm">bio.txt</span>
                                </div>
                                <p className="mb-4 leading-relaxed text-muted-foreground">
                                    I am a Full Stack Developer with over 4 years of experience
                                    building digital products. I specialize in the JavaScript
                                    ecosystem, primarily React and Node.js.
                                </p>
                                <p className="leading-relaxed text-muted-foreground">
                                    When I&apos;m not coding, I write technical articles, contribute to
                                    open source, and explore new technologies to stay ahead of the
                                    curve.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {[
                                { label: "Years Exp", value: "4+" },
                                { label: "Projects", value: "30+" },
                                { label: "Clients", value: "15+" },
                                { label: "Commits", value: "2k+" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8 flex flex-wrap gap-2">
                            {skills.slice(0, 8).map((skill) => (
                                <Badge key={skill.name} variant="secondary">
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>

                        <Button asChild className="w-fit">
                            <Link href="/resume.pdf" target="_blank">
                                <Download className="mr-2 h-4 w-4" /> Download Resume
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}
