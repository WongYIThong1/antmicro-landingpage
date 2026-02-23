import type { ChangelogItem, ChangelogRelease } from "@/data/changelog"
import { ChangelogVideo } from "@/components/changelog-video"

type Props = {
  release: ChangelogRelease
}

function ItemList({ items }: { items: ChangelogItem[] }) {
  return (
    <ul className="mt-3 space-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="text-sm font-medium text-white">{item.title}</h3>
          <p className="mt-1 text-sm leading-7 text-white/65">{item.description}</p>
          {item.gifUrl && (
            <div className="mt-3 overflow-hidden rounded-md border border-white/10 bg-black/30">
              <img
                className="w-full"
                src={item.gifUrl}
                alt={`${item.title} preview`}
                draggable={false}
              />
            </div>
          )}
          {item.imageUrl && (
            <div className="mt-3 overflow-hidden rounded-md border border-white/10 bg-black/30">
              <img
                className="w-full"
                src={item.imageUrl}
                alt={`${item.title} preview`}
                draggable={false}
              />
            </div>
          )}
          {item.videoUrl && (
            <ChangelogVideo src={item.videoUrl} title={item.title} />
          )}
        </li>
      ))}
    </ul>
  )
}

export function ChangelogReleaseCard({ release }: Props) {
  return (
    <article className="border-l border-white/15 pl-5 sm:pl-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{release.headline}</h2>
        <p className="mt-1 text-xs text-white/45">
          {release.version} | {release.date}
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Added</p>
          <ItemList items={release.added} />
        </section>

        {release.improved.length > 0 && (
          <details className="group rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
            <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.1em] text-white/55 transition group-open:text-white">
              <span className="inline-flex items-center gap-2">
                <span>Improved</span>
                <span className="text-white/35 transition group-open:rotate-90">{">"}</span>
              </span>
            </summary>
            <ItemList items={release.improved} />
          </details>
        )}

        {release.fixed.length > 0 && (
          <details className="group rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
            <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.1em] text-white/55 transition group-open:text-white">
              <span className="inline-flex items-center gap-2">
                <span>Fixed</span>
                <span className="text-white/35 transition group-open:rotate-90">{">"}</span>
              </span>
            </summary>
            <ItemList items={release.fixed} />
          </details>
        )}
      </div>
    </article>
  )
}
