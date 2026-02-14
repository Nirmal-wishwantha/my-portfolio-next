"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ScrollReveal({ children, width = "100%" }: { children: React.ReactNode, width?: "100%" | "fit-content" }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width, position: 'relative' }}
        >
            {children}
        </motion.div>
    )
}
