"use client"

import { useAnimationFrame, useMotionValue, useSpring, motion } from "framer-motion"
import { useEffect, useRef, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface InfiniteScrollProps {
    children: ReactNode
    speed?: number
    hoverSpeed?: number
    gap?: number
    className?: string
    direction?: 'left' | 'right'
}

export function InfiniteScroll({
    children,
    speed = 50,
    hoverSpeed = 10,
    gap = 120, // requested gap
    className,
    direction = 'left'
}: InfiniteScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLDivElement>(null)

    const [contentWidth, setContentWidth] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    // Use MotionValues for performance
    const x = useMotionValue(0)

    // Current speed logic
    // We'll use a spring to smooth out the speed changes
    const targetSpeed = isHovered ? hoverSpeed : speed
    const currentSpeed = useSpring(targetSpeed, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    })

    // Measure content
    useEffect(() => {
        if (scrollerRef.current) {
            // Measure one instance of children (half the total since we double it)
            const fullWidth = scrollerRef.current.scrollWidth
            setContentWidth(fullWidth / 2)
        }
    }, [children])

    // Sync spring target
    useEffect(() => {
        currentSpeed.set(targetSpeed)
    }, [targetSpeed, currentSpeed])

    useAnimationFrame((time, delta) => {
        if (!contentWidth) return

        // Calculate movement based on speed (px per second)
        // delta is in ms, so divide by 1000
        const moveBy = (currentSpeed.get() * delta) / 1000

        // Update x
        let newX = x.get()

        if (direction === 'left') {
            newX -= moveBy
        } else {
            newX += moveBy
        }

        // Wrap around
        // If we've scrolled past the first set of items (contentWidth), reset
        // We want seamlessly scrolling, so we rely on the duplicate set.
        // When x reaches -contentWidth, we reset it to 0.
        if (newX <= -contentWidth) {
            newX = 0
        } else if (newX >= 0 && direction === 'right') {
            // If going right, reset when we hit positive 
            newX = -contentWidth
        }

        x.set(newX)
    })

    return (
        <div
            className={cn("overflow-hidden max-w-full", className)}
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={scrollerRef}
                className="flex w-max items-center"
                style={{ x, gap: `${gap}px` }}
            >
                {/* Original items */}
                {children}
                {/* Duplicate items for loop */}
                {children}
            </motion.div>
        </div>
    )
}
