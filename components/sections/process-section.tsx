// components/process-section.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { RevealText } from "@/components/common/reveal-text"
import { SectionBadge } from "@/components/ui/section-badge"
import { PremiumText } from "@/components/ui/premium-text"

type Phase = {
  id: number
  tag: string
  label: string
  title: string
  subtitle?: string
  body: string[]
  image: {
    src: string
    alt: string
  }
}

const PHASES: Phase[] = [
  {
    id: 1,
    tag: "Phase 01",
    label: "Branding",
    title: "Branding",
    subtitle:
      "We clarify what you stand for, who you serve, and why people should choose you instantly.",

    body: [
      "We define your unique message, visual identity and ideal client.",
      "We ensure you attract and connect with the right audience from day one.",
    ],
    image: {
      src: "/process-images/1.webp",
      alt: "Founder working on brand strategy with notebook and laptop",
    },
  },
  {
    id: 2,
    tag: "Phase 02",
    label: "Content Ideation",
    title: "Content Ideation",
    subtitle:
      "We build a never-ending idea system that positions you as the obvious authority in your space.",
    body: [
      "We develop a complete content strategy and an endless pipeline of high-impact ideas designed to resonate with your audience.",
      "We establish your authority and convert followers into clients.",
    ],
    image: {
      src: "/process-images/2.webp",
      alt: "Team brainstorming content ideas with sticky notes",
    },
  },
  {
    id: 3,
    tag: "Phase 03",
    label: "Production & Filming",
    title: "Production & Filming",
    subtitle:
      "We turn your thoughts into high-quality, scroll-stopping visual content that demands attention.",
    body: [
      "From compelling scripts to pro filming guidance, we help you create high-quality, scroll-stopping content.",
      "We make you look like the expert you are.",
    ],
    image: {
      src: "/process-images/3.webp",
      alt: "Creator filming content in a studio setup",
    },
  },
  {
    id: 4,
    tag: "Phase 04",
    label: "Editing & Distribution",
    title: "Editing & Distribution",
    subtitle:
      "We amplify your content with precision editing and smart distribution so the right people see it.",
    body: [
      "This is where the magic happens. Our expert editors polish your content and our distribution strategy ensures it gets seen by the right people.",
      "It drives maximum impact and ROI.",
    ],
    image: {
      src: "/process-images/4.webp",
      alt: "Editor working on video timeline on a computer",
    },
  },
]

export function ProcessSection() {
  const [activeId, setActiveId] = useState<number>(1)
  const activePhase = PHASES.find((p) => p.id === activeId) ?? PHASES[0]

  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveId((current) => (current === PHASES.length ? 1 : current + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section
      id="process"
      className="relative w-full border-t border-white/5 px-4 py-16 lg:py-28 sm:px-6 overflow-hidden"
    >
      {/* subtle background glow - removed */}

      <div className="relative mx-auto max-w-6xl space-y-10">
        {/* Main heading + intro copy */}
        <div className="text-center flex flex-col items-center">
          <RevealText>
            <SectionBadge className="mb-6">
              OUR PROCESS
            </SectionBadge>
          </RevealText>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            <PremiumText
              text="Here's exactly how we do it."
              as="span"
              className="bg-gradient-to-r from-white via-white to-[#f5c77a] bg-clip-text text-transparent"
            />
          </h2>

          <div className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
            <PremiumText
              text="Shark Edge is a branding agency that helps founders, coaches and business owners turn their expertise into an impactful personal brand. We transform that brand into a scalable, profitable and most importantly enjoyable online business."
              as="p"
              delay={0.2}
            />
          </div>
        </div>

        {/* Phase tabs */}
        <div
          className="mx-auto mt-10 max-w-5xl rounded-[2.5rem] border border-white/10 bg-[rgba(8,8,11,0.9)] p-[6px] shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

            {PHASES.map((phase) => {
              const isActive = phase.id === activeId
              return (
                <button
                  key={phase.id}
                  type="button"
                  onMouseEnter={() => setActiveId(phase.id)}
                  className={`relative flex flex-col items-center justify-center rounded-3xl px-6 py-5 text-sm sm:text-base font-semibold transition-colors duration-300 cursor-pointer ${isActive
                    ? "text-black"
                    : "text-white/55 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-phase-bg"
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#facc15]/70 via-[#fde68a]/70 to-[#f97316]/60 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 uppercase tracking-[0.18em] text-[10px] sm:text-[11px]">
                    {phase.tag}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="active-phase-indicator"
                      className="pointer-events-none absolute inset-x-4 -bottom-[2px] z-10 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#facc15] to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Active phase content card */}
        <RevealText>
          <div
            className="mt-10 rounded-3xl border border-white/10 bg-[rgba(8,8,11,0.96)] p-4 sm:p-6 lg:p-8 shadow-[0_0_55px_rgba(0,0,0,0.85)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] items-center">
              {/* Image side */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden rounded-3xl bg-black/60">
                <Image
                  src={activePhase.image.src}
                  alt={activePhase.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Text side */}
              <div className="space-y-4">
                <div className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-white/55">
                  {activePhase.tag}
                </div>

                <h3 className="text-2xl sm:text-[1.7rem] font-semibold text-white">
                  {activePhase.title}
                </h3>

                {activePhase.subtitle && (
                  <p className="text-sm sm:text-base text-white/75">
                    {activePhase.subtitle}
                  </p>
                )}

                <div className="space-y-2.5 text-sm sm:text-[0.98rem] leading-relaxed text-white/80">
                  {activePhase.body.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  )
}
