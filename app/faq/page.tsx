// import { FaqSection } from "@/components/sections/faq-section"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ - Shark Edge Media',
    description: 'Answers to common questions about our personal branding services and process.',
    alternates: {
        canonical: 'https://sharkedge.media/faq',
    },
}

import Home from "../page"
import { AutoScroll } from "@/components/common/auto-scroll"

export default function FaqPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How much time do I need to invest per month?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We only require about 2 hours of your time per month to record the necessary content. We handle everything else including editing, strategy, and posting.'
                }
            },
            {
                '@type': 'Question',
                name: 'Who is this service for?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'This service is specifically designed for busy founders, CEOs, and coaches who want to build a personal brand but lack the time to manage it themselves.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you handle video editing?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide premium video editing including color grading, sound design, and motion graphics to ensure your content stands out.'
                }
            },
            {
                '@type': 'Question',
                name: 'What results can I expect?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our clients typically see increased authority, higher engagement, and more qualified leads through their personal brand within the first few months.'
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AutoScroll id="faqs" />
            <Home />
        </>
    )
}
