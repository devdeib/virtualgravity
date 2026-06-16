"use client";
import { useEffect } from "react";

export default function Enhancers() {
  useEffect(() => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    const nav = document.getElementById("nav");

    // Mobile menu + burger morph
    const toggle = () => {
      menu?.classList.toggle("open");
      burger?.classList.toggle("active");
    };
    const close = () => {
      menu?.classList.remove("open");
      burger?.classList.remove("active");
    };
    burger?.addEventListener("click", toggle);
    menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // Nav condense on scroll
    const onNav = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onNav, { passive: true });
    onNav();

    // Scroll reveal with auto-stagger among siblings
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = Array.from(
            el.parentElement?.querySelectorAll<HTMLElement>(
              ":scope > [data-reveal]"
            ) || []
          );
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    // Scroll-spy: highlight active nav link (supports "#id" and "/#id")
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a")
    );
    const idToLink = new Map<string, HTMLAnchorElement>();
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!href.includes("#")) return;
      const id = href.split("#").pop();
      if (id) idToLink.set(id, a);
    });
    const spyTargets = Array.from(idToLink.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          navLinks.forEach((a) => a.classList.remove("active"));
          idToLink.get((e.target as HTMLElement).id)?.classList.add("active");
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -50% 0px" }
    );
    spyTargets.forEach((tg) => spy.observe(tg));

    return () => {
      burger?.removeEventListener("click", toggle);
      window.removeEventListener("scroll", onNav);
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return null;
}
