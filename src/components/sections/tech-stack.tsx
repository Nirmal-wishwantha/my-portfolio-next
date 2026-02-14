import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Marquee from "@/components/shared/marquee"
import { skills } from "@/data/skills"
import { Badge } from "@/components/ui/badge"

export function TechStack() {
    const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
    const secondRow = skills.slice(Math.ceil(skills.length / 2))

    return (
        <SectionWrapper className="py-10 md:py-16 overflow-hidden">
            <ScrollReveal>
                <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-muted-foreground">
                    Technologies I work with
                </h2>
            </ScrollReveal>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} category={skill.category} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} category={skill.category} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
        </SectionWrapper>
    )
}

function SkillCard({ name, category }: { name: string; category: string }) {
    return (
        <div className="flex items-center gap-2 rounded-xl border bg-card px-4 py-3 shadow-sm hover:border-primary/50 transition-colors mx-4">
            <div className="flex flex-col">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">{category}</span>
            </div>
        </div>
    )
}
