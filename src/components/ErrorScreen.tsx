"use client";

import SmokeCanvas from "@/components/SmokeCanvas";
import SiteNav from "@/components/SiteNav";

export default function ErrorScreen({
  code,
  title = "Whoa!",
  message = "That didn't work out.",
  detail = "The page you are looking for either doesn't exist or currently not available",
  onRetry,
}: {
  code: string | number;
  title?: string;
  message?: string;
  detail?: string;
  onRetry?: () => void;
}) {
  return (
    <>
      <SiteNav />
      <section className="hero errorhero" id="error">
        <div className="hero-bg">
          <SmokeCanvas
            base={{ r: 0.318, g: 0.078, b: 0.961 }}
            tint={{ r: 0.72, g: 0.65, b: 0.85 }}
          />
        </div>
        <div className="grain"></div>
        <div className="hero-overlay"></div>

        <div className="error-code" aria-hidden="true">
          {code}
        </div>

        <div className="error-content">
          <h1 className="error-title">{title}</h1>
          <h2 className="error-sub">{message}</h2>
          <p className="error-detail">{detail}</p>
          {onRetry ? (
            <button type="button" className="btn" onClick={onRetry}>
              Try Again
            </button>
          ) : (
            <a className="btn" href="/">
              Go Back Home
            </a>
          )}
        </div>
      </section>
    </>
  );
}
