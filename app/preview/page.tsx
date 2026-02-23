import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const previewVideoUrl =
  "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/avatars/update/sqlbots1.mp4"

export const metadata: Metadata = {
  title: "SQLBots Preview",
  description: "SQLBots product preview video.",
  openGraph: {
    title: "SQLBots Preview",
    description: "SQLBots product preview video.",
    videos: [
      {
        url: previewVideoUrl,
        type: "video/mp4",
      },
    ],
  },
}

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Header />
      <main className="px-4 py-8 sm:px-8">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-white/10">
          <video
            className="h-full w-full object-cover"
            src={previewVideoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
