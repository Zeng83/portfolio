import React from "react";
import { Nav } from "libs/common/nav";
import { Introd } from "libs/common/introd";


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
        <Nav />
        <Introd />
        

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
            <h3 className="mt-3 text-2xl font-semibold">Crafting Digital Experiences</h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              I’m a Principal Software Engineer focused on modern web architecture, AI-powered applications, and scalable frontend platforms. My work combines React, Next.js, and cloud technologies to create fast, elegant, and highly interactive user experiences.
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
