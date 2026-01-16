import React from "react"

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    className?: string
}

export const GlowButton = ({ children, className = "", ...props }: GlowButtonProps) => {
    return (
        <div className="relative group/glow-btn">
            <button
                className={`
          relative flex items-center justify-center
          px-7 py-2.5 rounded-full
          bg-transparent
          
          /* Typography */
          text-[#EAEAEA] font-medium text-[15px] tracking-wide
          transition-colors duration-500
          
          /* Interactive scaling handled on parent/self */
          hover:scale-[1.02] 
          hover:text-white
          active:scale-[0.98]
          
          ${className}
        `}
                {...props}
            >
                {/* =======================
            LAYER 1: GLASS BACKGROUND
            - Absolute positioning ensures it sits behind text
            - z-index -10 removes it from flow
           ======================= */}
                <div
                    className="absolute inset-0 rounded-full -z-10
            /* Base Surface */
            bg-gradient-to-b from-white/[0.08] to-transparent
            backdrop-blur-xl
            
            /* Border */
            border border-white/[0.08]
            
            /* Shadows */
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.3)]
            
            /* Transitions */
            transition-all duration-500 ease-out
            
            /* HOVER STATES (Triggered by group/glow-btn) */
            group-hover/glow-btn:border-[#f5c77a]/50
            group-hover/glow-btn:bg-gradient-to-b group-hover/glow-btn:from-[#f5c77a]/15 group-hover/glow-btn:to-transparent
            group-hover/glow-btn:shadow-[inset_0_1px_0_rgba(245,199,122,0.4),inset_0_-1px_0_rgba(245,199,122,0.1),0_4px_12px_rgba(0,0,0,0.5)]
          "
                />

                {/* =======================
            LAYER 2: SHINE OVERLAY
           ======================= */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/glow-btn:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f5c77a]/10 to-transparent" />
                </div>

                {/* =======================
            LAYER 3: CONTENT
            - z-index 10 ensures it floats above the glass/blur
           ======================= */}
                <span className="relative z-10 drop-shadow-sm">
                    {children}
                </span>
            </button>
        </div>
    )
}
