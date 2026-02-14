"use client"

import { cn } from "@/lib/utils"

export function DotBackground({ className }: { className?: string }) {
    return (
        <div
            className={cn("h-full w-full relative flex items-center justify-center", className)}
            style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
            }}
        >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    )
}
