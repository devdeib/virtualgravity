"use client";

import { useLang } from "@/components/LanguageProvider";

function ArrowUR() {
  return (
    <span className="ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </span>
  );
}

export default function SiteNav() {
  const { lang, setLang, t } = useLang();

  return (
    <>
      <header className="nav" id="nav">
        <div className="nav-inner">
          <a className="logo" href="/#hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/bAfw2IYj1tWmsuxIkh9mzKcTs.svg" alt="Virtual Gravity" />
          </a>
          <nav className="nav-links">
            <a href="/#hero" className="active">{t.nav.home}</a>
            <a href="/#services">{t.nav.services}</a>
            <a href="/#process">{t.nav.process}</a>
            <a href="/#contact">{t.nav.contact}</a>
          </nav>
          <a className="nav-cta" href="/join-us">
            {t.nav.join}
            <ArrowUR />
          </a>
          <button className="nav-burger" id="burger" type="button" aria-label="Open menu">
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <a href="/#hero">{t.nav.home}</a>
        <a href="/#services">{t.nav.services}</a>
        <a href="/#process">{t.nav.process}</a>
        <a href="/#contact">{t.nav.contact}</a>
        <a href="/join-us">{t.nav.join}</a>
        <div className="mobile-lang">
          <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <button type="button" className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>العربية</button>
        </div>
      </div>
    </>
  );
}
