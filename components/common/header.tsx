"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { GlowButton } from "@/components/ui/glow-button"

export const Header = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mt-5 flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-md backdrop-saturate-180 px-8 py-3 shadow-lg shadow-black/20 ring-1 ring-white/10 ring-inset hover:shadow-xl hover:shadow-black/30 transition-all duration-500">

          {/* LOGO — BIGGER + BOLDER */}
          <Link
            href="/"
            className="group flex items-center"
            onClick={(e) => {
              // If already on homepage, scroll to top instead of navigation
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span
              className="
      text-xl md:text-2xl lg:text-[26px]
      font-extrabold
      tracking-tight

      text-white
      transition-colors duration-300 ease-out

      group-hover:text-white/90
    "
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Shark Edge
            </span>
          </Link>

          {/* CENTER NAV — BIGGER + BOLDER */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-10">
              {[
                { label: "Clients", href: "/testimonials" },
                { label: "Process", href: "/process" },
                { label: "Results", href: "/results" },
                { label: "FAQs", href: "/faq" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm md:text-base font-bold text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fde68a] hover:to-[#facc15] transition-all cursor-pointer tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* APPLY BUTTON — BIGGER + STRONGER */}
          <div className="hidden md:flex">
            <Link href="https://calendly.com/sharkedge/30min" target="_blank" rel="noopener noreferrer">
              <GlowButton>
                Let&apos;s Talk
              </GlowButton>
            </Link>
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
