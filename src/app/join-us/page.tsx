"use client";

import { useState } from "react";
import SmokeCanvas from "@/components/SmokeCanvas";
import Enhancers from "@/components/Enhancers";
import SiteNav from "@/components/SiteNav";
import { useLang } from "@/components/LanguageProvider";

export default function JoinUs() {
  const { lang, t } = useLang();
  const titleWords = t.join.title.split(" ");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: t.join.roleOptions[0],
    experience: t.join.experienceOptions[0],
    note: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `${t.join.fullName}: ${form.fullName}`,
      `${t.join.email}: ${form.email}`,
      `${t.join.phone}: ${form.phone}`,
      `${t.join.location}: ${form.location}`,
      `${t.join.role}: ${form.role}`,
      `${t.join.experience}: ${form.experience}`,
      `${t.join.note}: ${form.note}`,
    ].join("\n");
    window.location.href = `mailto:info@virtual-gravity.net?subject=${encodeURIComponent(
      "Join Virtual Gravity"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SiteNav />

      <section className="hero workhero" id="join">
        <div className="hero-bg">
          <SmokeCanvas />
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
          <p className="sub work-sub">{t.join.sub}</p>

          <form className="workform" onSubmit={handleSubmit}>
            <div className="workform-grid">
              <div className="field">
                <label htmlFor="fullName">{t.join.fullName}</label>
                <input id="fullName" type="text" value={form.fullName} onChange={update("fullName")} placeholder={t.join.fullNamePh} required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.join.email}</label>
                <input id="email" type="email" value={form.email} onChange={update("email")} placeholder={t.join.emailPh} required />
              </div>
              <div className="field">
                <label htmlFor="phone">{t.join.phone}</label>
                <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder={t.join.phonePh} />
              </div>
              <div className="field">
                <label htmlFor="location">{t.join.location}</label>
                <input id="location" type="text" value={form.location} onChange={update("location")} placeholder={t.join.locationPh} />
              </div>
              <div className="field">
                <label htmlFor="role">{t.join.role}</label>
                <select id="role" value={form.role} onChange={update("role")}>
                  {t.join.roleOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="experience">{t.join.experience}</label>
                <select id="experience" value={form.experience} onChange={update("experience")}>
                  {t.join.experienceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="note">{t.join.note}</label>
                <textarea id="note" rows={6} value={form.note} onChange={update("note")} placeholder={t.join.notePh}></textarea>
              </div>
              <div className="field full">
                <button type="submit" className="work-submit">{t.join.submit}</button>
              </div>
            </div>
          </form>

          <a className="work-back" href="/#hero">{t.join.back}</a>
        </div>
      </section>

      <Enhancers />
    </>
  );
}
