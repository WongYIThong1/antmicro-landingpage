"use client";

import React from "react";

interface EngineCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    href?: string;
}

export function EngineCard({ title, subtitle, icon, href = "#" }: EngineCardProps) {
    return (
        <a
            href={href}
            className="group flex flex-col items-start justify-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/20"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors duration-200 group-hover:bg-sky-500/10 group-hover:text-sky-400">
                {icon}
            </div>

            <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white/90">
                    {title}
                    <svg viewBox="0 0 16 16" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60">
                        <path d="M5.75 2H14v8.25M14 2L2 14" />
                    </svg>
                </span>
                <span className="text-[13px] leading-relaxed text-white/50">
                    {subtitle}
                </span>
            </div>
        </a>
    );
}

// Keep the original FeatureCard for Page 2
import { FeatureCard } from "./optimization-card";
export { FeatureCard };
