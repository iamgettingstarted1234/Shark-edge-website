import React from "react"

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export function SectionBadge({ children, className = "", ...props }: SectionBadgeProps) {
    return (
        <div
            className={`
        inline-flex items-center justify-center
        rounded-full
        px-5 py-1.5
        
        /* Glass Effect */
        bg-white/[0.03] backdrop-blur-md
        
        /* Border */
        border border-[#f5c77a]/30
        
        /* Typography */
        text-[#f5c77a] text-xs font-semibold tracking-[0.15em] uppercase
        
        /* Shadows for depth */
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_10px_rgba(245,199,122,0.1)]
        
        transition-all duration-300
        hover:border-[#f5c77a]/50
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_15px_rgba(245,199,122,0.2)]
        
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
}
