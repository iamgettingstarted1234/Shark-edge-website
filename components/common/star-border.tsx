"use client"

import React from "react"

// Embedded styles for StarBorder component
const starBorderStyles = `
.star-border-container {
  display: block;
  position: relative;
  border-radius: var(--border-radius, 9999px);
  overflow: hidden;
  isolation: isolate;
}

.border-gradient-bottom {
  position: absolute;
  width: 280%;
  height: 60%;
  bottom: -14px;
  right: -240%;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.9;
  animation: star-movement-bottom linear infinite;
  z-index: 0;
}

.border-gradient-top {
  position: absolute;
  width: 280%;
  height: 60%;
  top: -14px;
  left: -240%;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.9;
  animation: star-movement-top linear infinite;
  z-index: 0;
}

.inner-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius, 9999px);
  background: var(--star-bg, radial-gradient(140% 140% at 50% 0%, #1a1a1a 0%, #000000 75%));
  color: var(--star-color, #f5c77a);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: var(--content-padding, 18px 56px);
  border: 1px solid var(--star-border, color-mix(in srgb, var(--star-color, #f5c77a), transparent 65%));
  box-shadow:
    inset 0 0 20px rgba(245, 199, 122, 0.08),
    0 0 25px rgba(245, 199, 122, 0.15);
  transition: all 0.3s ease;
}

.star-border-container:hover .inner-content {
  background: var(--star-hover-bg, var(--star-bg, radial-gradient(140% 140% at 50% 0%, #1a1a1a 0%, #000000 75%)));
  color: var(--star-hover-text, var(--star-color, #f5c77a));
}

@keyframes star-movement-bottom {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes star-movement-top {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
`

interface StarBorderProps {
  as?: React.ElementType
  className?: string
  color?: string
  speed?: string
  thickness?: number
  children?: React.ReactNode
  style?: React.CSSProperties
  [key: string]: unknown
}

export default function StarBorder({
  as: Component = "button",
  className = "",
  color = "#f5c77a",
  speed = "4s",
  thickness = 1.5,
  children,
  style,
  ...rest
}: StarBorderProps) {
  return (
    <>
      <style>{starBorderStyles}</style>
      <Component
        className={`star-border-container ${className}`}
        style={{
          padding: `${thickness}px`,
          "--star-color": color,
          ...style,
        } as React.CSSProperties}
        {...rest}
      >
        {/* Bottom glow runner */}
        <div
          className="border-gradient-bottom"
          style={{
            background: `radial-gradient(circle,
              var(--star-color) 0%,
              color-mix(in srgb, var(--star-color), transparent 20%) 30%,
              color-mix(in srgb, var(--star-color), transparent 70%) 45%,
              transparent 65%)`,
            animationDuration: speed,
          }}
        />

        {/* Top glow runner */}
        <div
          className="border-gradient-top"
          style={{
            background: `radial-gradient(circle,
              var(--star-color) 0%,
              color-mix(in srgb, var(--star-color), transparent 20%) 30%,
              color-mix(in srgb, var(--star-color), transparent 70%) 45%,
              transparent 65%)`,
            animationDuration: speed,
          }}
        />

        <div className="inner-content">{children}</div>
      </Component>
    </>
  )
}
