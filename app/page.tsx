import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"

// Dynamic imports for below-fold components - code splitting
const ClientResults = dynamic(() => import("@/components/sections/client-results").then(mod => ({ default: mod.ClientResults })))
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.TestimonialsSection })))
const ProblemSection = dynamic(() => import("@/components/sections/problem-section").then(mod => ({ default: mod.ProblemSection })))
const SolutionSection = dynamic(() => import("@/components/sections/solution-section").then(mod => ({ default: mod.SolutionSection })))
const ProcessSection = dynamic(() => import("@/components/sections/process-section").then(mod => ({ default: mod.ProcessSection })))
const ResultsSection = dynamic(() => import("@/components/sections/results-section").then(mod => ({ default: mod.ResultsSection })))
const BeforeAfterResults = dynamic(() => import("@/components/sections/before-after-results").then(mod => ({ default: mod.BeforeAfterResults })))
const FaqSection = dynamic(() => import("@/components/sections/faq-section").then(mod => ({ default: mod.FaqSection })))


export default function Home() {
  return (
    <>
      <Hero />
      <ClientResults />
      <TestimonialsSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <BeforeAfterResults />
      <FaqSection />
    </>
  )
}
