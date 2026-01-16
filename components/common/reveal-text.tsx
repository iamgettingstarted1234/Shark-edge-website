"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0,
        },
    },
}

const item = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function RevealText({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className={className}
        >
            <motion.div variants={item}>{children}</motion.div>
        </motion.div>
    )
}
