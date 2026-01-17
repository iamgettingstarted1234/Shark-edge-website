import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/components/common/header"
import GradualBlur from "@/components/common/gradual-blur"
import { FooterCTA } from "@/components/sections/footer-cta"

/* Body / UI font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

/* instrument serif italic */
const instrumentSerifItalic = localFont({
  src: "../public/fonts/instrument-italic.ttf",
  variable: "--font-instrument-italic",
  style: 'italic',
})

/* Inter local variable font */
const interLocal = localFont({
  src: "../public/fonts/inter-variable.ttf",
  variable: "--font-inter-local",
})

export const metadata: Metadata = {
  title: {
    default: 'Shark Edge Media - Branding for Founders & Coaches',
    template: '%s | Shark Edge Media',
  },
  description: 'Stop being the "Invisible Expert." We build profitable personal brands for busy founders, coaches, and CEOs in just 2 hours a month. Strategy, Video, & Growth.',
  keywords: [
    'personal branding agency',
    'content marketing for founders',
    'video editing for coaches',
    'authority positioning',
    'personal branding for ceos',
    'social media management',
    'done for you content creation',
    'thought leadership marketing',
    'Shark Edge Media',
    'personal brand consultant',
    'executive branding',
    'linkedin personal branding',
    'content strategy for CEOs',
  ],
  authors: [{ name: 'Shark Edge Media', url: 'https://sharkedge.media' }],
  creator: 'Shark Edge Media',
  publisher: 'Shark Edge Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sharkedge.media'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shark Edge Media - Level Up Your Personal Brand',
    description: 'The "Anti-Hustle" branding agency. We help entrepreneurs and coaches turn their expertise into an authoritative brand with zero time wasted.',
    url: 'https://sharkedge.media',
    siteName: 'Shark Edge Media',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shark Edge Media - Personal Branding for Founders & Coaches',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shark Edge Media - Branding for Founders & Coaches',
    description: 'Stop being the "Invisible Expert." We build profitable personal brands in just 2 hours a month.',
    images: ['/og-image.png'],
    creator: '@sharkedgemedia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Primary Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sharkedge.media/#organization',
    name: 'Shark Edge Media',
    alternateName: 'SharkEdge Media',
    url: 'https://sharkedge.media',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sharkedge.media/web-app-manifest-512x512.png',
      width: 512,
      height: 512,
    },
    image: 'https://sharkedge.media/web-app-manifest-512x512.png',
    description: 'Stop being the "Invisible Expert." We build profitable personal brands for busy founders, coaches, and CEOs in just 2 hours a month.',
    slogan: 'The Anti-Hustle Branding Agency',
    foundingDate: '2024',
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.instagram.com/sharkedge.media',
      'https://www.linkedin.com/in/sharkedge-media-104a2734b/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'mani@sharkedge.media',
      availableLanguage: ['English'],
    },
    knowsAbout: [
      'Personal Branding',
      'Content Marketing',
      'Video Editing',
      'Social Media Management',
      'Thought Leadership',
      'Executive Branding',
      'LinkedIn Marketing',
      'Content Strategy',
    ],
  }

  // Service structured data for better AI understanding
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://sharkedge.media/#service',
    name: 'Personal Brand Building Service',
    provider: {
      '@id': 'https://sharkedge.media/#organization',
    },
    serviceType: 'Personal Branding Agency',
    description: 'Done-for-you personal brand building for entrepreneurs, founders, coaches, and CEOs. Strategy, video production, and growth management in just 2 hours a month.',
    areaServed: 'Worldwide',
    audience: {
      '@type': 'Audience',
      audienceType: 'Entrepreneurs, Founders, Coaches, CEOs',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Personal Branding Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Strategy',
            description: 'Comprehensive personal brand strategy development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Video Production',
            description: 'Professional video editing and content creation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description: 'Done-for-you social media content and growth',
          },
        },
      ],
    },
  }

  // Website structured data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sharkedge.media/#website',
    url: 'https://sharkedge.media',
    name: 'Shark Edge Media',
    description: 'Personal Branding Agency for Founders, Coaches & CEOs',
    publisher: {
      '@id': 'https://sharkedge.media/#organization',
    },
  }

  // Combined JSON-LD graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, serviceSchema, websiteSchema],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload hero video for faster LCP */}
        <link rel="preload" href="/background/hero-bg.webm" as="video" type="video/webm" />
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/inter-variable.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body
        className={`
          ${inter.variable}
          ${instrumentSerifItalic.variable}
          ${interLocal.variable}
          ${manrope.variable}
          antialiased
          bg-black
          text-white
          overflow-x-hidden
        `}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <FooterCTA />
        <GradualBlur direction="bottom" blurLayers={1} maxBlur={1} height="20px" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
