"use client";

import React from "react";

interface FeatureCardProps {
    title?: string;
    subtitle?: string;
}

const ProductUpdateContent = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.45)]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/85 transition-colors duration-300 group-hover:text-sky-400"
                >
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M8 20h8" />
                    <path d="M12 18v2" />
                    <path d="M7 8h10" />
                    <path d="M7 12h6" />
                </svg>
            </div>
        </div>
    );
};

const ProductIntegrationContent = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/85 transition-colors duration-300 group-hover:text-emerald-400"
                >
                    <circle cx="6" cy="7" r="2" />
                    <circle cx="18" cy="7" r="2" />
                    <circle cx="12" cy="17" r="2" />
                    <path d="M8 8.5l2.8 6" />
                    <path d="M16 8.5l-2.8 6" />
                    <path d="M8 7h8" />
                </svg>
            </div>
        </div>
    );
};

const ITToolsContent = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.45)]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/85 transition-colors duration-300 group-hover:text-amber-400"
                >
                    <path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4" />
                    <path d="M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5" />
                </svg>
            </div>
        </div>
    );
};

// Separate Cloud Card content component
const CloudCardContent = () => {
    const particles = [
        { size: 2.8, left: 12, duration: 4.8, delay: -0.9 },
        { size: 3.4, left: 28, duration: 5.5, delay: -2.1 },
        { size: 4.2, left: 44, duration: 6.2, delay: -1.3 },
        { size: 2.6, left: 61, duration: 5.1, delay: -3.0 },
        { size: 3.8, left: 77, duration: 5.9, delay: -0.5 },
        { size: 3.1, left: 90, duration: 6.4, delay: -2.6 },
    ];

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative h-full w-full">
                {/* Cloud Background Layer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50" />

                {/* Animated Particles/Nodes Floating Up */}
                <div className="absolute inset-0">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-cyan-400/20"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: `${particle.left}%`,
                                top: "100%",
                                animation: `floatUp ${particle.duration}s linear infinite`,
                                animationDelay: `${particle.delay}s`
                            }}
                        />
                    ))}
                </div>

                {/* Main Cloud Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-white/10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white/80 transition-colors duration-300 group-hover:text-cyan-400"
                            >
                                <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257a3 3 0 0 0-3.758-3.848a5.25 5.25 0 0 0-10.233 2.33A4.5 4.5 0 0 0 2.25 15" />
                            </svg>
                        </div>

                        {/* Status Indicators/Satellites */}
                        <div className="absolute -right-3 -top-3 h-5 w-5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                        </div>

                        {/* Bottom Platform/Shadow */}
                        <div className="absolute -bottom-4 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-sm transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-500/40" />
                    </div>
                </div>

                <style jsx>{`
                    @keyframes floatUp {
                        0% { transform: translateY(0); opacity: 0; }
                        20% { opacity: 0.8; }
                        80% { opacity: 0.8; }
                        100% { transform: translateY(-200px); opacity: 0; }
                    }
                `}</style>
            </div>
        </div>
    );
};

// User-Friendly Content Component
const UserFriendlyContent = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative h-full w-full flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />

                {/* Main Interactive Interface Element */}
                <div className="relative z-10">
                    {/* Button Container */}
                    <div className="relative flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105 group-hover:border-sky-500/30">
                        {/* Play Icon */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.2)] transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                            <span className="text-xs font-semibold text-white/90">Start Scan</span>
                            <span className="text-[10px] text-white/50">One-click execution</span>
                        </div>
                    </div>

                    {/* Cursor Graphic */}
                    <div className="absolute -bottom-6 -right-6 transition-transform duration-500 ease-out group-hover:-translate-x-4 group-hover:-translate-y-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5" className="drop-shadow-lg">
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                        </svg>
                    </div>

                    {/* Success Burst Animation (Hidden by default, could be triggered) */}
                    <div className="absolute -inset-4 z-[-1] rounded-xl border border-sky-500/0 opacity-0 transition-all duration-500 group-hover:border-sky-500/20 group-hover:opacity-100 group-hover:scale-110" />
                </div>
            </div>
        </div>
    );
};

// AI Card Content Component
const AICardContent = () => {
    return (
        <div className="relative h-[200px] w-full flex items-center justify-center overflow-hidden">
            {/* Database Icons Grid */}
            <div className="grid grid-cols-3 gap-8 opacity-20">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded bg-white/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/50"
                        >
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" />
                        </svg>
                    </div>
                ))}
            </div>

            {/* AI Brain Pulse Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Core AI Icon (Brain) */}
                    <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 transition-colors duration-300 group-hover:text-cyan-400">
                            <path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function FeatureCard({
    title = "Built-in Optimizations",
    subtitle = "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals."
}: FeatureCardProps) {
    const isProductUpdate = title.includes("IT Product Update");
    const isProductIntegration = title.includes("Product Integreation");
    const isITTools = title.includes("Some IT Tools For You");
    const isCloudCard = title.includes("Cloud-Executed");
    const isUserFriendly = title.includes("User-Friendly");

    return (
        <div className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 cursor-default">

            <div className="relative mb-6 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-black/20 border border-white/5">
                {isProductUpdate ? <ProductUpdateContent /> : (isProductIntegration ? <ProductIntegrationContent /> : (isITTools ? <ITToolsContent /> : (isCloudCard ? <CloudCardContent /> : (isUserFriendly ? <UserFriendlyContent /> : <AICardContent />))))}
            </div>

            <div className="mt-auto flex flex-col items-start text-left">
                <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50 text-left whitespace-normal">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
