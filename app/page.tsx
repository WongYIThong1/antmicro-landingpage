"use client";

import { useEffect, useState } from "react";
import { MonitorCheck, Wrench } from "lucide-react";
import { GlobeDemo } from "@/components/ui/globe-demo";
import { TypingAnimation } from "@/registry/magicui/typing-animation";
import { FeatureCard } from "@/components/optimization-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);
  const dealerLogos = [
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Autocount", src: "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/public/autocount_logo.webp" },
    { name: "Hewlett Packard Enterprise", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hewlett_Packard_Enterprise_logo_2025_expanded.svg" },
    { name: "Bitdefender", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitdefender_logo.svg" },
    { name: "HP", src: "https://commons.wikimedia.org/wiki/Special:FilePath/HP_logo_2025.svg" },
    { name: "Lenovo", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lenovo_logo_2015.svg" },
    { name: "Dell", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dell_logo_2021.svg" },
    { name: "Ubiquiti", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ubiquiti_Logo_2023.svg" },
    { name: "TP-Link", src: "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/public/TP-Link-Logo.wine.png" },
  ];

  useEffect(() => {
    let cancelled = false;
    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const preloadGlobeBundle = async () => {
      try {
        await import("@/components/ui/globe");
      } catch {
        // Ignore preloading errors and let runtime lazy-load when needed.
      }
    };

    const runPreload = () => {
      if (!cancelled) {
        void preloadGlobeBundle();
      }
    };

    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(() => {
        runPreload();
      }, { timeout: 1200 });
    } else {
      timeoutHandle = window.setTimeout(runPreload, 220);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  useEffect(() => {
    if (!typingDone) {
      return;
    }
    setShowGlobe(true);
  }, [typingDone]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:px-20 lg:pt-20">
        <section id="page1" className="w-full min-h-screen lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(480px,0.8fr)] lg:items-start lg:gap-8">
          <div className="w-full max-w-4xl pt-6 md:pt-8">
            <h1 className="mt-3 text-[clamp(1.6rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              <TypingAnimation animationKey="hero-headline-v3" onComplete={() => setTypingDone(true)}>
                Better IT support for a smoother workday and total peace of mind.
              </TypingAnimation>
            </h1>

            <div className="mt-4 space-y-2.5 text-[clamp(0.88rem,1.05vw,0.98rem)] leading-6 text-white/72">
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 20h8" />
                  <path d="M12 18v2" />
                  <path d="M7 8h10" />
                  <path d="M7 12h6" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">IT Product Showcase</span> — Discover tools that power your workflow.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M10 4v4M2 8h20M6 4v4" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">Smart Product Integration</span> — See how connected tools build stronger systems.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4" />
                  <path d="M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">Essential IT Tools</span> — Practical solutions you can start using today.
                </span>
              </p>
            </div>

          </div>

          <aside
            className="mt-8 w-full max-w-[560px] transform-gpu transition-all duration-700 ease-out lg:mt-0 lg:translate-x-10 xl:translate-x-16"
          >
            <div
              className={`transition-all duration-700 ease-out ${showGlobe ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
            >
              {showGlobe ? (
                <GlobeDemo />
              ) : (
                <div className="h-[360px] w-full sm:h-[420px] lg:h-[460px]" aria-hidden />
              )}
            </div>
          </aside>
        </section>

        <section className="w-full border-b border-white/5 pt-6 pb-24" id="page2">
          <div className="mx-auto w-full max-w-7xl px-4 text-center lg:px-8">
            <p className="text-[clamp(1.4rem,2.8vw,2rem)] font-semibold leading-tight tracking-tight text-white">
              Product &amp; Authorised Dealer
            </p>
            <div className="logo-marquee-wrap mt-10">
              <div className="logo-marquee-track">
                {[...dealerLogos, ...dealerLogos].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="logo-cloud-item flex h-14 min-w-[150px] items-center justify-center px-4"
                  >
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className={`logo-cloud-image w-auto object-contain ${brand.name === "TP-Link" ? "max-h-14" : brand.name === "Autocount" ? "max-h-11" : "max-h-7"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-32 w-full max-w-7xl px-4 text-center">
            <p className="inline-flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight tracking-tight text-white">
                Why AntsMicro?
              </span>
              <span className="text-[clamp(1rem,1.5vw,1.2rem)] font-normal text-white/60">
                Reliable IT products, smart integrations, and practical tools for modern businesses.
              </span>
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
              <FeatureCard
                title="IT Product Update!"
                subtitle="Explore powerful IT products and learn how they improve your work"
              />
              <FeatureCard
                title="Product Integreation"
                subtitle="Discover how smart product integration creates a more powerful system."
              />
              <FeatureCard
                title="Some IT Tools For You"
                subtitle="Essential IT tools for your workflow"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-24 border-b border-white/5">
          <div className="mx-auto w-full max-w-7xl px-4 text-center lg:px-8">
            <h2 className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold tracking-tight text-white">
              Services
            </h2>
            <div className="mt-12 flex flex-col items-start gap-8 text-left md:flex-row md:items-center">
              <div className="relative flex h-48 w-48 shrink-0 items-center justify-center text-white md:h-56 md:w-56">
                <span className="absolute h-48 w-48 rounded-full border border-white/10 bg-white/[0.02] antivirus-soft-pulse md:h-56 md:w-56" />
                <span className="absolute h-44 w-44 rounded-full border border-white/10 md:h-52 md:w-52" />
                <span className="relative z-10 inline-flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md antivirus-shield-float md:h-32 md:w-32">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="82" height="82" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 5-3.5 7.8-7 9-3.5-1.2-7-4-7-9V6z" />
                    <path d="M9 12l2 2l4-4" />
                  </svg>
                </span>
              </div>
              <div className="max-w-4xl">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Advanced Antivirus Protection
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Secure your system with intelligent antivirus protection, continuous security scanning, and automatic threat removal that keeps your files, applications, and personal data safe from modern cyber threats.
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-start gap-8 text-left md:flex-row-reverse md:items-center">
              <div className="relative flex h-48 w-48 shrink-0 items-center justify-center text-white md:h-56 md:w-56">
                <span className="absolute h-48 w-48 rounded-full border border-white/10 bg-white/[0.02] antivirus-soft-pulse md:h-56 md:w-56" />
                <span className="absolute h-44 w-44 rounded-full border border-white/10 md:h-52 md:w-52" />
                <span className="relative z-10 inline-flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md antivirus-shield-float md:h-32 md:w-32">
                  <MonitorCheck className="h-[82px] w-[82px]" strokeWidth={1.8} />
                </span>
              </div>
              <div className="max-w-4xl">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Remote Monitoring &amp; Support
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Monitor devices in real time, detect system issues early, and remotely resolve problems such as application errors, system crashes, or Outlook not opening — ensuring your business stays running smoothly.
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-start gap-8 text-left md:flex-row md:items-center">
              <div className="relative flex h-48 w-48 shrink-0 items-center justify-center text-white md:h-56 md:w-56">
                <span className="absolute h-48 w-48 rounded-full border border-white/10 bg-white/[0.02] antivirus-soft-pulse md:h-56 md:w-56" />
                <span className="absolute h-44 w-44 rounded-full border border-white/10 md:h-52 md:w-52" />
                <span className="relative z-10 inline-flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md antivirus-shield-float md:h-32 md:w-32">
                  <Wrench className="h-[82px] w-[82px]" strokeWidth={1.8} />
                </span>
              </div>
              <div className="max-w-4xl">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Professional Installation Service
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Assist with installing and configuring essential software, security tools, and business systems to ensure smooth deployment and reliable operation from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-20">
          <div className="mx-auto w-full max-w-7xl px-4 text-center lg:px-8">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight text-white">
              Get started with our complete IT solutions
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              From antivirus protection to remote support and professional setup, we deliver end-to-end IT services that keep your business secure, stable, and ready to grow.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/antscom/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(255,255,255,0.22)] transition hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_14px_30px_rgba(255,255,255,0.28)]"
              >
                Contact us
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/35 bg-white/[0.04] px-6 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.09] hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes antivirus-soft-pulse {
          0% { opacity: 0.28; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.03); }
          100% { opacity: 0.28; transform: scale(1); }
        }
        @keyframes antivirus-shield-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        .antivirus-soft-pulse {
          animation: antivirus-soft-pulse 4s ease-in-out infinite;
        }
        .antivirus-shield-float {
          animation: antivirus-shield-float 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .antivirus-soft-pulse,
          .antivirus-shield-float {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
