"use client"


import StarBorder from "@/components/common/star-border"
import { InfiniteScroll } from "@/components/ui/infinite-scroll"
import { PremiumText } from "@/components/ui/premium-text"
import NextImage from "next/image"



interface CompanyLogo {
  alt: string;
  src: string;
  height: number;
  width: number;
  shouldInvert?: boolean;
  invert?: boolean;
  original?: boolean;
}

export function Hero() {

  const faceImages = [
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120",
  ]

  const companyLogos = [
    {
      alt: "Antomolio",
      src: "/logos/Antimolio-new.png",
      height: 50,
      width: 130,
      shouldInvert: false,
    },
    {
      alt: "Cleo's Kitchen",
      src: "/logos/cleos.png",
      height: 40,
      width: 134,
      shouldInvert: true,
    },
    {
      alt: "Fame Machine",
      src: "/logos/fame-machine.webp",
      height: 36,
      width: 130,
      shouldInvert: false,
    },
    {
      alt: "Goods",
      src: "/logos/goods.webp",
      height: 36,
      width: 130,
      shouldInvert: true,
    },
    {
      alt: "Home Hulab",
      src: "/logos/home-hulab.png",
      height: 60,
      width: 120,
      shouldInvert: true,
    },
    {
      alt: "HSS",
      src: "/logos/hss.webp",
      height: 42,
      width: 138,
      shouldInvert: false,
    },
    {
      alt: "Terra",
      src: "/logos/terra-new.webp",
      height: 36,
      width: 120,
      shouldInvert: false,
    },
    {
      alt: "Asian Paints",
      src: "/logos/asian-paints.png",
      height: 36,
      width: 140,
      shouldInvert: false,
    },
    {
      alt: "Rosa",
      src: "/logos/rosa.png",
      height: 36,
      width: 120,
      shouldInvert: false,
      invert: true,
    },
  ]

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background – scoped to hero only */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={(el) => {
            if (el) {
              el.playbackRate = 2.0;
              // Force play on mount
              el.play().catch(() => { });
            }
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          poster="/background/hero-poster.webp"
          onCanPlay={(e) => {
            // Ensure video plays when ready
            const video = e.currentTarget;
            video.play().catch(() => { });
          }}
          onPause={(e) => {
            // Auto-resume if paused unexpectedly (power saving, tab switch, etc.)
            const video = e.currentTarget;
            if (!document.hidden) {
              video.play().catch(() => { });
            }
          }}
        >
          <source src="/background/hero-bg.webm" type="video/webm" />
        </video>

        {/* Dark overlay + subtle glow */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        <div className="absolute -top-40 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-[48px] bg-white/10 blur-3xl opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-10 pt-32 md:pt-40 lg:pt-48">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[4.2rem] font-medium leading-[1.1] mx-auto max-w-6xl text-center flex flex-col items-center gap-2">
            {/* Line 1: Level up your Personal Brand */}
            <span className="block text-[#E4E9F2] leading-[1.1] md:whitespace-nowrap"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
              }}
            >
              <PremiumText
                text="Level up your"
                as="span"
                style={{ fontFamily: 'var(--font-inter-local)', fontWeight: 500 }}
                className="tracking-tight inline-block mr-3"
                triggerOnce={true}
                priority={true}
              />
              <PremiumText
                text="Personal Brand"
                as="span"
                delay={0.2}
                style={{ fontFamily: 'var(--font-instrument-italic)', fontStyle: 'italic' }}
                className="tracking-tight inline-block"
                triggerOnce={true}
                priority={true}
              />
            </span>

            {/* Line 2: with Authority Positioning */}
            <span className="block text-[#E4E9F2] leading-[1.1] md:whitespace-nowrap"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
              }}
            >
              <PremiumText
                text="with"
                as="span"
                delay={0.4}
                style={{ fontFamily: 'var(--font-inter-local)', fontWeight: 500 }}
                className="tracking-tight inline-block mr-3"
                triggerOnce={true}
                priority={true}
              />
              <PremiumText
                text="Authority Positioning"
                as="span"
                delay={0.5}
                style={{ fontFamily: 'var(--font-instrument-italic)', fontStyle: 'italic' }}
                className="tracking-tight inline-block"
                triggerOnce={true}
                priority={true}
              />
            </span>
          </h1>

          {/* Subheading */}
          <div className="text-lg sm:text-xl md:text-2xl font-medium text-white/60 leading-relaxed max-w-4xl mx-auto text-balance">
            <PremiumText
              text="If you're a busy founder, coach or business owner who wants to grow a personal brand but has zero time to post, then this is for you."
              as="p"
              delay={0.6}
              triggerOnce={true}
              priority={true}
            />
          </div>


          <div className="mt-10 md:mt-12 flex justify-center">
            <StarBorder
              as="a"
              href="https://calendly.com/sharkedge/30min"
              thickness={1.5}
              speed="3.5s"
              color="#f5c77a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </StarBorder>
          </div>

          {/* Benefit ticks */}
          <div className="mt-12 w-full flex justify-center">
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f5c77a] shadow-[0_0_6px_rgba(245,199,122,0.7)] flex-shrink-0">
                  <span className="text-[8px] font-bold text-black leading-none">✓</span>
                </span>
                <span className="text-sm sm:text-base font-medium text-white/90 leading-none">
                  Requires only 2 hours of your time
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f5c77a] shadow-[0_0_6px_rgba(245,199,122,0.7)] flex-shrink-0">
                  <span className="text-[8px] font-bold text-black leading-none">✓</span>
                </span>
                <span className="text-sm sm:text-base font-medium text-white/90 leading-none">
                  All you need is to record your unique insights
                </span>
              </div>
            </div>
          </div>

          {/* Faces + trust sentence */}
          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {faceImages.map((src, i) => (
                <NextImage
                  key={`face-${i}`}
                  src={src}
                  alt="Satisfied client"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-black object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="max-w-3xl text-center text-base sm:text-lg font-medium text-white/85 leading-relaxed">
              <PremiumText
                text="Helping more than 100+ coaches, entrepreneurs, and business owners build impactful personal brands with proven systems."
                as="p"
                delay={0.8}
                triggerOnce={true}
                priority={true}
              />
            </div>
          </div>

          {/* Scrolling client logos */}
          <div className="mt-10 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-10">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            <InfiniteScroll speed={50} hoverSpeed={10} gap={100}>
              {companyLogos.map((logo: CompanyLogo, index) => (
                <NextImage
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sizes={`${logo.width}px`}
                  className={`company-logo-img object-contain transition-all duration-300
                              ${logo.original ? 'opacity-100' : (logo.invert ? 'opacity-50' : (logo.shouldInvert ? 'opacity-50' : 'brightness-0 invert opacity-50'))}
                              hover:opacity-100`}
                  style={{
                    height: logo.height,
                    width: logo.width,
                    filter: logo.original ? "" : (logo.invert ? "invert(1)" : (logo.shouldInvert ? "brightness(0) invert(1)" : ""))
                  }}
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
