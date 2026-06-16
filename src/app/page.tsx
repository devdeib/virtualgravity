"use client";

import SmokeCanvas from "@/components/SmokeCanvas";
import Enhancers from "@/components/Enhancers";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/components/LanguageProvider";
import BrandText from "@/components/BrandText";

function TagIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

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

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  web: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
    </svg>
  ),
  marketing: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  ai: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  app: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
    </svg>
  ),
  social: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  ),
  systems: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
};

const STEP_ICONS: Record<string, React.ReactNode> = {
  vision: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14a5 5 0 1 0-6.18 0c.51.4.84 1 .9 1.66h4.38a2 2 0 0 1 .9-1.66Z" />
    </svg>
  ),
  request: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18v-6" /><path d="M8 15h8" /><rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  ),
  executed: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
};

const SERVICE_COL_1 = ["web", "marketing", "ai"] as const;
const SERVICE_COL_2 = ["app", "social", "systems"] as const;
const STEP_KEYS = ["vision", "request", "executed"] as const;

export default function Home() {
  const { lang, t } = useLang();
  const heroWords = t.hero.h1.split(" ");

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg"><SmokeCanvas /></div>
        <div className="grain"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            {heroWords.map((w, i) => (
              <span key={`${lang}-${i}`}>
                <span className="w" style={{ animationDelay: `${i * 0.08}s` }}>{w}</span>{" "}
              </span>
            ))}
          </h1>
          <p className="sub">{t.hero.sub}</p>
          <div className="hero-buttons">
            <a className="btn" href="/work-with-us">{t.hero.getStarted}<ArrowUR /></a>
            <a className="btn ghost" href="tel:+963980490761">{t.hero.call}</a>
          </div>
        </div>
        <div className="hero-scroll">
          <p>{t.hero.scrollDown}</p>
          <span className="line"></span>
          <span className="scroll-dot"></span>
          <span className="line"></span>
          <p>{t.hero.seeMore}</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec about" id="about">
        <div className="sec-inner about-grid">
          <div className="about-info">
            <h2 className="h2" data-reveal><BrandText text={t.about.title} /></h2>
            <p className="lead" data-reveal>{t.about.lead}</p>
            <div className="pills" data-reveal>
              {t.about.pills.map((p, i) => (<div className="pill" key={i}><p>{p}</p></div>))}
            </div>
            <div className="divider"></div>
            <div className="exp-grid">
              {t.about.exp.map((e, i) => (<div className="exp" data-reveal key={i}><p>{e}</p></div>))}
            </div>
          </div>
          <div className="about-img" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/kS0nBwB7pKnWC3vlQzLBRwPVKYA.jpg" alt="team" />
          </div>
        </div>
      </section>

      {/* SERVICES (before Process — purple->black gradient slot) */}
      <section className="sec services" id="services">
        <div className="sec-inner">
          <div className="services-top">
            <div className="services-left">
              <div className="eyebrow" data-reveal><span className="dot"><i></i></span><span>{t.services.eyebrow}</span></div>
              <h2 className="h2" data-reveal>{t.services.title}</h2>
              <p className="lead" data-reveal>{t.services.lead}</p>
              <div className="pills" data-reveal>
                {t.services.pills.map((p, i) => (<div className="pill" key={i}><p>{p}</p></div>))}
              </div>
              <div className="divider"></div>
              <a className="btn" href="/work-with-us" style={{ alignSelf: "flex-start" }}>{t.services.cta}</a>
            </div>
            <div className="services-hero-img" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/4PkmsorrStxIRIPmuHvP9uRFx0.png" alt="services" />
            </div>
          </div>

          <div className="bento">
            <div className="bento-col">
              {SERVICE_COL_1.map((k) => (
                <div className="card" data-reveal key={k}>
                  <div className="top">{SERVICE_ICONS[k]}<h4>{t.services.cards[k].title}</h4></div>
                  <div className="cdiv"></div>
                  <p>{t.services.cards[k].desc}</p>
                </div>
              ))}
            </div>
            <div className="bento-col">
              {SERVICE_COL_2.map((k) => (
                <div className="card" data-reveal key={k}>
                  <div className="top">{SERVICE_ICONS[k]}<h4>{t.services.cards[k].title}</h4></div>
                  <div className="cdiv"></div>
                  <p>{t.services.cards[k].desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="marquees" data-reveal>
            <div className="marquee a">
              {[...t.services.marqueeA, ...t.services.marqueeA].map((tg, i) => (<div className="tag" key={i}><TagIcon /><p>{tg}</p></div>))}
            </div>
            <div className="marquee b">
              {[...t.services.marqueeB, ...t.services.marqueeB].map((tg, i) => (<div className="tag" key={i}><TagIcon /><p>{tg}</p></div>))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS (after Services — black->lilac->black gradient slot) */}
      <section className="sec process" id="process">
        <div className="sec-inner process-grid">
          <div className="process-img" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/djbcRHCD89IflJ1okJAa1J65cuM.png" alt="process" />
          </div>
          <div className="process-right">
            <div className="eyebrow" data-reveal><span className="dot"><i></i></span><span>{t.process.eyebrow}</span></div>
            <h2 className="h2" data-reveal>{t.process.title}</h2>
            <p className="lead" data-reveal>{t.process.lead}</p>
            <a className="btn" href="/work-with-us" style={{ alignSelf: "flex-start" }}>{t.process.cta}</a>
            <div className="steps">
              {STEP_KEYS.map((k, i) => (
                <div className="step" data-reveal key={k}>
                  {STEP_ICONS[k]}
                  <div><h3>{t.process.steps[k].title}</h3></div>
                  <div className="sdiv"></div>
                  <p><BrandText text={t.process.steps[k].desc} /></p>
                  <div className="badge"><p>{i + 1}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Enhancers />
    </>
  );
}
