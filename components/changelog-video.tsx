"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  src: string
  title: string
}

export function ChangelogVideo({ src, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    const onTimeUpdate = () => {
      if (!video.duration) {
        setProgress(0)
        return
      }
      setProgress((video.currentTime / video.duration) * 100)
    }

    video.addEventListener("timeupdate", onTimeUpdate)
    void video.play().catch(() => setIsPlaying(false))

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
    }
  }, [])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      await video.play()
      setIsPlaying(true)
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
      <div className="group relative aspect-video">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${title} preview video`}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
          Preview
        </div>

        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
          <div className="h-full bg-white/80 transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={togglePlay}
            className="rounded-md border border-white/20 bg-black/65 px-2.5 py-1.5 text-[11px] font-medium text-white transition hover:bg-black/80"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-md border border-white/20 bg-black/65 px-2.5 py-1.5 text-[11px] font-medium text-white transition hover:bg-black/80"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  )
}
