"use client"

import { useEffect, useMemo, useState } from "react"

type SectionProgressDotsProps = {
  sections: { id: string; label: string }[]
}

export function SectionProgressDots({ sections }: SectionProgressDotsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const updateActive = () => {
      const mark = window.innerHeight * 0.35
      let current = elements[0].id

      for (const el of elements) {
        const top = el.getBoundingClientRect().top
        if (top <= mark) {
          current = el.id
        } else {
          break
        }
      }

      setActiveId(current)
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("resize", updateActive)
    return () => {
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("resize", updateActive)
    }
  }, [sectionIds])

  const activeIndex = Math.max(0, sections.findIndex((section) => section.id === activeId))

  return (
    <nav aria-label="Reading progress" className="relative pl-2">
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-[11px] top-1 w-px bg-white/20"
      />
      {sections.map((section, index) => {
        const isActive = section.id === activeId
        const isCompleted = index < activeIndex
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.label}
            className="group relative flex items-center gap-3 py-2"
          >
            <span
              className={`relative z-[1] h-5 w-5 rounded-full border transition ${
                isActive
                  ? "border-cyan-300 bg-cyan-300 shadow-[0_0_0_4px_rgba(34,211,238,0.18)]"
                  : isCompleted
                    ? "border-white/70 bg-white/70"
                    : "border-white/25 bg-background group-hover:border-white/55"
              }`}
            />
            <span
              className={`text-xs transition ${
                isActive
                  ? "font-semibold text-white"
                  : isCompleted
                    ? "text-white/75"
                    : "text-white/50 group-hover:text-white/80"
              }`}
            >
              {section.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
