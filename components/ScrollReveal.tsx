"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // подсветка за курсором на карточках
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => document.removeEventListener("pointermove", onMove);
    }

    const els = document.querySelectorAll<HTMLElement>(
      "section h2, .card, .note, form"
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => {
      el.classList.add("reveal");
      const index = Array.from(el.parentElement?.children ?? []).indexOf(el);
      el.style.transitionDelay = `${index * 90}ms`;
      io.observe(el);
    });

    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}