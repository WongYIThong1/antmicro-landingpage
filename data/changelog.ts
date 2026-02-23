export type ChangelogItem = {
  title: string
  description: string
  gifUrl?: string
  imageUrl?: string
  videoUrl?: string
}

export type ChangelogRelease = {
  headline: string
  version: string
  date: string
  improved: ChangelogItem[]
  added: ChangelogItem[]
  fixed: ChangelogItem[]
}

export const releases: ChangelogRelease[] = [
  {
    headline: "VulnBot",
    version: "VULNBOT v1.0.0",
    date: "February 20, 2026",
    improved: [],
    added: [
      {
        title: "Features",
        description:
          "High-Speed Bulk Vulnerability Scanner: Import a URL file and scan targets in bulk with SQL error fingerprint detection for MySQL / MSSQL / Oracle / PostgreSQL, including multi-vendor WAF detection. Performance: up to 9k+ RPM and 2k+ WPM with 50 threads (environment dependent).",
      },
      {
        title: "Advanced Scanner Settings",
        description:
          "Configurable Threads, Timeout, and WAF Detect options. Built-in retry logic and smart concurrency limiting improve stability during long or high-load scans.",
      },
      {
        title: "Live Terminal UI",
        description:
          "Real-time dashboard shows processed targets, RPM, WPM, vulnerable hits, database hit counters plus WAF hits, and progress with rotating hints. Rendering is optimized to reduce flicker and keep stats readable at high throughput.",
      },
      {
        title: "VulnBot Preview",
        description: "Product preview video.",
        videoUrl:
          "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/avatars/update/vulnbot.mp4",
      },
    ],
    fixed: [],
  },
  {
    headline: "SmartClean & Faster Scanning",
    version: "v1.0.1",
    date: "February 19, 2026",
    improved: [
      {
        title: "Faster Dumper Performance",
        description:
          "Database extraction speed has been improved for faster and more stable dump execution.",
      },
      {
        title: "Faster Injection Engine",
        description:
          "Injection scanning now runs faster and more smoothly during active testing sessions.",
      },
      {
        title: "Updated Proxy Infrastructure",
        description:
          "Proxy handling has been upgraded to improve connection stability and overall success rates.",
      },
      {
        title: "Smoother Task UI Performance",
        description:
          "Active task rendering has been optimized to reduce interface lag and improve runtime responsiveness.",
      },
      {
        title: "Cleaner Plan Display",
        description:
          "Subscription plans (Free / Pro / Pro+) now display consistently across Dashboard and Settings.",
      },
    ],
    added: [
      {
        title: "Smart Clean",
        description:
          "Dumped data is now cleaned automatically by removing bad lines, empty rows, broken text, garbled characters, and extra spacing.",
      },
      {
        title: "Advanced Dump Sorting",
        description:
          "Dump results can now be sorted by rows or status, with sorting preferences remembered automatically.",
        gifUrl:
          "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/avatars/update/sorting.gif",
      },
      {
        title: "Smarter Task Page Recovery",
        description:
          "Task pages now reconnect and reload automatically when returning after inactivity.",
      },
      {
        title: "More Reliable Tasks Loading",
        description:
          "The Tasks page now includes retry options, clearer loading states, and improved syncing under slow server conditions.",
      },
    ],
    fixed: [
      {
        title: "Fixed Injection Testing Skipping 70% Urls",
        description:
          "We fixed a bug that made the scan skip about 70% of links. It now checks almost all links.",
      },
      {
        title: "Fixed Dump Row Skipping Issue",
        description:
          "Resolved an issue where large database dumps could skip rows, resulting in more complete extraction output.",
      },
      {
        title: "Fixed Subscription Expiry Display",
        description:
          "Corrected cases where expiration dates were missing or displayed incorrectly.",
      },
      {
        title: "Fixed Upgrade/Settings Plan Detection",
        description:
          "Resolved inconsistent plan recognition that caused incorrect UI behavior in Upgrade and Settings pages.",
      },
    ],
  },
  {
    headline: "Timeout AI & Long-Task Alerts",
    version: "v1.0.0",
    date: "February 19, 2026",
    improved: [
      {
        title: "Dumper Speed Optimization",
        description:
          "Enhanced extraction performance for faster database dumping and improved stability on large databases.",
      },
    ],
    added: [
      {
        title: "Timeout AI Engine",
        description:
          "New AI-driven timeout adjustment system that automatically optimizes request timing to improve dumping success and help extract databases more completely.",
      },
      {
        title: "Long Task Detection Notice",
        description:
          "SQLBots now warns when a target domain may require extended processing time, so users know in advance that the workflow may run longer.",
      },
    ],
    fixed: [],
  },
]
