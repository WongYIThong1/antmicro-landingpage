import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-4xl px-5 pb-20 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:pt-20">
        <article className="space-y-8">
          <section>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-tight text-white">
              SQLBots Terms of Service
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/65">Last Updated: February 18, 2026</p>
            <p className="mt-4 text-base leading-8 text-white/75">
              These Terms of Service ("Terms") govern your access to and use of SQLBots (the "Service"), including
              our website, dashboard, APIs, and related tools. By creating an account, purchasing a plan, or using the
              Service, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">1. Acceptance of Terms</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              By purchasing from us or using our Tools, you accept and agree to abide by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">2. Definitions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>
                <strong>"SQLBots" / "We" / "Us"</strong>: The operator of the Service (insert legal entity name:
                <strong> [Company Name]</strong>, address: <strong>[Company Address]</strong>).
              </li>
              <li>
                <strong>"User" / "You"</strong>: Any person or entity that accesses or uses the Service.
              </li>
              <li>
                <strong>"Target"</strong>: Any domain, IP, URL, application, or system submitted for security testing.
              </li>
              <li>
                <strong>"Content"</strong>: Any data you upload, submit, or generate via the Service (including scan
                results).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">3. Authorized Use Only (Strict Rule)</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              SQLBots is provided <strong>only</strong> for lawful security testing, defensive assessment, and research
              on systems you <strong>own</strong> or have <strong>explicit written authorization</strong> to test.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">
              You represent and warrant that for every Target you submit you have valid authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">4. Prohibited Use</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              You agree you will <strong>not</strong>, and will not allow anyone to, use SQLBots to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>test, scan, exploit, dump, or access any system <strong>without authorization</strong></li>
              <li>break any applicable law, regulation, or court order</li>
              <li>harm, disrupt, or overload networks or services (including DoS-like behavior)</li>
              <li>attempt to bypass Service limits, security controls, or authentication</li>
              <li>reverse engineer, decompile, scrape, or copy the Service (except where legally permitted)</li>
              <li>
                resell, sublicense, share, or provide your account/plan to third parties (unless we approve in writing)
              </li>
              <li>upload malware or content designed to compromise SQLBots infrastructure</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              We may suspend or terminate your access immediately if we believe you violated this section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">5. Your Responsibility and Compliance</h2>
            <p className="mt-4 text-base leading-8 text-white/75">You are solely responsible for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>selecting Targets and confirming authorization</li>
              <li>
                complying with all laws (including computer misuse laws, privacy/data protection laws, and
                export/sanctions restrictions)
              </li>
              <li>any actions performed using your account, keys, or tokens</li>
              <li>how you use or disclose results obtained from the Service</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              SQLBots does not provide legal advice, and we do not verify whether you have permission to test a Target.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">6. Accounts and Security</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              You must provide accurate account information and keep your login credentials confidential.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">You agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>use strong passwords and secure your devices</li>
              <li>notify us immediately of suspected compromise</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">You are responsible for all activity under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">7. Service Nature, Results, and No Guarantees</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Security testing is probabilistic. The Service may produce <strong>false positives</strong> or
              <strong> false negatives</strong>, and results depend on Target behavior, defenses (e.g., WAF), network
              conditions, rate limits, and other factors.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">We do <strong>not</strong> guarantee:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>that vulnerabilities will be found</li>
              <li>that results are complete, accurate, or fit for a specific purpose</li>
              <li>uninterrupted availability</li>
              <li>compatibility with every Target</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              The Service is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE."</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">8. Data and Content</h2>
            <h3 className="mt-4 text-lg font-semibold text-white">7.1 Your Content</h3>
            <p className="mt-2 text-base leading-8 text-white/75">
              You retain ownership of your Content. You grant SQLBots a limited license to process your Content to
              provide and secure the Service.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">7.2 Sensitive Data</h3>
            <p className="mt-2 text-base leading-8 text-white/75">
              You should avoid uploading highly sensitive information unless required for authorized testing. You are
              responsible for ensuring you have rights and lawful basis to process any personal data.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">7.3 Logs</h3>
            <p className="mt-2 text-base leading-8 text-white/75">
              We may collect operational logs, usage metrics, and security telemetry to operate, protect, and improve
              the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">9. Plans, Usage Limits, and Fair Use</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Plans may include limits such as requests per second, concurrency, credits, storage, or execution time.
              We may enforce rate limits and fair-use controls to protect platform stability.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">
              Abuse, automation that harms platform performance, or attempts to bypass limits may result in immediate
              suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">10. Payments</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              If you purchase a paid plan, you agree to pay all fees, taxes, and applicable charges. Prices may change
              prospectively, and we will communicate material plan changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">11. No Refunds / All Sales Final</h2>
            <p className="mt-4 text-base leading-8 text-white/75">To the maximum extent permitted by law:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li><strong>All purchases are final.</strong></li>
              <li>
                <strong>We do not offer refunds</strong> for subscriptions, renewals, credits, add-ons, overages,
                partial usage, unused time, mistaken purchases, failed results, or user error.
              </li>
              <li>
                Cancellation stops future renewals but does not create a refund for any current or past billing period.
              </li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              If local consumer law requires a refund in limited cases, we will comply only to the extent required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">12. Chargebacks and Payment Disputes</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Initiating chargebacks or payment disputes without contacting support may result in:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>immediate account suspension</li>
              <li>termination of access</li>
              <li>loss of remaining credits/usage</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              You remain responsible for amounts owed and any fees incurred due to chargebacks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">13. Intellectual Property</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              SQLBots and its software, UI, workflows, trademarks, and documentation are owned by SQLBots or its
              licensors. You receive a limited, non-exclusive, non-transferable right to use the Service during your
              subscription, subject to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">14. Suspension and Termination</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              We may suspend or terminate your account (with or without notice) if:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>we believe you violated these Terms</li>
              <li>we receive abuse reports, legal complaints, or credible evidence of unauthorized testing</li>
              <li>you attempt to harm the Service or other users</li>
              <li>required by law, regulation, or payment processors</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              Upon termination, your right to access the Service ends immediately. We may delete or retain data
              according to our operational needs and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">15. Indemnification (You Cover Your Actions)</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              To the maximum extent permitted by law, you agree to defend, indemnify, and hold harmless SQLBots, its
              owners, employees, contractors, and partners from any claims, damages, losses, liabilities, fines,
              costs, and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>your Targets and your lack of authorization</li>
              <li>your misuse of the Service</li>
              <li>your violation of any law or third-party rights</li>
              <li>your Content and how you use or disclose results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">16. Limitation of Liability</h2>
            <p className="mt-4 text-base leading-8 text-white/75">To the maximum extent permitted by law:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
              <li>SQLBots will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages.</li>
              <li>SQLBots will not be liable for lost profits, lost revenue, lost data, business interruption, or reputational harm.</li>
              <li>
                SQLBots’ total liability for any claim relating to the Service will not exceed the amount you paid to
                SQLBots in the <strong>30 days</strong> before the event giving rise to the claim (or
                <strong> USD $100</strong> if you paid nothing), whichever is greater.
              </li>
            </ul>
            <p className="mt-4 text-base leading-8 text-white/75">
              Some jurisdictions do not allow certain limitations—these limits apply only as far as the law allows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">17. Third-Party Services</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              The Service may rely on third-party infrastructure (cloud providers, payment processors, analytics, etc.).
              We are not responsible for outages or failures caused by third parties outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">18. Changes to These Terms</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              We may update these Terms from time to time. Updated Terms apply when posted (or on a later date if
              stated). Continued use of the Service after updates means you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white">19. Contact</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              For any questions or concerns regarding these Terms, please contact us on Telegram. You can also contact
              us on{" "}
              <a
                href="https://discord.gg/es6vcqA5zS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-offset-4 transition hover:underline"
              >
                Discord
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}

