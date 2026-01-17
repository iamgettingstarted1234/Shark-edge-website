"use client"


import { useState, useRef, useEffect } from "react"
import { RevealText } from "@/components/common/reveal-text"
import { SectionBadge } from "@/components/ui/section-badge"
import { PremiumText } from "@/components/ui/premium-text"
import Image from "next/image"

function useCountUp(target: number, duration = 1600, interval = 10000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let rafId: number

    const startAnimation = () => {
      let startTime: number | null = null
      setValue(0)

      const animate = (time: number) => {
        if (!startTime) startTime = time
        const progress = Math.min((time - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        setValue(Math.floor(eased * target))

        if (progress < 1) {
          rafId = requestAnimationFrame(animate)
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    // start immediately
    startAnimation()

    // repeat every 10s
    const intervalId = setInterval(startAnimation, interval)

    return () => {
      cancelAnimationFrame(rafId)
      clearInterval(intervalId)
    }
  }, [target, duration, interval])

  return value
}



function MetricCard({
  value,
  suffix,
  title,
  subtitle,
}: {
  value: number
  suffix: string
  title: string
  subtitle: string
}) {
  const count = useCountUp(value)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black px-6 py-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#facc15]/40 hover:shadow-[0_0_45px_rgba(250,204,21,0.18)]">

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Number */}
      <p className="text-4xl sm:text-5xl md:text-6xl font-semibold">
        <span className="bg-gradient-to-r from-[#facc15] via-[#fde68a] to-[#facc15] bg-clip-text text-transparent">
          {count}
        </span>
        <span className="text-white">{suffix}</span>
      </p>

      {/* Title */}
      <p className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/70">
        {title}
      </p>

      {/* Subtitle */}
      <p className="mt-1 text-xs sm:text-sm text-white/60">
        {subtitle}
      </p>
    </div>
  )
}




type Reel = {
  id: number
  title: string
  context: string
  duration: string
  thumbnail: string
  videoSrc?: string // Added video source
  href?: string
}


const REELS: Reel[] = [
  {
    id: 1,
    title: "Authority-building reel",
    context: "Positioning you as the go-to expert in your space.",
    duration: "0:49",
    thumbnail:
      "/thumbnails/Video1.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767768388/Video_1_1_rfqzot.mp4",
  },
  {
    id: 2,
    title: "Story-led content",
    context: "Turning your journey into client-magnet episodes.",
    duration: "0:32",
    thumbnail:
      "/thumbnails/Video2.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767768396/video_2_1_uznxqn.mp4",
  },
  {
    id: 3,
    title: "Educational breakdown",
    context: "Explainers that simplify complex topics.",
    duration: "0:27",
    thumbnail:
      "/thumbnails/Video3.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766998/Video_3_nzywyv.mp4",
  },
  {
    id: 4,
    title: "Lifestyle credibility reel",
    context: "Showing the real person behind the brand.",
    duration: "0:41",
    thumbnail:
      "/thumbnails/Video4.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767768400/Video_4_1_csknfc.mp4",
  },
  {
    id: 5,
    title: "Offer-focused reel",
    context: "Clear CTAs that move people to book or buy.",
    duration: "0:36",
    thumbnail:
      "/thumbnails/Video5.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767767011/Video_5_raijsf.mp4",
  },
  {
    id: 6,
    title: "Proof & social reels",
    context: "Clipping your best client wins and key moments.",
    duration: "0:53",
    thumbnail:
      "/thumbnails/Video6.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766977/video_6_tablzl.mp4",
  },
  {
    id: 7,
    title: "Fast value drops",
    context: "Short, sharp tips that boost saves and shares.",
    duration: "0:18",
    thumbnail:
      "/thumbnails/Video7.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767768455/Video_7_1_aqsexi.mp4",
  },
  {
    id: 8,
    title: "Behind-the-scenes reel",
    context: "Documenting how you actually work with clients.",
    duration: "0:44",
    thumbnail:
      "/thumbnails/Video8.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767767030/Video_8_hgdqct.mp4",
  },
  // {
  //   id: 9,
  //   title: "Viral potential",
  //   context: "Maximizing reach with trending formats.",
  //   duration: "0:22",
  //   thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
  //   videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766982/video.9_inc6fs.mp4",
  // },
  {
    id: 10,
    title: "Community building",
    context: "Engaging directly with your audience.",
    duration: "0:35",
    thumbnail: "/thumbnails/Video10.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766977/video_10_msewkh.mp4",
  },
  {
    id: 11,
    title: "Strategic highlights",
    context: "Showcasing key milestones.",
    duration: "0:45",
    thumbnail: "/thumbnails/Video11.webp",
    videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766981/video_11_ljdgro.mp4",
  },
  // {
  //   id: 12,
  //   title: "Brand essence",
  //   context: "Visualizing your core values.",
  //   duration: "0:30",
  //   thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
  //   videoSrc: "https://res.cloudinary.com/dlliqtujb/video/upload/v1767766980/video_12_mx7cuk.mp4",
  // },

]

const tickerReels = [...REELS, ...REELS]

export function ResultsSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Effect to sync DOM video state with React state
  useEffect(() => {
    tickerReels.forEach((_, index) => {
      const video = videoRefs.current[index]
      if (!video) return

      if (playingIndex === index) {
        // Active: Play with sound
        video.muted = false
        video.currentTime = 0
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Ignore AbortError which happens when pausing a video that is loading/starting
            if (error.name !== 'AbortError') {
              console.error("Video play failed:", error)
            }
          })
        }
      } else {
        // Inactive: Pause and reset
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingIndex])

  const handleToggle = (index: number) => {
    // If clicking the currently playing video, stop it
    if (playingIndex === index) {
      setPlayingIndex(null)
    } else {
      // Play new one
      setPlayingIndex(index)
    }
  }

  return (
    <section
      id="results"
      className="relative w-full py-16 sm:py-20 overflow-hidden"
    >
      {/* Solid black to remove any background design behind this section - REMOVED for grid visibility */}
      {/* <div className="absolute inset-0 bg-black" /> */}

      <div className="relative z-10">


        {/* HEADING / SUBCOPY – styled like the other sections */}
        <div className="px-4 sm:px-8 max-w-6xl mx-auto text-center flex flex-col items-center">

          {/* Eyebrow */}
          <RevealText>
            <SectionBadge className="mb-6">
              RESULTS
            </SectionBadge>
          </RevealText>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            <PremiumText
              text="See what happens when your content compounds."
              as="span"
              className="bg-gradient-to-r from-white via-white to-[#f5c77a] bg-clip-text text-transparent"
            />
          </h2>

          {/* Subheading */}
          <div className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
            <PremiumText
              text="These are the kinds of reels we build and refine for you week after week — designed to build authority, trust and demand on autopilot."
              as="p"
              delay={0.2}
            />
          </div>
        </div>

        <div className="relative mt-14 w-full overflow-hidden">
          {/* edge fades REMOVED */}

          <RevealText>
            <div
              className="reels-track flex gap-7 w-max px-6 animate-reels"
              style={{ animationPlayState: playingIndex !== null ? 'paused' : 'running' }}
            >
              {tickerReels.map((reel, index) => {
                const isPlaying = playingIndex === index

                return (
                  <article
                    key={`${reel.id}-${index}`}
                    className="relative h-[420px] sm:h-[460px] w-[280px] sm:w-[300px] shrink-0 overflow-hidden rounded-[32px] bg-black border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] group"
                    onClick={() => handleToggle(index)} // Click anywhere to toggle
                  >
                    {/* Video / Thumbnail */}
                    {reel.videoSrc ? (
                      <>
                        <video
                          ref={(el) => { videoRefs.current[index] = el }}
                          playsInline
                          preload="none"
                          poster={reel.thumbnail}
                          className="absolute inset-0 h-full w-full object-cover z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        >
                          <source src={reel.videoSrc} type="video/mp4" />
                        </video>
                        {/* Fallback/Poster Image (visible if video loads slowly or fails) */}
                        <Image
                          src={reel.thumbnail}
                          alt={reel.title}
                          fill
                          className="absolute inset-0 h-full w-full object-cover z-0"
                          sizes="(max-width: 640px) 280px, 300px"
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <Image
                        src={reel.thumbnail}
                        alt={reel.title}
                        fill
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 640px) 280px, 300px"
                        loading="lazy"
                      />
                    )}

                    {/* Overlays - Hide when playing */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                      {/* Stronger gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                      {/* Play button – Matte Gold (No Glow) */}
                      <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#facc15] text-black text-xl shadow-sm transition-transform group-hover:scale-110">
                          ▶
                        </div>
                      </div>

                      {/* Text */}

                    </div>

                    {/* Click overlay for when it is playing to allow pausing */}
                    {isPlaying && (
                      <div className="absolute inset-0 z-30 cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(index);
                      }} />
                    )}
                  </article>
                )
              })}
            </div>
          </RevealText>
        </div>


        {/* METRICS / NUMBERS – premium animated */}
        <div className="mt-20 px-4 sm:px-8">
          <RevealText>
            <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">

              <MetricCard
                value={1900}
                suffix="+"
                title="Videos Created"
                subtitle=""
              />

              <MetricCard
                value={150}
                suffix="M+"
                title="Views"
                subtitle=""
              />

              <MetricCard
                value={140}
                suffix="+"
                title="Relationships Built"
                subtitle=""
              />

            </div>
          </RevealText>
        </div>

      </div>
    </section>
  )
}




