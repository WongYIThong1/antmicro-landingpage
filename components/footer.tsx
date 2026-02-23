export function Footer() {
  const brandLogoUrl = "https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/public/wpf178136e_05_06-removebg-preview.png"

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 font-[var(--font-display)] text-base font-semibold tracking-tight text-white">
              <img src={brandLogoUrl} alt="AntsMicro logo" className="h-6 w-auto object-contain" />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
              Complete IT solutions including antivirus protection, remote monitoring, and professional installation services.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="/#page1" className="transition hover:text-white">Overview</a></li>
              <li><a href="/#page2" className="transition hover:text-white">Partners</a></li>
              <li><a href="/#services" className="transition hover:text-white">Services</a></li>
              <li><a href="/#cta" className="transition hover:text-white">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Support</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="https://www.facebook.com/antscom/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Contact us</a></li>
              <li className="pt-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">Call us</p>
                  <p className="leading-6">
                    <a href="tel:+6581238106" className="transition hover:text-white">Singapore +65 8123 8106</a>
                    <br />
                    <a href="tel:+6073612383" className="transition hover:text-white">Malaysia +6 07 361 2383</a>
                  </p>
                </div>
              </li>
              <li className="pt-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">Email us</p>
                  <p className="leading-6">
                    <a href="mailto:welcome@ants.com.sg" className="transition hover:text-white">welcome@ants.com.sg</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Built for reliable business IT support.</p>
        </div>
      </div>
    </footer>
  )
}
