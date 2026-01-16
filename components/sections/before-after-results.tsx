"use client"
// components/BeforeAfterResults.tsx
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { RevealText } from "@/components/common/reveal-text"
import { SectionBadge } from "@/components/ui/section-badge"
import { PremiumText } from "@/components/ui/premium-text"
import Image from "next/image"

type CaseStudy = {
  id: number
  name: string
  handle: string
  niche: string
  timeframe: string
  beforeFollowers: string
  afterFollowers: string
  beforePosts: string
  afterPosts: string
  beforeFollowing: string
  afterFollowing: string
  lift: string
  summary: string
  avatar: string
}

const CASE_STUDIES: CaseStudy[] =
  [
    {
      id: 1,
      name: "Rosa L. Antonini",
      handle: "@rosalantonini",
      niche: "Entrepreneur & Consultant",
      timeframe: "",

      beforeFollowers: "6.2K",
      afterFollowers: "42.3K",

      beforePosts: "659",
      afterPosts: "1,033",

      beforeFollowing: "1,257",
      afterFollowing: "722",

      lift: "+36.1K followers",

      summary:
        "Audience growth driven by consistent publishing and clearer positioning.",

      avatar: "/clients/rosa-antonini.webp"
    },

    {
      id: 2,
      name: "Idan Nimtso",
      handle: "@idannimtso",
      niche: "Content Creator",
      timeframe: "",

      beforeFollowers: "12.5K",
      afterFollowers: "30.7K",

      beforePosts: "18",
      afterPosts: "25",

      beforeFollowing: "814",
      afterFollowing: "839",

      lift: "+18.2K followers",

      summary:
        "Improved reach and follower velocity through focused short-form content.",

      avatar: "/clients/client-01.webp"
    },

    {
      id: 3,
      name: "Fraser Briggs",
      handle: "@santemoves",
      niche: "Fitness Creator",
      timeframe: "",

      beforeFollowers: "56K",
      afterFollowers: "447K",

      beforePosts: "263",
      afterPosts: "408",

      beforeFollowing: "742",
      afterFollowing: "1,731",

      lift: "+391K followers",

      summary:
        "Scaled from mid-size creator to massive reach through viral fitness storytelling and visual-first content.",

      avatar: "/clients/client-02.webp"
    }
  ]



export function BeforeAfterResults() {
  return (
    <section className="relative isolate py-20 sm:py-24 overflow-hidden">
      {/* subtle background glow - removed */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">


        {/* HEADING */}
        <div className="text-center flex flex-col items-center">
          <RevealText>
            <SectionBadge className="mb-6">
              BEFORE & AFTER
            </SectionBadge>
          </RevealText>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
            <PremiumText
              text="Before & After Results."
              as="span"
              className="bg-gradient-to-r from-white via-white to-[#f5c77a] bg-clip-text text-transparent"
            />
          </h2>

          <div className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/65">
            <PremiumText
              text="Real accounts, real numbers — showing what happens when your content finally works in your favor every single week."
              as="p"
              delay={0.2}
            />
          </div>
        </div>

        {/* CASE STUDIES */}
        <div className="mt-16 space-y-16">
          <RevealText>
            <div className="space-y-8">
              {CASE_STUDIES.map((cs) => {
                return (
                  <div key={cs.id} className="grid gap-8 md:grid-cols-2 items-start">
                    {/* BEFORE CARD */}
                    <div className="relative flex flex-col h-full rounded-[32px] border border-white/10 bg-black p-8 transition-colors duration-300 hover:bg-[#050505]">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                          Before
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
                          {cs.timeframe || "7 Months"}
                        </span>
                      </div>

                      <div className="mt-8 flex items-center gap-4">
                        <Image
                          src={cs.avatar}
                          alt={cs.name}
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-full object-cover grayscale opacity-80"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight">{cs.name}</h3>
                          <p className="text-sm font-medium text-white/40">{cs.handle}</p>
                          <p className="text-xs font-medium text-white/30 mt-0.5">{cs.niche}</p>
                        </div>
                      </div>

                      <div className="mt-auto pt-8 grid grid-cols-3 gap-6">
                        <div>
                          <p className="text-xl font-bold text-white">{cs.beforePosts}</p>
                          <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Posts</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-white">{cs.beforeFollowers}</p>
                          <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Followers</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-white">{cs.beforeFollowing}</p>
                          <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Following</p>
                        </div>
                      </div>
                    </div>

                    {/* AFTER CARD */}
                    <AfterCard cs={cs} />
                  </div>
                )
              })}
            </div>
          </RevealText>
        </div>
      </div >
    </section >
  )
}

function AfterCard({ cs }: { cs: CaseStudy }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Clean up unused refs/effects if we are simplifying, but keeping minimal hover effect
  // GSAP Hover Effect
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onEnter = () => {
      gsap.to(el, { y: -5, duration: 0.3, ease: "power2.out" })
    }
    const onLeave = () => {
      gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" })
    }

    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)

    return () => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col h-full rounded-[32px] border border-[#facc15]/40 bg-black p-8 overflow-hidden group transition-all duration-500 hover:border-[#facc15]/60 hover:shadow-[0_0_50px_-12px_rgba(250,204,21,0.3)]`}
    >
      {/* Shimmer/Shine Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

      {/* Premium Glass Effect Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#facc15]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#facc15]/20 transition-colors duration-500" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#facc15]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#facc15]/10 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#facc15] uppercase">
            After
          </span>
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#facc15] uppercase">
            {cs.lift}
          </span>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-[#facc15]" />
            <Image
              src={cs.avatar}
              alt={cs.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover border-2 border-[#facc15]"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{cs.name}</h3>
            <p className="text-sm font-medium text-[#facc15]">{cs.handle}</p>
            <p className="text-xs font-medium text-white/30 mt-0.5">{cs.niche}</p>
          </div>
        </div>

        <div className="mt-auto pt-8 grid grid-cols-3 gap-6">
          <div>
            <p className="text-xl font-bold text-white">{cs.afterPosts}</p>
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Posts</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#facc15]">{cs.afterFollowers}</p>
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">{cs.afterFollowing}</p>
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mt-1">Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}
