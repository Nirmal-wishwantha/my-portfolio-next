"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
    children,
    duration = 2000,
    rx,
    ry,
    ...otherProps
}: {
    children: React.ReactNode
    duration?: number
    rx?: string
    ry?: string
    [key: string]: any
}) => {
    const pathRef = React.useRef<any>(null)
    const progress = React.useRef<any>(0)
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            const length = pathRef.current?.getTotalLength()
            if (length) {
                const px = pathRef.current?.getPointAtLength(length * progress.current)
                setX(px.x)
                setY(px.y)
            }
            progress.current += 0.02
            if (progress.current > 1) {
                progress.current = 0
            }
        }, 10)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={cn(
                "relative p-[1px] overflow-hidden rounded-xl bg-gradient-to-r from-primary/40 to-primary/10",
            )}
            {...otherProps}
        >
            <div className="absolute inset-0" style={{
                background: `radial-gradient(circle at ${x}px ${y}px, var(--primary) 0%, transparent 10%)`
            }}></div>
            <div className="relative bg-background rounded-xl h-full w-full">
                {children}
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                style={{ display: 'none' }} // Hidden path for calculation
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
        </div>
    )
}
