"use client";

import React from "react";

export function HubLines() {
    const THEME_COLOR = "#0ea5e9"; // A professional sky blue theme color

    const paths = [
        // Left: one main line then split to 3 branches
        { d: "M 50 50 L 44 50 L 40 50 Q 39 50 39 49 L 39 21 Q 39 20 38 20 L 35 20", id: "tl", delay: "0s", left: "35%", top: "20%" },
        { d: "M 50 50 L 44 50 L 35 50", id: "ml", delay: "-0.8s", left: "35%", top: "50%" },
        { d: "M 50 50 L 44 50 L 40 50 Q 39 50 39 51 L 39 79 Q 39 80 38 80 L 35 80", id: "bl", delay: "-2.5s", left: "35%", top: "80%" },
        // Right: one main line then split to 3 branches
        { d: "M 50 50 L 56 50 L 60 50 Q 61 50 61 49 L 61 21 Q 61 20 62 20 L 65 20", id: "tr", delay: "-1.25s", left: "65%", top: "20%" },
        { d: "M 50 50 L 56 50 L 65 50", id: "mr", delay: "-2.1s", left: "65%", top: "50%" },
        { d: "M 50 50 L 56 50 L 60 50 Q 61 50 61 51 L 61 79 Q 61 80 62 80 L 65 80", id: "br", delay: "-3.75s", left: "65%", top: "80%" }
    ];

    return (
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            {/* Connector spans for each line */}
            {paths.map((item) => (
                <span
                    key={`connector-${item.id}`}
                    data-connector="true"
                    className="absolute z-20"
                    style={{
                        left: item.left,
                        top: item.top,
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: THEME_COLOR,
                        boxShadow: `0 0 10px ${THEME_COLOR}`,
                        transform: 'translate(-50%, -50%)',
                        display: 'block'
                    }}
                />
            ))}

            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" overflow="visible">
                {paths.map((item) => (
                    <path
                        key={item.id}
                        d={item.d}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.14)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>
        </div>
    );
}
