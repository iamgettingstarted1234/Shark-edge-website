"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';

interface MasonryProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    columns?: number;
    gap?: number;
    duration?: number; // Animation duration in seconds (mapped to ms)
    stagger?: number; // Stagger delay in seconds (mapped to ms)
}

export function Masonry<T>({
    data,
    renderItem,
    columns = 3,
    gap = 24,
    duration = 0.5,
    stagger = 0.05
}: MasonryProps<T>) {
    const [colCount, setColCount] = useState(columns);
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive column logic
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColCount(1);
            else if (width < 1024) setColCount(2);
            else setColCount(columns); // Default/Max
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, [columns]);

    // Height tracking per column
    // Height tracking per column - REMOVED UNUSED STATE

    // We need to measure items to position them absolutely.
    // However, measuring React components before render is hard.
    // React Bits implementation often uses a simpler approach or a measure hook.
    // Given the complexity of implementing exact masonry measurement from scratch in one go without a library like `react-use-measure` or similar, 
    // I will implement a simplified column-bucket approach which allows "CSS-like" masonry but with the requested entrance animations.
    // 
    // actually, the React Bits example seems to use Spring or Framer Motion for the entrance. 
    // I will use a Column-based approach (bucket sort items into columns) and then animate the columns or items in.

    // Actually, to support the "stagger" and "duration" precisely as requested for *individual* items, 
    // we should flatten them but render them in columns.

    // Let's stick to the Bucket approach (Visual Columns) as it's robust and simple.

    const columnBuckets = useMemo(() => {
        const buckets: T[][] = Array.from({ length: colCount }, () => []);
        data.forEach((item, i) => {
            buckets[i % colCount].push(item);
        });
        return buckets;
    }, [data, colCount]);

    return (
        <div
            ref={containerRef}
            className="flex w-full"
            style={{ gap: `${gap}px` }}
        >
            {columnBuckets.map((bucket, colIndex) => (
                <div key={colIndex} className="flex flex-col flex-1" style={{ gap: `${gap}px` }}>
                    {bucket.map((item) => {
                        // Global index for stagger calculation based on original data order if possible, 
                        // or just approximate it.
                        // Let's find the original index in `data`
                        const originalIndex = data.indexOf(item);

                        return (
                            <MasonryItem
                                key={originalIndex}
                                item={item}
                                index={originalIndex}
                                renderItem={renderItem}
                                duration={duration}
                                stagger={stagger}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

function MasonryItem<T>({
    item,
    index,
    renderItem,
    duration,
    stagger
}: {
    item: T;
    index: number;
    renderItem: (item: T, index: number) => React.ReactNode;
    duration: number;
    stagger: number;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // Using simple CSS transition or Spring for entrance
    // Requested: duration=0.8, stagger=0.01

    const delay = index * stagger;

    return (
        <div
            className="relative hover:z-50"
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(50px)',
                transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
            }}
        >
            {renderItem(item, index)}
        </div>
    );
}
