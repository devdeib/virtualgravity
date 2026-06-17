"use client";

import SmokeCanvas from "@/components/SmokeCanvas";
import SiteNav from "@/components/SiteNav";

export default function ThankYou() {
  return (
    <>
      <SiteNav />
      <section className="hero thankyouhero" id="thankyou">
        <div className="hero-bg">
          <SmokeCanvas
            base={{ r: 0.318, g: 0.078, b: 0.961 }}
            tint={{ r: 0.72, g: 0.65, b: 0.85 }}
          />
        </div>
        <div className="grain"></div>
        <div className="hero-overlay"></div>

        <div className="thankyou-content">
          <h1 className="thankyou-title">Thank you for reaching out!!</h1>
          <p className="thankyou-sub">We&apos;ll be in touch within 24 hours.</p>
          <a className="btn" href="/">Go Back Home</a>
        </div>
      </section>
    </>
  );
}
