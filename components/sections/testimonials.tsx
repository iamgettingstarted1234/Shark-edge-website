"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText } from "@/components/common/reveal-text";
import { SectionBadge } from "@/components/ui/section-badge";
import { PremiumText } from "@/components/ui/premium-text";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  followers: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rosa Antonini",
    role: "Transformation Coach",
    image: "/clients/rosa-antonini.webp",
    quote:
      "Consistency is the hardest thing to find in this industry, but Shark Edge nails it every time. We just wrapped up another batch of deliverables, and the workflow was seamless. I never have to micromanage or worry about deadlines. It’s a relief to have a partner I can trust completely. Already looking forward to the next project!",
    followers: "150k+ Followers",
  },
  {
    id: 2,
    name: "James Seah",
    role: "Founder, Lucid Digital Lab",
    image: "/clients/james.webp",
    quote:
      "Honestly, I don't care much about 'views'—I care about the bottom line. The strategy Shark Edge implemented was a game-changer. That trial reel strategy performed outstandingly. The last 5 videos generated 140+ qualified leads, and all the properties we featured are sold out.",
    followers: "50k+ Followers",
  },
  {
    id: 3,
    name: "Fraser Briggs",
    role: "Fitness Coach",
    image: "/clients/fraser-moves.webp",
    quote:
      "Building a personal brand is overwhelming, but these guys made it simple. The perceived value of my brand has skyrocketed. People take me much more seriously, and my outreach response rate has doubled just because the content looks this good.",
    followers: "250k+ Followers",
  },
  {
    id: 4,
    name: "Alex Kahts",
    role: "Digital Marketing Expert",
    image: "/clients/alex-kahts.webp",
    quote:
      "I’ve worked with plenty of agencies before, but Shark Edge is different. They don’t just edit footage; they understand emotion, pacing, and storytelling. My latest upload kept the audience hooked until the very last second.",
    followers: "100k+ Followers",
  },
  {
    id: 5,
    name: "Idan Nimtsovich",
    role: "Founder, Cyber Studios",
    image: "/clients/idan-nimtso.webp",
    quote:
      "Efficiency is everything to me. Shark Edge made complex production feel simple. We went from chaos to a streamlined content machine in weeks. It genuinely feels like an in-house team. Zero stress, zero friction.",
    followers: "75k+ Followers",
  },
];

const SPRING = {
  type: "spring",
  stiffness: 50,  // Very soft spring to eliminate "lag/jerk"
  damping: 20,
  mass: 1,
} as const;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);

  /** AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        setActive((prev: number) => (prev + 1) % testimonials.length);
      }
    }, 10000); // 10 seconds (Even slower)
    return () => clearInterval(interval);
  }, []);

  /** STACK STYLES */
  const getStyle = (index: number) => {
    const pos = (index - active + testimonials.length) % testimonials.length;
    // Only show top 3 cards in the stack, hide the rest completely
    if (pos === 0) return { scale: 1, y: 0, opacity: 1, zIndex: 30 };
    if (pos === 1) return { scale: 0.95, y: -40, opacity: 0.7, zIndex: 20 };
    if (pos === 2) return { scale: 0.9, y: -80, opacity: 0.4, zIndex: 10 };
    // Hide cards beyond position 2
    return { opacity: 0, scale: 0.85, y: -120, zIndex: 0 };
  };

  return (
    <section id="testimonials" className="relative w-full py-16 md:py-24 px-4 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-6xl">

        {/* 🔒 HEADING — UNCHANGED */}
        <div className="text-center mb-16 flex flex-col items-center">
          <RevealText>
            <SectionBadge className="mb-6">
              TESTIMONIALS
            </SectionBadge>
          </RevealText>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            <PremiumText
              text="Client Success"
              as="span"
              className="bg-gradient-to-r from-white to-[#f5c77a] bg-clip-text text-transparent"
            />
          </h2>
        </div>

        {/* STACK */}
        <div
          className="relative h-[720px] md:h-[560px] max-w-5xl mx-auto mt-20"
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          {testimonials.map((t, i) => {
            const style = getStyle(i);
            const isHidden = style.opacity === 0;

            return (
              <motion.div
                key={t.id}
                animate={style}
                transition={SPRING}
                className="absolute inset-0 will-change-transform"
                style={{
                  pointerEvents: isHidden ? 'none' : 'auto',
                  visibility: isHidden ? 'hidden' : 'visible',
                  cursor: 'pointer',
                }}
                onClick={() => setActive((prev: number) => (prev + 1) % testimonials.length)}
              >
                <div className="h-full w-full rounded-2xl bg-[#0a0a0a] border border-white/20 shadow-2xl overflow-hidden flex flex-col group transition-colors duration-300 hover:border-white/40">

                  {/* CARD HEADER */}
                  <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                    <div className="flex items-center gap-3 text-white/40">
                      {/* User Icon with Checkmark */}
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-[1px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                  </div>

                  <div className="flex flex-col-reverse md:flex-row flex-1 items-center p-6 md:p-8 gap-6 md:gap-8">
                    {/* TEXT */}
                    <div className="flex-1 flex flex-col justify-center relative">

                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                          {t.name}
                        </h3>
                        <span className="text-base text-[#D4AF37] font-medium block">
                          {t.role}
                        </span>
                      </div>

                      <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                        {t.quote}
                      </p>
                    </div>

                    {/* IMAGE */}
                    {/* IMAGE with Mouse Following Tooltip */}
                    <TestimonialImage t={t} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-12 gap-2 relative z-50">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`relative h-12 flex items-center justify-center cursor-pointer transition-all duration-300 ${i === active ? "w-12" : "w-8"}`}
            >
              <span
                className={`rounded-full transition-all duration-300 ${i === active
                  ? "w-8 h-1.5 bg-[#D4AF37]"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialImage({ t }: { t: Testimonial }) {
  return (
    <figure
      className={`relative w-full md:w-[360px] h-[260px] md:h-[320px] rounded-2xl shrink-0 transition-colors duration-300 bg-white/5 ${(t.id === 1 || t.id === 2) ? "bg-black/20" : ""}`}
    >
      <div
        className="w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-lg"
      >
        <Image
          src={t.image}
          alt={t.name}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover pointer-events-none rounded-2xl"
          loading="lazy"
          style={{
            objectPosition: t.id === 1 ? "center 40%" : t.id === 2 ? "center 20%" : "center center"
          }}
        />
      </div>
    </figure >
  );
}
