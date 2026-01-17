"use client";

import { motion, Variants } from "framer-motion";

interface PremiumTextProps extends React.ComponentPropsWithoutRef<React.ElementType> {
    text: string;
    as?: React.ElementType;
    className?: string;
    delay?: number;
    duration?: number;
    triggerOnce?: boolean;
    priority?: boolean;
    // Custom gradient colors (from -> via -> to)
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
}

// Helper function to interpolate between two hex colors
function interpolateColor(color1: string, color2: string, factor: number): string {
    const hex = (c: string) => parseInt(c, 16);
    const r1 = hex(color1.slice(1, 3));
    const g1 = hex(color1.slice(3, 5));
    const b1 = hex(color1.slice(5, 7));
    const r2 = hex(color2.slice(1, 3));
    const g2 = hex(color2.slice(3, 5));
    const b2 = hex(color2.slice(5, 7));

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);

    return `rgb(${r}, ${g}, ${b})`;
}

// Get color at position (0 to 1) in a 3-stop gradient
function getGradientColor(position: number, from: string, via: string, to: string): string {
    if (position <= 0.5) {
        return interpolateColor(from, via, position * 2);
    } else {
        return interpolateColor(via, to, (position - 0.5) * 2);
    }
}

export function PremiumText({
    text,
    as: Component = "h2",
    className = "",
    delay = 0,
    duration = 0.35,
    triggerOnce = true,
    priority = false,
    gradientFrom = "#ffffff",
    gradientVia = "#ffffff",
    gradientTo = "#f5c77a",
    ...props
}: PremiumTextProps) {
    const words = text.split(" ");
    const totalWords = words.length;

    const viewportConfig = {
        once: triggerOnce,
        amount: 0.2
    };

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: priority ? 0 : delay,
            },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            // Removed filter: blur() - causes forced reflows and blocks LCP
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    // Check if gradient props are provided (not using className gradient)
    const useCustomGradient = className.includes('bg-clip-text') || className.includes('gradient');

    // Filter out gradient-related classes since we're applying color directly
    const filteredClassName = className
        .replace(/bg-gradient-to-\w+/g, '')
        .replace(/from-\[?[\w#]+\]?/g, '')
        .replace(/via-\[?[\w#]+\]?/g, '')
        .replace(/to-\[?[\w#]+\]?/g, '')
        .replace(/bg-clip-text/g, '')
        .replace(/text-transparent/g, '')
        .trim();

    return (
        <Component {...props}>
            <motion.span
                variants={container}
                initial="hidden"
                animate={priority ? "visible" : undefined}
                whileInView={priority ? undefined : "visible"}
                viewport={priority ? undefined : viewportConfig}
                style={{ display: 'inline' }}
            >
                {words.map((word, index) => {
                    // Calculate position (0 to 1) based on word index
                    const position = totalWords > 1 ? index / (totalWords - 1) : 0;
                    const wordColor = useCustomGradient
                        ? getGradientColor(position, gradientFrom, gradientVia, gradientTo)
                        : undefined;

                    return (
                        <motion.span
                            key={index}
                            variants={child}
                            className={filteredClassName}
                            style={{
                                display: 'inline-block',
                                marginRight: '0.25em',
                                color: wordColor,
                            }}
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </motion.span>
        </Component>
    );
}
