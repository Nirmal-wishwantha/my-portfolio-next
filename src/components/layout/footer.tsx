import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="w-full py-6 mt-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Software Engineer. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        Built with <span className="text-primary font-medium">Next.js 16</span> &{" "}
                        <span className="text-primary font-medium">Tailwind CSS 4</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
