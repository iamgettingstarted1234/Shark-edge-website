"use client"

import { useState } from "react"
import { RevealText } from "@/components/common/reveal-text"
import StarBorder from "@/components/common/star-border"
import { SectionBadge } from "@/components/ui/section-badge"
import { PremiumText } from "@/components/ui/premium-text"
import { AnimatePresence, motion } from "framer-motion"

const faqs = [
  {
    question: "What makes Shark Edge different from other agencies?",
    answer:
      "We don't just 'edit videos.' We build your entire personal brand as an asset—uncovering your story, shaping your positioning, and producing content that compounds over time. Most agencies focus on output; we focus on building cultural relevance and authority.",
  },
  {
    question: "What exactly do you help with?",
    answer:
      "We turn your 'invisible brand' into a recognized authority in your niche. We do this by building and managing your entire personal brand, from core strategy and content ideas to professional editing and distribution. In short: Everything you need to turn your story into a brand that grows on autopilot.",
  },
  {
    question: "How much time will this take me?",
    answer:
      "Our process is specifically designed for busy experts. We handle all the heavy lifting—strategy, ideation, scripting, editing, and distribution. You only need to set aside 2–3 hours per month for filming (which we'll batch-record to be super efficient).",
  },
  {
    question: "Do you only work with Instagram?",
    answer:
      "No. We specialize in Instagram as a primary platform, but our strategy is holistic. We create a 'create once, distribute everywhere' system, repurposing your core content for other platforms like LinkedIn, TikTok & YouTube to maximize your reach.",
  },
  {
    question: "What if I've tried content before and it didn't work?",
    answer:
      "Content without a clear strategy is just noise. It usually fails because there was no brand foundation. We're different. We build your core brand and message first, so every piece of content has a specific job: to attract your ideal client.",
  },
  {
    question: "How much does Shark Edge's service cost?",
    answer:
      "Our pricing is tailored to your specific goals and the level of work involved to achieve them. Schedule a discovery call with us to know if we could help you achieve your outcomes or take your brand to the next big step.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-16 md:py-24 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center mb-14 flex flex-col items-center">

        {/* Eyebrow */}
        <RevealText>
          <SectionBadge className="mb-6">
            FAQS
          </SectionBadge>
        </RevealText>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          <PremiumText
            text="Frequently Asked Questions"
            as="span"
            className="bg-gradient-to-r from-white via-white to-[#f5c77a] bg-clip-text text-transparent"
          />
        </h2>

        {/* Subheading */}
        <div className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
          <PremiumText
            text="Answers to common questions about our services, processes, and what sets us apart."
            as="p"
            delay={0.2}
          />
        </div>
      </div>

      <RevealText>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* 
                  We structure this so that the StarBorder is visually consistent
                  but handles the conditional 'glow' and expanded size smoothly.
                */}
                <div className="relative rounded-[1.5rem] bg-black">
                  {/* Background/Border Layer */}
                  <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                    {/* 
                      If open, preserve the StarBorder logic. 
                      Ideally StarBorder wraps content, but here we might want to overlay it 
                      or just use it as the 'border' provider.
                      Given the existing code, StarBorder wraps the inner content.
                      To support smooth height animation, we need the container to grow.
                    */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                      <StarBorder
                        as="div"
                        className="w-full h-full"
                        color="#f5c77a"
                        speed="6s"
                        style={{
                          '--border-radius': '1.5rem',
                          '--content-padding': '0'
                        } as React.CSSProperties}
                      >
                        {/* Empty children because we just want the border effect here? 
                              Actually StarBorder renders children in .inner-content.
                              Let's use StarBorder as the wrapper for EVERYTHING if possible, 
                              but StarBorder might not animate its own height change smoothly if it re-renders.
                              
                              Let's go with the user's "box opening" request:
                              Structure:
                              Wrapper
                                > AnimateHeight
                                  > Content
                                > Absolute StarBorder (visible if open)
                                > Absolute StaticBorder (visible if closed)
                          */}
                        <div className="w-full h-full" />
                      </StarBorder>
                    </div>

                    {/* Closed State Border (Static) */}
                    <div className={`absolute inset-0 rounded-[1.5rem] border border-white/10 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100 group-hover:bg-neutral-900"}`} />
                  </div>

                  {/* CONTENT LAYER */}
                  <div className="relative z-10 w-full text-left px-8 py-6">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#F3DFA2] drop-shadow-[0_0_10px_rgba(243,223,162,0.4)]" : "text-white"}`}>
                        {faq.question}
                      </h3>
                      {/* +/- Icon */}
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute text-2xl text-white/50"
                        >
                          +
                        </motion.span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute text-2xl text-[#F3DFA2]"
                        >
                          −
                        </motion.span>
                      </div>
                    </div>

                    {/* Animated Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-white/90 leading-relaxed font-light pr-8">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </RevealText>
    </section>
  )
}
