"use client";


import { RevealText } from "@/components/common/reveal-text";
import { SectionBadge } from "@/components/ui/section-badge";
import { PremiumText } from "@/components/ui/premium-text";
import { ProofMessageCard } from "@/components/common/proof-message-card";
import { Masonry } from "@/components/ui/masonry";


const resultsData = [
    { src: "/results/result-01.webp" },
    { src: "/results/result-02.webp" },
    { src: "/results/result-03.webp" },
    { src: "/results/result-04.webp" },
    { src: "/results/result-05.webp" },
    { src: "/results/result-06.webp" },
    { src: "/results/result-07.webp" },
    { src: "/results/result-08.webp" },
    { src: "/results/result-09.webp" },
];


export function ClientResults() {

    return (
        <section id="clients" className="relative py-16 md:py-28 px-4 overflow-hidden">
            <div className="mx-auto max-w-6xl flex flex-col items-center gap-14">


                {/* Section Heading */}
                <div className="text-center mb-16 relative flex flex-col items-center">

                    {/* Eyebrow */}
                    <RevealText>
                        <SectionBadge className="mb-6">
                            PROOF OF WORK
                        </SectionBadge>
                    </RevealText>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        <PremiumText
                            text="Here's what our Clients say"
                            as="span"
                            className="bg-gradient-to-r from-white via-white to-[#f5c77a] bg-clip-text text-transparent"
                        />
                    </h2>

                    {/* Subheading */}
                    <div className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
                        <PremiumText
                            text="Unfiltered feedback and real screenshots from founders, coaches, and creators who trusted SharkEdge with their content."
                            as="p"
                            delay={0.2}
                        />
                    </div>

                </div>


                {/* Masonry screenshots */}
                <div className="relative w-full">
                    <Masonry
                        data={resultsData}
                        duration={0.8}
                        stagger={0.05} // Increased slightly from 0.01 for better visibility of effect, can tweak
                        gap={32}
                        renderItem={(item, index) => (
                            <ProofMessageCard
                                key={index}
                                src={item.src}
                            />
                        )}
                    />

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
                </div>

            </div>
        </section>
    );
}
