"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function AutoScrollContent({ id }: { id: string }) {
    const searchParams = useSearchParams()

    useEffect(() => {
        // Small timeout to Ensure DOM is ready and layout is stable
        const timer = setTimeout(() => {
            const elem = document.getElementById(id)
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [id, searchParams]) // Re-run if params change, though primarily on mount

    return null
}

export function AutoScroll({ id }: { id: string }) {
    return (
        <Suspense fallback={null}>
            <AutoScrollContent id={id} />
        </Suspense>
    )
}
