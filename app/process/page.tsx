// import { ProcessSection } from "@/components/sections/process-section"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Process - Shark Edge Media',
    description: 'See how we turn your expertise into a personal brand empire in just 2 hours a month.',
    alternates: {
        canonical: 'https://sharkedge.media/process',
    },
}

import Home from "../page"
import { AutoScroll } from "@/components/common/auto-scroll"

export default function ProcessPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Personal Brand Building Process',
        description: 'Our proven 3-step process to build a profitable personal brand in just 2 hours a month.',
        step: [
            {
                '@type': 'HowToStep',
                name: 'Strategy & Planning',
                text: 'We analyze your niche, define your unique value proposition, and create a content roadmap tailored to your goals.',
                position: 1
            },
            {
                '@type': 'HowToStep',
                name: 'Content Recording',
                text: 'You spend just 2 hours recording content based on our scripts and guidelines. No complex setup required.',
                position: 2
            },
            {
                '@type': 'HowToStep',
                name: 'Production & Growth',
                text: 'We edit, optimize, and distribute your content across platforms to maximize reach and engagement.',
                position: 3
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AutoScroll id="process" />
            <Home />
        </>
    )
}
