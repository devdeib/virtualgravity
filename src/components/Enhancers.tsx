"use client";
import { useEffect } from "react";

export default function Enhancers() {
  useEffect(() => {
    // Mobile menu toggle
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    const toggle = () => menu?.classList.toggle("open");
    const close = () => menu?.classList.remove("open");
    burger?.addEventListener("click", toggle);
    menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // Projects parallax
    const cols = Array.from(
      document.querySelectorAll<HTMLElement>(".proj-col[data-speed]")
    );
    const section = document.querySelector<HTMLElement>(".projects");
    const onScroll = () => {
      if (!section) return;
      const r = section.getBoundingClientRect();
      const prog = window.innerHeight - r.top;
      cols.forEach((c) => {
        const s = parseFloat(c.getAttribute("data-speed") || "0");
        const base = c.classList.contains("mid") ? "scale(1.06) " : "";
        c.style.transform = base + `translateY(${prog * s * -0.18}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      burger?.removeEventListener("click", toggle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
