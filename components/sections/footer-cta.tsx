"use client"

import Link from "next/link"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { PremiumText } from "@/components/ui/premium-text"


const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sharkedge.media/",
    className: "hover:text-[#E4405F]", // Pink/Red
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sharkedge-media-104a2734b/",
    className: "hover:text-[#0077b5]", // Blue
  },
]

export function FooterCTA() {
  return (
    <footer id="discovery" className="relative w-full overflow-hidden bg-black pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Background Glow - Subtle, breathing gold gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#f5c77a]/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

      {/* Top Fade ensuring no hard cut-off if glow reaches top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-2">
            <span className="block">
              <PremiumText
                text="Turn your brand"
                as="span"
                triggerOnce={true}
                className="text-white"
              />
            </span>
            <span className="block">
              <PremiumText
                text="to the next level."
                as="span"
                delay={0.2}
                triggerOnce={true}
                className="text-[#f5c77a] italic"
                style={{ fontFamily: 'var(--font-instrument-italic)' }}
              />
            </span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/60 mb-10 font-light tracking-wide max-w-xl mx-auto">
          Need more Clarity? Get in Touch.
        </p>

        {/* Premium Button */}
        <Link
          href="https://calendly.com/sharkedge/30min"
          target="_blank"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#f5c77a] text-black rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,199,122,0.3)]"
        >
          <span>Book a Discovery Call</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>

          {/* Button Shine overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-shine" />
          </div>
        </Link>

        {/* Separator / Footer Links */}
        <div className="mt-24 md:mt-32 w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">
          <div>© Shark Edge Media. All rights reserved.</div>

          <div className="flex gap-6 text-xl text-white/80">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon === FaInstagram ? 'Instagram' : 'LinkedIn'}`}
                className={`${social.className} transition-colors duration-300`}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes shine {
            0% { transform: skewX(-20deg) translateX(-150%); }
            100% { transform: skewX(-20deg) translateX(300%); }
        }
        :global(.group:hover .group-hover\:animate-shine) {
            animation: shine 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer >
  )
}
