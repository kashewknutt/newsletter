import React from "react";

// Refresh Kid brand palette - corrected based on website
const RK = {
  primary: "#1e5db8", // Blue from website
  primaryLight: "#4aafff",
  accent: "#f16b0e", // Orange - only for buttons/highlights
  accentLight: "#ff9a4a",
  neutral: "#2c3e50", // Dark text
  soft: "#f8fafb", // Light background
  white: "#ffffff",
  gray: "#6b7280",
  lightGray: "#f3f4f6",
};

export default function NewsletterPreview() {
  return (
    <div 
      className="min-h-screen py-10 font-['Poppins']" 
      style={{
        background: `linear-gradient(165deg, ${RK.white} 0%, ${RK.soft} 100%)`,
        fontFamily: 'Poppins, system-ui, -apple-system, sans-serif'
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header 
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto p-6">
            <div>
              <div 
                className="text-xs font-bold uppercase tracking-wider"
                style={{color: RK.primary}}
              >
                The Refresh Kid Insider
              </div>
              <div 
                className="mt-2 h-1 w-20 rounded-full"
                style={{background: `linear-gradient(to right, ${RK.primary}, ${RK.accent})`}}
              />
            </div>
            <button 
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              style={{background: RK.accent}}
            >
              Book Free Assessment
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-24 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <div
            className="p-8 text-white"
            style={{
              background: `linear-gradient(135deg, ${RK.primary} 0%, ${RK.primaryLight} 100%)`,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide">
              <span className="h-2 w-2 rounded-full bg-white"></span> 
              Big Update
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              U.S.-Certified Teachers for <em>All</em> AP Courses
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-white/90">
              From AP Biology to AP Computer Science, your child can learn from experienced U.S. school teachers—live, online, and aligned to the school curriculum.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button 
                className="px-6 py-3 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{background: RK.white, color: RK.neutral}}
              >
                See Courses
              </button>
              <button className="px-6 py-3 text-sm font-semibold text-white rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300">
                Meet Our U.S. Teachers
              </button>
            </div>
          </div>
        </section>

        {/* Teacher & Student of the Week */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="h-1 w-full" style={{background: RK.primary}} />
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{color: RK.primary}}>
                Teacher of the Week
              </h3>
              <div className="mt-4 flex gap-4">
                <img 
                  src="https://via.placeholder.com/64" 
                  alt="Teacher" 
                  className="h-16 w-16 rounded-full object-cover border-4"
                  style={{borderColor: RK.primary}}
                />
                <div className="flex-1">
                  <p className="font-semibold" style={{color: RK.neutral}}>
                    Oliver M. — AP English & SAT ELA (U.S. Certified)
                  </p>
                  <p className="text-sm" style={{color: RK.gray}}>
                    Fun fact: loves Chicago deep-dish 🍕
                  </p>
                  <button 
                    className="mt-3 px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    style={{background: RK.accent}}
                  >
                    See Oliver's bio
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="h-1 w-full" style={{background: RK.accent}} />
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{color: RK.accent}}>
                Student of the Week
              </h3>
              <div className="mt-4 flex gap-4">
                <img 
                  src="https://via.placeholder.com/64" 
                  alt="Student" 
                  className="h-16 w-16 rounded-full object-cover border-4"
                  style={{borderColor: RK.accent}}
                />
                <div className="flex-1">
                  <p className="font-semibold" style={{color: RK.neutral}}>
                    Aditya K. — +140 points on SAT practice in 4 weeks 🎉
                  </p>
                  <p className="text-sm" style={{color: RK.gray}}>
                    "The reading strategies finally clicked!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Dates */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="h-1 w-full" style={{background: RK.primary}} />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4" style={{color: RK.primary}}>
              Upcoming Dates (Next 2 Weeks)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl" style={{background: RK.lightGray}}>
                <span style={{color: RK.neutral}}>MathCounts Registration</span>
                <span 
                  className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{background: RK.primary, color: RK.white}}
                >
                  Sept 12
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{background: RK.lightGray}}>
                <span style={{color: RK.neutral}}>AMC 8/10/12 Practice Window</span>
                <span 
                  className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{background: RK.primaryLight, color: RK.white}}
                >
                  Sept 13–20
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{background: RK.lightGray}}>
                <span style={{color: RK.neutral}}>SAT / ACT Test Day</span>
                <span 
                  className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{background: RK.accent, color: RK.white}}
                >
                  Oct 4
                </span>
              </div>
            </div>
            <button 
              className="mt-4 px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{background: RK.primary}}
            >
              See full calendar
            </button>
          </div>
        </section>

        {/* Content Corner */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold" style={{color: RK.neutral}}>
              Watch & Learn (60‑Second Wins)
            </h3>
            <span 
              className="px-3 py-1 text-sm font-bold rounded-full"
              style={{background: RK.lightGray, color: RK.neutral}}
            >
              New
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            {["AP Physics: Force vs. Mass (Quick Tip)", "SAT Reading: Find the Author's View Fast", "AP Chem: Stoichiometry in 3 Steps"].map((title, i) => (
              <div key={i} className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                <div 
                  className="h-40 w-full"
                  style={{background: `linear-gradient(135deg, ${RK.primary} 0%, ${RK.primaryLight} 100%)`}}
                />
                <div className="p-4 text-sm font-medium" style={{color: RK.neutral}}>
                  {title}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6">
            <button 
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{background: RK.accent}}
            >
              Join our WhatsApp Channel
            </button>
          </div>
        </section>

        {/* Learning Nugget & Parent Tip */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="h-1 w-full" style={{background: RK.primaryLight}} />
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{color: RK.neutral}}>
                Quick Brain Teaser
              </h3>
              <p className="mt-3" style={{color: RK.gray}}>
                If <em>f(x) = 2x² + 3</em>, what's <em>f(5)</em>? Reply with your answer — first 5 win a free worksheet!
              </p>
              <div className="mt-2 text-sm" style={{color: RK.gray}}>
                Tip: Plug in x = 5.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="h-1 w-full" style={{background: RK.accent}} />
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{color: RK.neutral}}>
                Parent Insider
              </h3>
              <p className="mt-3" style={{color: RK.gray}}>
                Middle school GPA isn't official, but it can influence high‑school placement. Keep weekly tabs on skills, not just grades.
              </p>
              <button 
                className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{background: RK.lightGray, color: RK.neutral}}
              >
                Read more tips
              </button>
            </div>
          </div>
        </section>

        {/* Featured Offer */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="p-6" style={{background: RK.soft}}>
            <h3 className="text-xl font-bold" style={{color: RK.neutral}}>
              Featured: AP Crash Courses (9 classes)
            </h3>
            <p className="mt-3" style={{color: RK.gray}}>
              Fast-track prep with U.S. teachers. Small groups, live Q&A, and weekly reports. Seats are limited.
            </p>
            <button 
              className="mt-4 px-6 py-3 text-sm font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{background: RK.accent}}
            >
              See schedules
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-sm shadow-md" style={{color: RK.gray}}>
          <div className="h-px w-full bg-gray-200" />
          <p className="mt-4">
            <span className="font-semibold" style={{color: RK.neutral}}>
              Refresh Kid
            </span>{" "}
            — Live online tutoring • Very affordable • U.S. & non‑local teachers
          </p>
          <p className="mt-2">Website • YouTube • Instagram • Facebook • WhatsApp Channel</p>
          <p className="mt-2">You're receiving this because you opted in at RefreshKid.com.</p>
          <p className="mt-1">© 2025 Refresh Kid LLC</p>
        </footer>
      </div>
    </div>
  );
}