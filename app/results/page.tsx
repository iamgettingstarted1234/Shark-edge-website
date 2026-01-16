// import { ResultsSection } from "@/components/sections/results-section"
// import { BeforeAfterResults } from "@/components/sections/before-after-results"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Client Results - Shark Edge Media',
    description: 'View our case studies and the transformations we have achieved for our clients.',
    alternates: {
        canonical: 'https://sharkedge.media/results',
    },
}

import Home from "../page"
import { AutoScroll } from "@/components/common/auto-scroll"

export default function ResultsPage() {
    return (
        <>
            <AutoScroll id="results" />
            <Home />
        </>
    )
}
