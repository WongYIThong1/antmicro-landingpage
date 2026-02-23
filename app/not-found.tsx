import Link from "next/link"
import { ArrowLeft, Home, SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-20">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
            <SearchX className="size-3.5" />
            Error 404
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">Page not found</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
            The page you requested does not exist, was moved, or is currently unavailable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Home className="size-4" />
              Go home
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="size-4" />
              Back to pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
