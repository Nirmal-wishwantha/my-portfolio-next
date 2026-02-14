"use client"

import React, { useRef, useState, useEffect } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { cn } from "@/lib/utils"

export function Spotlight({ className }: { className?: string }) {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return
        const div = divRef.current
        const rect = div.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => setOpacity(1)
    const handleMouseLeave = () => setOpacity(0)

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative flex h-full w-full overflow-hidden bg-background",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139,92,246,0.1), transparent 40%)`,
                }}
            />
            <div className="relative h-full w-full">{/* Content */}</div>
        </div>
    )
}
