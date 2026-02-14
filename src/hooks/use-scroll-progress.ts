"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight

            if (scrollHeight) {
                setScrollProgress(Number((currentScroll / scrollHeight).toFixed(2)))
            }
        }

        window.addEventListener("scroll", updateScroll)

        return () => window.removeEventListener("scroll", updateScroll)
    }, [])

    return scrollProgress
}
