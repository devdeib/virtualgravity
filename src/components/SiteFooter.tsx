"use client";

import SmokeCanvas from "@/components/SmokeCanvas";
import { useLang } from "@/components/LanguageProvider";

export default function SiteFooter() {
  const { lang, setLang, t } = useLang();

  return (
    <footer className="footer" id="contact">
      <div className="footer-bg">
        <SmokeCanvas />
      </div>
      <div className="footer-inner">
        <h3>{t.footer.h3}</h3>
        <div className="footer-cta" data-reveal>
          <a className="btn" href="/work-with-us">{t.footer.getStarted}</a>
          <a className="btn" href="https://wa.me/963980490761" target="_blank" rel="noopener noreferrer">{t.footer.whatsapp}</a>
          <a className="btn" href="tel:+963980490761">{t.footer.call}</a>
        </div>
        <p className="footer-apply">
          {t.footer.applyA}
          <a href="/join-us">{t.footer.applyLink}</a>
        </p>
        <div className="social">
          <a href="https://www.facebook.com/share/1BahtBHRq7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          <span className="sep"></span>
          <a href="https://www.linkedin.com/company/virtualgravityco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.2H6v7.2h2.34ZM7.17 10.1a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72ZM18 18.34v-3.94c0-2.1-.45-3.72-2.9-3.72-1.18 0-1.97.65-2.3 1.26h-.03v-1.07H10.5v7.47h2.34v-3.7c0-.97.18-1.92 1.39-1.92 1.18 0 1.2 1.12 1.2 1.98v3.64H18Z" />
            </svg>
          </a>
          <span className="sep"></span>
          <a href="https://www.instagram.com/virtualgravityco" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <div className="lang">
          <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <span className="sep"></span>
          <button type="button" className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>AR</button>
        </div>
        <div className="footer-meta">
          <a href="mailto:info@virtual-gravity.net">info@virtual-gravity.net</a>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
