"use client"

import Link from "next/link"
import { Mail, MapPin, Briefcase, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Need to create this
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <ScrollReveal>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2">
                <ScrollReveal width="100%">
                    <Card glass className="h-full">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input id="subject" placeholder="Project Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                                </div>
                                <Button type="submit" className="w-full" variant="glow">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </ScrollReveal>

                <ScrollReveal width="100%">
                    <div className="flex h-full flex-col justify-between gap-8">
                        <div className="grid gap-6">
                            <ContactCard
                                icon={<Mail className="h-6 w-6 text-primary" />}
                                title="Email"
                                value="hello@example.com"
                                link="mailto:hello@example.com"
                            />
                            <ContactCard
                                icon={<MapPin className="h-6 w-6 text-primary" />}
                                title="Location"
                                value="San Francisco, CA"
                            />
                            <ContactCard
                                icon={<Briefcase className="h-6 w-6 text-primary" />}
                                title="Availability"
                                value="Open to opportunities"
                            />
                        </div>

                        <Card glass>
                            <CardContent className="p-8">
                                <h3 className="mb-6 text-lg font-semibold">Connect on Socials</h3>
                                <div className="flex gap-4">
                                    <SocialButton icon={<Github className="h-5 w-5" />} href="https://github.com" label="GitHub" />
                                    <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
                                    <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}

function ContactCard({ icon, title, value, link }: any) {
    return (
        <Card glass hover className="transition-colors hover:border-primary/50">
            <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">{icon}</div>
                <div>
                    <div className="font-medium">{title}</div>
                    {link ? (
                        <a href={link} className="text-muted-foreground hover:text-primary transition-colors">
                            {value}
                        </a>
                    ) : (
                        <div className="text-muted-foreground">{value}</div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

function SocialButton({ icon, href, label }: any) {
    return (
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
            <Link href={href} target="_blank">
                {icon}
                <span className="sr-only">{label}</span>
            </Link>
        </Button>
    )
}
