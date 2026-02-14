import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function SectionWrapper({
    children,
    className,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            className={cn("py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-6 relative z-10", className)}
            {...props}
        >
            {children}
        </section>
    )
}
