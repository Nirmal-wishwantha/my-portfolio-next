"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4 transition-all duration-300",
                isScrolled ? "top-4" : "top-6"
            )}
        >
            <div className="flex items-center justify-between p-2 rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-lg">
                <Link href="/" className="ml-4 font-bold text-lg tracking-tight hover:text-primary transition-colors">
                    Port<span className="text-primary">folio</span>.
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 pr-2">
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="md:hidden px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </header>
    )
}
