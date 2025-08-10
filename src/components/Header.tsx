"use client";

import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20" />
          <span className="text-lg font-semibold tracking-wide text-white">
            Arrow Transport
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#uslugi">Usługi</a>
          <a className="hover:text-white" href="#cennik">Cennik</a>
          <a className="hover:text-white" href="#kontakt">Kontakt</a>
        </nav>

        <button
          onClick={() => setLang(lang === "pl" ? "en" : "pl")}
          className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
          aria-label="Language switch"
        >
          {lang === "pl" ? "PL" : "EN"}
        </button>
      </div>
    </header>
  );
}
