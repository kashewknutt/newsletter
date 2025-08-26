import React from "react";

// Refresh Kid brand palette
const RK = {
  teal: "#0E7C86",
  peach: "#F6C9A1",
  cream: "#FFF7F1",
  charcoal: "#1F2A30",
  aqua: "#C8F3F7",
  mint: "#E8F6F8",
};

export default function NewsletterPreview() {
  return (
    <div className="min-h-screen bg-[--rk-bg] py-10" style={{
      // soft gradient paper background
      ['--rk-bg' as any]: `linear-gradient(180deg, ${RK.cream} 0%, #ffffff 35%, ${RK.aqua} 100%)`,
    }}>
      <div className="mx-auto w-full max-w-3xl px-4">
        {/* Header */}
        <header className="rounded-2xl border border-[rgba(31,42,48,.08)] bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[.2em] text-[color:var(--rk-charcoal)]/60" style={{['--rk-charcoal' as any]: RK.charcoal}}>The Refresh Kid Insider</div>
              <div className="mt-2 h-1 w-24 rounded-full bg-[color:var(--rk-teal)]" style={{['--rk-teal' as any]: RK.teal}} />
            </div>
            <a className="rounded-md bg-[color:var(--rk-teal)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110" style={{['--rk-teal' as any]: RK.teal}} href="#">Book a Free Assessment</a>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-[rgba(31,42,48,.08)] shadow-sm">
          <div
            className="p-6 md:p-8"
            style={{
              background: `linear-gradient(135deg, ${RK.teal} 0%, ${RK.peach} 100%)`,
              color: "white",
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
              <span className="h-2 w-2 rounded-full bg-white"></span> Big Update
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight">U.S.-Certified Teachers for <em>All</em> AP Courses</h2>
            <p className="mt-2 max-w-2xl text-white/90">
              From AP Biology to AP Computer Science, your child can learn from experienced U.S. school teachers—live, online, and aligned to the school curriculum.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#" className="rounded-md bg-white/95 px-4 py-2 text-sm font-bold text-[color:var(--rk-charcoal)] shadow-sm transition hover:bg-white" style={{['--rk-charcoal' as any]: RK.charcoal}}>See Courses</a>
              <a href="#" className="rounded-md bg-black/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/20">Meet Our U.S. Teachers</a>
            </div>
          </div>
        </section>

        {/* Teacher & Student of the Week */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
            <div className="h-1 w-full bg-gradient-to-r from-[color:var(--rk-teal)] to-[color:var(--rk-peach)]" style={{['--rk-teal' as any]: RK.teal, ['--rk-peach' as any]: RK.peach}} />
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Teacher of the Week</h3>
              <div className="mt-4 flex gap-3">
                <img src="https://via.placeholder.com/64" alt="Teacher" className="h-14 w-14 rounded-full object-cover ring-4 ring-[color:var(--rk-mint)]" style={{['--rk-mint' as any]: RK.mint}} />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Oliver M. — AP English & SAT ELA (U.S. Certified)</p>
                  <p className="text-sm text-[color:var(--rk-charcoal)]/70">Fun fact: loves Chicago deep-dish 🍕</p>
                  <button className="mt-3 rounded-md bg-[color:var(--rk-teal)] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110" style={{['--rk-teal' as any]: RK.teal}}>See Oliver’s bio</button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
            <div className="h-1 w-full bg-gradient-to-r from-[color:var(--rk-peach)] to-[color:var(--rk-teal)]" style={{['--rk-teal' as any]: RK.teal, ['--rk-peach' as any]: RK.peach}} />
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Student of the Week</h3>
              <div className="mt-4 flex gap-3">
                <img src="https://via.placeholder.com/64" alt="Student" className="h-14 w-14 rounded-full object-cover ring-4 ring-[color:var(--rk-peach)]/60" style={{['--rk-peach' as any]: RK.peach}} />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Aditya K. — +140 points on SAT practice in 4 weeks 🎉</p>
                  <p className="text-sm text-[color:var(--rk-charcoal)]/70">“The reading strategies finally clicked!”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Dates */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
          <div className="h-1 w-full bg-[color:var(--rk-teal)]" style={{['--rk-teal' as any]: RK.teal}} />
          <div className="p-6">
            <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Upcoming Dates (Next 2 Weeks)</h3>
            <ul className="mt-3 divide-y rounded-xl border bg-[color:var(--rk-cream)]/60" style={{['--rk-cream' as any]: RK.cream}}>
              <li className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-[color:var(--rk-charcoal)]/70" style={{['--rk-charcoal' as any]: RK.charcoal}}>MathCounts Registration</span>
                <span className="rounded-full bg-[color:var(--rk-mint)] px-2 py-1 text-xs font-bold text-[color:var(--rk-teal)]" style={{['--rk-mint' as any]: RK.mint, ['--rk-teal' as any]: RK.teal}}>Sept 12</span>
              </li>
              <li className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-[color:var(--rk-charcoal)]/70" style={{['--rk-charcoal' as any]: RK.charcoal}}>AMC 8/10/12 Practice Window</span>
                <span className="rounded-full bg-[color:var(--rk-peach)]/40 px-2 py-1 text-xs font-bold text-[color:var(--rk-charcoal)]" style={{['--rk-peach' as any]: RK.peach, ['--rk-charcoal' as any]: RK.charcoal}}>Sept 13–20</span>
              </li>
              <li className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-[color:var(--rk-charcoal)]/70" style={{['--rk-charcoal' as any]: RK.charcoal}}>SAT / ACT Test Day</span>
                <span className="rounded-full bg-[color:var(--rk-teal)]/10 px-2 py-1 text-xs font-bold text-[color:var(--rk-teal)]" style={{['--rk-teal' as any]: RK.teal}}>Oct 4</span>
              </li>
            </ul>
            <a className="mt-4 inline-block rounded-md bg-[color:var(--rk-teal)] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110" style={{['--rk-teal' as any]: RK.teal}} href="#">See full calendar</a>
          </div>
        </section>

        {/* Content Corner */}
        <section className="mt-6 rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[rgba(31,42,48,.08)] p-6">
            <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Watch & Learn (60‑Second Wins)</h3>
            <span className="rounded-full bg-[color:var(--rk-peach)]/60 px-3 py-1 text-xs font-bold text-[color:var(--rk-charcoal)]" style={{['--rk-peach' as any]: RK.peach, ['--rk-charcoal' as any]: RK.charcoal}}>New</span>
          </div>
          <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
            {["AP Physics: Force vs. Mass (Quick Tip)", "SAT Reading: Find the Author’s View Fast", "AP Chem: Stoichiometry in 3 Steps"].map((title, i) => (
              <a key={i} href="#" className="group overflow-hidden rounded-xl border border-[rgba(31,42,48,.08)] bg-white hover:shadow-md">
                <div className="h-40 w-full bg-gradient-to-br from-[color:var(--rk-teal)] to-[color:var(--rk-peach)]" style={{['--rk-teal' as any]: RK.teal, ['--rk-peach' as any]: RK.peach}} />
                <div className="p-3 text-sm font-medium text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>{title}</div>
              </a>
            ))}
          </div>
          <div className="px-6 pb-6">
            <a className="rounded-md bg-[color:var(--rk-teal)] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110" style={{['--rk-teal' as any]: RK.teal}} href="#">Join our WhatsApp Channel</a>
          </div>
        </section>

        {/* Learning Nugget & Parent Tip */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
            <div className="h-1 w-full bg-[color:var(--rk-peach)]" style={{['--rk-peach' as any]: RK.peach}} />
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Quick Brain Teaser</h3>
              <p className="mt-2 text-[color:var(--rk-charcoal)]/80" style={{['--rk-charcoal' as any]: RK.charcoal}}>If <em>f(x) = 2x² + 3</em>, what’s <em>f(5)</em>? Reply with your answer — first 5 win a free worksheet!</p>
              <div className="mt-3 text-xs text-[color:var(--rk-charcoal)]/60" style={{['--rk-charcoal' as any]: RK.charcoal}}>Tip: Plug in x = 5.</div>
            </div>
          </div>
          <div className="rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
            <div className="h-1 w-full bg-[color:var(--rk-teal)]" style={{['--rk-teal' as any]: RK.teal}} />
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Parent Insider</h3>
              <p className="mt-2 text-[color:var(--rk-charcoal)]/80" style={{['--rk-charcoal' as any]: RK.charcoal}}>Middle school GPA isn’t official, but it can influence high‑school placement. Keep weekly tabs on skills, not just grades.</p>
              <a href="#" className="mt-3 inline-block rounded-md bg-[color:var(--rk-peach)] px-3 py-2 text-xs font-bold text-[color:var(--rk-charcoal)] shadow-sm transition hover:brightness-110" style={{['--rk-peach' as any]: RK.peach, ['--rk-charcoal' as any]: RK.charcoal}}>Read more tips</a>
            </div>
          </div>
        </section>

        {/* Featured Offer */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-[rgba(31,42,48,.08)] bg-white shadow-sm">
          <div className="bg-[color:var(--rk-mint)]/60 p-6" style={{['--rk-mint' as any]: RK.mint}}>
            <h3 className="text-lg font-extrabold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Featured: AP Crash Courses (9 classes)</h3>
            <p className="mt-2 text-[color:var(--rk-charcoal)]/80" style={{['--rk-charcoal' as any]: RK.charcoal}}>Fast-track prep with U.S. teachers. Small groups, live Q&A, and weekly reports. Seats are limited.</p>
            <a href="#" className="mt-3 inline-block rounded-md bg-[color:var(--rk-teal)] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-110" style={{['--rk-teal' as any]: RK.teal}}>See schedules</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 rounded-2xl border border-[rgba(31,42,48,.08)] bg-white p-6 text-sm text-[color:var(--rk-charcoal)]/70 shadow-sm" style={{['--rk-charcoal' as any]: RK.charcoal}}>
          <div className="h-px w-full bg-[rgba(31,42,48,.08)]" />
          <p className="mt-4"><span className="font-semibold text-[color:var(--rk-charcoal)]" style={{['--rk-charcoal' as any]: RK.charcoal}}>Refresh Kid</span> — Live online tutoring • Very affordable • U.S. & non‑local teachers</p>
          <p>Website • YouTube • Instagram • Facebook • WhatsApp Channel</p>
          <p className="mt-2">You’re receiving this because you opted in at RefreshKid.com.</p>
          <p className="mt-1">© 2025 Refresh Kid LLC</p>
        </footer>
      </div>
    </div>
  );
}
