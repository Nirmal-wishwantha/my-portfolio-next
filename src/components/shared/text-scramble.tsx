"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function TextScramble({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState(text)
    const chars = "!<>-_\\/[]{}—=+*^?#________"

    useEffect(() => {
        let iteration = 0
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index]
                        }
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join("")
            )

            if (iteration >= text.length) {
                clearInterval(interval)
            }

            iteration += 1 / 3
        }, 30)

        return () => clearInterval(interval)
    }, [text])

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block font-mono text-primary"
        >
            {displayText}
        </motion.span>
    )
}
