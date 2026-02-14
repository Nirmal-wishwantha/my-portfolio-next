import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { experience } from "@/data/experience"

export function Experience() {
    return (
        <SectionWrapper id="experience">
            <ScrollReveal>
                <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                    Work <span className="text-primary">Experience</span>
                </h2>
            </ScrollReveal>

            <div className="relative mx-auto max-w-4xl">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px" />

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <div key={item.id} className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-6 h-4 w-4 rounded-full border-2 border-primary bg-background -translate-x-[7px] md:left-1/2 md:-translate-x-[8px] z-10 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />

                            <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } gap-8 md:gap-0`}
                            >
                                <div className="ml-8 md:ml-0 md:w-1/2" />

                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                    }`}
                                >
                                    <ScrollReveal width="100%">
                                        <Card glass hover>
                                            <CardHeader>
                                                <div className="flex flex-col gap-1">
                                                    <CardTitle className="text-xl">{item.role}</CardTitle>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium text-primary">
                                                            {item.company}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {item.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="mb-4 text-sm text-muted-foreground">
                                                    {item.description}
                                                </p>
                                                <ul className="mb-4 list-disc pl-4 text-sm text-muted-foreground space-y-1">
                                                    {item.highlights.map((highlight, i) => (
                                                        <li key={i}>{highlight}</li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech) => (
                                                        <Badge key={tech} variant="tech">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
