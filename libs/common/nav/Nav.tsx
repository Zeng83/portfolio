import React from "react";

const Nav = () => {
  return (
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
  );
}

export default Nav;