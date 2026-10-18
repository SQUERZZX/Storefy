"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { niches } from "@/lib/niches";

export default function CatalogShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="showcase">
      {niches.map((n, i) => {
        const on = i === active;
        const vars = {
          "--s-bg": n.bg,
          "--s-ink": n.ink,
          "--s-acc": n.acc,
          "--s-acc-ink": n.accInk,
        } as CSSProperties;

        return (
          <div
            key={n.slug}
            className={`pan${on ? " on" : ""}`}
            style={vars}
            onMouseEnter={() => setActive(i)}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--px", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--py", `${e.clientY - r.top}px`);
            }}
          >
            <button
              type="button"
              className="pan-tab"
              aria-expanded={on}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span>{n.k}</span>
            </button>

            <div className="pan-body" aria-hidden={!on}>
              <small>{n.k}</small>
              <h3>{n.name}</h3>
              <p>{n.line}</p>
              <ul>
                {n.items.map(([title, price], j) => (
                  <li key={title} style={{ animationDelay: `${200 + j * 110}ms` }}>
                    <span>{title}</span>
                    <b>{price}</b>
                  </li>
                ))}
              </ul>
              <Link
                className="pan-cta"
                href={`/catalog/${n.slug}`}
                tabIndex={on ? 0 : -1}
              >
                Открыть макет
              </Link>
              <span className="pan-toast">
                <i className="dot" /> Новый заказ: {n.items[0][0]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}