// import { TestimonialsSection } from "@/components/sections/testimonials"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Testimonials - Shark Edge Media',
    description: 'Read what founders and coaches are saying about working with Shark Edge Media.',
    alternates: {
        canonical: 'https://sharkedge.media/testimonials',
    },
}

import Home from "../page"
import { AutoScroll } from "@/components/common/auto-scroll"

export default function TestimonialsPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Client Testimonials - Shark Edge Media',
        description: 'Success stories and reviews from founders and coaches who built their personal brand with us.',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
                {
                    '@type': 'Review',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                        bestRating: '5'
                    },
                    author: {
                        '@type': 'Person',
                        name: 'Founders & Coaches'
                    },
                    reviewBody: 'Helping more than 100+ coaches, entrepreneurs, and business owners build impactful personal brands with proven systems.'
                }
            ]
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AutoScroll id="testimonials" />
            <Home />
        </>
    )
}
