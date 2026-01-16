import Image from "next/image";

export function ProofMessageCard({
    src,
}: {
    src: string;
}) {
    // Premium Gold Theme


    return (
        <div className="group relative rounded-3xl bg-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_rgba(255,215,0,0.3)]">
            {/* GLOW FLARE (Behind) - Removed to fix artifacts */}
            {/* <div className="absolute inset-0..." /> */}

            {/* BORDER HIGHLIGHT - Removed as per request */}
            {/* <div className="absolute inset-0..." /> */}

            {/* CONTENT CONTAINER */}
            <div className="relative overflow-hidden rounded-3xl bg-black z-10">
                {/* IMAGE */}
                <div className="relative">
                    <Image
                        src={src}
                        alt="Client Result"
                        width={600}
                        height={900}
                        className="w-full h-auto object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
}
