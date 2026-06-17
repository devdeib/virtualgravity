"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SmokeCanvas from "@/components/SmokeCanvas";
import Enhancers from "@/components/Enhancers";
import SiteNav from "@/components/SiteNav";
import { useLang } from "@/components/LanguageProvider";

const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw-U8g3ReRDyUADPENfCXVkAutc3c6FrntqgmlXeCPfEKDIXUEQwwNlXziWy8K7D1hx/exec";

export default function WorkWithUs() {
  const { lang, t } = useLang();
  const router = useRouter();
  const titleWords = t.work.title.split(" ");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    budget: t.work.budgetOptions[0],
    service: t.work.serviceOptions[0],
    project: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ formType: "work", ...form }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Unknown error");
      router.push("/thankyou");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <>
      <SiteNav />

      <section className="hero workhero" id="work">
        <div className="hero-bg">
          <SmokeCanvas tint={{ r: 0.443, g: 0.208, b: 0.898 }} />
        </div>
        <div className="grain"></div>
        <div className="hero-overlay"></div>

        <div className="work-content">
          <h1 className="work-title">
            {titleWords.map((w, i) => {
              const isBrand = w === "Virtual" || w === "Gravity";
              return (
                <span key={`${lang}-${i}`}>
                  <span className={isBrand ? "w brand" : "w"} style={{ animationDelay: `${i * 0.08}s` }}>{w}</span>{" "}
                </span>
              );
            })}
          </h1>
          <p className="sub work-sub">{t.work.sub}</p>

          <form className="workform" onSubmit={handleSubmit}>
            <div className="workform-grid">
              <div className="field">
                <label htmlFor="fullName">{t.work.fullName}</label>
                <input id="fullName" type="text" value={form.fullName} onChange={update("fullName")} placeholder={t.work.fullNamePh} required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.work.email}</label>
                <input id="email" type="email" value={form.email} onChange={update("email")} placeholder={t.work.emailPh} required />
              </div>
              <div className="field">
                <label htmlFor="phone">{t.work.phone}</label>
                <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder={t.work.phonePh} />
              </div>
              <div className="field">
                <label htmlFor="company">{t.work.company}</label>
                <input id="company" type="text" value={form.company} onChange={update("company")} placeholder={t.work.companyPh} />
              </div>
              <div className="field">
                <label htmlFor="budget">{t.work.budget}</label>
                <select id="budget" value={form.budget} onChange={update("budget")}>
                  {t.work.budgetOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">{t.work.service}</label>
                <select id="service" value={form.service} onChange={update("service")}>
                  {t.work.serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="project">{t.work.project}</label>
                <textarea id="project" rows={6} value={form.project} onChange={update("project")} placeholder={t.work.projectPh}></textarea>
              </div>
              <div className="field full">
                <button type="submit" className="work-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : t.work.submit}
                </button>
                {status === "error" && <p className="form-status error">Something went wrong: {errorMsg}. Please try again or email us directly.</p>}
              </div>
            </div>
          </form>

          <a className="work-back" href="/#hero">{t.work.back}</a>
        </div>
      </section>

      <Enhancers />
    </>
  );
}
