const skills = [
  "React / Next.js",
  "TypeScript",
  "AI-powered UI",
  "Design Systems",
  "Frontend Architecture",
  "Performance Optimization",
];

const experiences = [
  {
    role: "Software Engineer Lead",
    company: "Walmart Global Tech",
    period: "2015 – 2025",
    desc: "Built large-scale checkout and identity experiences used by millions of customers across Walmart.com.",
  },
  {
    role: "Software Programmer",
    company: "Fuhu, Inc.",
    period: "2014 – 2015",
    desc: "Enhanced the eCommerce platform for the company's products.",
  },
  {
    role: "Online Software Engineer",
    company: "SCPD, Stanford University",
    period: "2012 – 2014",
    desc: "Designed and developed customize HTML5 video player for a mMoodle-based online learning platform.",
  },
  {
    role: "Web Developer",
    company: "Ruckus Wireless Inc.",
    period: "2016 – 2019",
    desc: "Built and maintained the company's roadmap website and internal tools.",
  },
];

const projects = [
  {
    title: "AI Recommendation Platform",
    desc: "A responsive product intelligence experience that blends personalization, experimentation, and modern frontend architecture.",
  },
  {
    title: "Enterprise Design System",
    desc: "A scalable UI foundation for fast payment & checkout experiences across Walmart.com.",
  },
  {
    title: "Conversational Assistant UI",
    desc: "A clean chat-first interface with agent workflows, real-time feedback, and component-driven patterns.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute right-6 top-28 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-lime-300/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgba(34,197,94,0.08))]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-sm font-semibold text-emerald-200">
              Mr.Z
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Zhao Zeng</p>
              <p className="text-xs text-emerald-100/70">Software Engineer Lead</p>
            </div>
          </div>
          <a
            href="mailto:zfzeng19@outlook.com"
            className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-400/15"
          >
            Let’s Talk
          </a>
        </nav>

        <section className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-100/80">
              AI • Green • Forest-inspired
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building elegant <span className="text-emerald-300">AI-powered</span> web experiences with a calm forest feel.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              A mobile-first personal portfolio designed to showcase engineering leadership, modern UI craftsmanship,
              and thoughtful product thinking across desktop and mobile.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-2xl bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Experience
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-emerald-200/15 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,14,0.95),rgba(15,29,21,0.92))] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">Live Preview</p>
                    <p className="mt-1 text-sm font-medium text-white">Mobile Hero Screen</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-emerald-300/20 bg-emerald-400/10" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-300/10 to-transparent p-4">
                  <div className="mb-4 h-28 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.28),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.22),transparent_28%),linear-gradient(180deg,#102116_0%,#0d1911_100%)]" />
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/65">Featured intro</p>
                  <h2 className="mt-2 text-2xl font-semibold leading-snug">
                    Designing interface systems where AI feels natural.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Minimal cards, soft glassmorphism, layered green light, and a forest-tech mood.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-100">Mobile first</span>
                    <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/80">Responsive</span>
                    <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/80">AI Theme</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/65">Experience</p>
          <h3 className="mt-3 text-2xl font-semibold">Work Experience</h3>

          <div className="mt-6 space-y-4">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.role}`}
                className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-300">{exp.role}</h4>
                    <p className="text-sm text-white/70">{exp.company}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">{exp.period}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/70">{exp.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/65">About</p>
            <h3 className="mt-3 text-2xl font-semibold">Nature-inspired, high-trust product presence</h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              This concept combines AI aesthetics with an organic visual language: dark evergreen layers, soft glow accents,
              clean typography, and content blocks that feel both premium and approachable.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-2xl font-semibold text-emerald-300">10+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Years building</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-2xl font-semibold text-emerald-300">AI</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Design language</p>
              </div>
            </div>
          </section>

          <section id="projects" className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/65">Selected work</p>
                <h3 className="mt-3 text-2xl font-semibold">Project cards</h3>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 sm:block">
                Swipe on mobile • Grid on desktop
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4"
                >
                  <div className="mb-4 h-28 rounded-2xl bg-[radial-gradient(circle_at_25%_30%,rgba(74,222,128,0.25),transparent_30%),linear-gradient(180deg,#173222_0%,#0f1b13_100%)]" />
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/68">{project.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section id="contact" className="mt-10 rounded-[2rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-5 backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/60">Contact / CTA</p>
              <h3 className="mt-3 text-2xl font-semibold">Ready to turn complex product ideas into polished user experiences.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                The footer CTA keeps the design light, human, and conversion-focused while staying consistent with the AI forest theme.
              </p>
            </div>
            <a
              href="mailto:zfzeng19@outlook.com"
              className="rounded-2xl border border-emerald-300/20 bg-emerald-400/15 px-5 py-3 text-center text-sm font-semibold text-emerald-50 transition hover:bg-emerald-400/20"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
