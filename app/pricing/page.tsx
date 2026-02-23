import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Explore SQLBots",
    cta: "Get Started",
    ctaHref: "https://discord.gg/es6vcqA5zS",
    highlight: false,
    unavailable: false,
    badge: "Starter",
    highlights: ["0 Slots", "0 Credits", "0 Storage"],
  },
  {
    name: "Pro",
    price: "$160",
    originalPrice: "$250",
    discountLabel: "Save $90",
    period: "/month",
    description: "Advanced automation",
    cta: "Upgrade To Pro",
    ctaHref: "https://discord.gg/es6vcqA5zS",
    highlight: true,
    unavailable: false,
    badge: "Most Popular",
    highlights: [
      "3 Task Slots",
      "2000 Credits",
      "5GB Storage",
      "Unlimited Scans & Dumps",
      "Unlimited Proxy Usage",
    ],
  },
  {
    name: "Pro+",
    price: "$400",
    period: "/month",
    description: "Maximum performance",
    cta: "Unavailable",
    ctaHref: "https://discord.gg/es6vcqA5zS",
    unavailable: true,
    highlight: false,
    badge: "Scale",
    highlights: [
      "6 Task Slots",
      "6000 Credits",
      "10GB Storage",
      "Unlimited Scans & Dumps",
      "Unlimited Proxy Usage",
    ],
  },
]

const compareRows = [
  { feature: "Task Slots", free: "0", pro: "3", proPlus: "6" },
  { feature: "Credits", free: "0", pro: "2000", proPlus: "6000" },
  { feature: "Storage", free: "0", pro: "5GB", proPlus: "10GB" },
  { feature: "Unlimited Scans", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Unlimited Dumps", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Unlimited Proxy Usages", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Evasion Engine", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "AntiBan Engine", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "AI Preset Analysis", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Payload Engine", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "AI Website Classification", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Dehasher", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Antipublic", free: "-", pro: "Yes", proPlus: "Yes" },
  { feature: "Fastest Access To New AI Engine", free: "-", pro: "-", proPlus: "Yes" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:pt-20">
        <section className="border-b border-white/10 pb-14">
          <p className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
            Pricing
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.03] tracking-tight text-white">
            Clean Pricing, Clear Capacity
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Start free, upgrade when you need more workflows, credits, and automation engines.
          </p>
        </section>

        <section className="pt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`border py-0 text-white shadow-none ${
                  plan.highlight ? "border-white/30 bg-white/[0.06]" : "border-white/12 bg-transparent"
                } ${plan.unavailable ? "opacity-75" : ""}`}
              >
                <CardHeader className="gap-3 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{plan.name}</p>
                    <span className="rounded-full border border-white/15 bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      {plan.badge}
                    </span>
                  </div>
                  <CardTitle className="flex items-end gap-1 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="pb-1 text-sm font-normal text-white/50">{plan.period}</span>
                    {plan.originalPrice ? (
                      <span className="pb-1 pl-2 text-sm font-normal text-white/35 line-through">{plan.originalPrice}</span>
                    ) : null}
                  </CardTitle>
                  <p className="text-sm text-white/65">{plan.description}</p>
                  {plan.discountLabel ? (
                    <span className="w-fit rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                      {plan.discountLabel}
                    </span>
                  ) : null}
                </CardHeader>

                <CardContent className="px-6 pb-0">
                  {plan.unavailable ? (
                    <span className="inline-flex h-10 w-full cursor-not-allowed items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] text-sm font-medium text-white/45">
                      {plan.cta}
                    </span>
                  ) : (
                    <a
                      href={plan.ctaHref}
                      className={`inline-flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition ${
                        plan.highlight
                          ? "bg-white text-black hover:bg-white/90"
                          : "border border-white/20 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-5">
                  <ul className="w-full space-y-2 border-t border-white/10 pt-4">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Full feature comparison</h2>
            <p className="text-sm text-white/55">Detailed capabilities for Free, Pro, and Pro+.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/12 text-white/55">
                  <th className="py-3 pr-3 font-medium">Feature</th>
                  <th className="px-3 py-3 font-medium">Free</th>
                  <th className="px-3 py-3 font-medium">Pro</th>
                  <th className="px-3 py-3 font-medium">Pro+</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/8 last:border-0">
                    <td className="py-3 pr-3 text-white/75">{row.feature}</td>
                    <td className="px-3 py-3 text-white/70">{row.free}</td>
                    <td className="px-3 py-3 text-white/80">{row.pro}</td>
                    <td className="px-3 py-3 text-white/80">{row.proPlus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
