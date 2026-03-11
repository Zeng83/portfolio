import React from "react";

const skills = [
  "React / Next.js",
  "TypeScript",
  "AI-powered UI",
  "Design Systems",
  "Frontend Architecture",
  "Performance Optimization",
];

const Introd = () => {
  return (
    <section className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      <div className="order-2 lg:order-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-100/80">
          AI • Green • Forest-inspired
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Crafting elegant <span className="text-emerald-300">AI-powered</span> web experiences with the calm and clarity of a forest.
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Design and build scalable web applications, AI-powered tools, and modern frontend platforms using React, Next.js, and cloud technologies. I’m passionate about solving complex technical challenges, improving developer productivity, and delivering products that create real value for users.
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
          <a
            href="/ZhaoFengZeng.pdf"
            download
            className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-center text-sm font-semibold text-emerald-100 backdrop-blur-sm transition hover:bg-emerald-400/15"
          >
            Download CV
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
  );
}

export default Introd;