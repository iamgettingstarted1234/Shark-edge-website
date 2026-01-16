"use client";

import { useMemo, CSSProperties, FC } from "react";

interface GradualBlurProps {
    direction?: "top" | "bottom";
    blurLayers?: number;
    maxBlur?: number;
    height?: string;
    className?: string;
}

const GradualBlur: FC<GradualBlurProps> = ({
    direction = "bottom",
    blurLayers = 6,
    maxBlur = 4,
    height = "60px",
    className = "",
}) => {
    const layers = useMemo(() => {
        return Array.from({ length: blurLayers }, (_, i) => {
            const ratio = (i + 1) / blurLayers;
            const blur = ratio * maxBlur;
            const opacity = ratio * 0.5;

            return {
                blur,
                opacity,
                zIndex: i + 1,
                clipPath:
                    direction === "bottom"
                        ? `inset(${(i / blurLayers) * 100}% 0 0 0)`
                        : `inset(0 0 ${(i / blurLayers) * 100}% 0)`,
            };
        });
    }, [blurLayers, maxBlur, direction]);

    const containerStyle: CSSProperties = {
        position: "fixed",
        left: 0,
        right: 0,
        height,
        pointerEvents: "none",
        zIndex: 9999,
        ...(direction === "bottom" ? { bottom: 0 } : { top: 0 }),
    };

    return (
        <div className={className} style={containerStyle}>
            {layers.map((layer, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: `blur(${layer.blur}px)`,
                        WebkitBackdropFilter: `blur(${layer.blur}px)`,
                        clipPath: layer.clipPath,
                        zIndex: layer.zIndex,
                    }}
                />
            ))}
            {/* Gradient overlay for smooth fade */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        direction === "bottom"
                            ? "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))"
                            : "linear-gradient(to top, transparent, rgba(0,0,0,0.3))",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};

export default GradualBlur;
