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

function ChevronR() {
  return (
    <svg className="mm-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function SiteNav({ noShadow = false }: { noShadow?: boolean }) {
  const { lang, setLang, t } = useLang();

  return (
    <>
      <header className={noShadow ? "nav nav-flat" : "nav"} id="nav">
        <div className="nav-inner">
          <a className="logo" href="/#hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Virtual Gravity" />
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
        <span className="mobile-menu-glow" aria-hidden="true" />
        <div className="mobile-menu-card">
          <a href="/#hero" className="mobile-menu-link">
            <span>{t.nav.home}</span>
            <ChevronR />
          </a>
          <a href="/#services" className="mobile-menu-link">
            <span>{t.nav.services}</span>
            <ChevronR />
          </a>
          <a href="/#process" className="mobile-menu-link">
            <span>{t.nav.process}</span>
            <ChevronR />
          </a>
          <a href="/#contact" className="mobile-menu-link">
            <span>{t.nav.contact}</span>
            <ChevronR />
          </a>
          <a href="/join-us" className="mobile-menu-link mobile-menu-link--cta">
            {t.nav.join}
            <ArrowUR />
          </a>
          <div className="mobile-lang">
            <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button type="button" className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>العربية</button>
          </div>
        </div>
      </div>
    </>
  );
}
