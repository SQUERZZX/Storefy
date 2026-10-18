"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { niches } from "@/lib/niches";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % niches.length),
      3500
    );
    return () => clearInterval(id);
  }, [auto]);

  const n = niches[active];
  const vars = {
    "--s-bg": n.bg,
    "--s-ink": n.ink,
    "--s-acc": n.acc,
    "--s-acc-ink": n.accInk,
  } as CSSProperties;

  return (
    <div className="hero">
      <div>
        <span className="badge">
          <i className="dot" /> Макет бесплатно, оплата после
        </span>
        <h1>Сайт для вашего бизнеса за 24 часа</h1>
        <p className="lead">
          Кафе, барбершоп, автомойка, салон: покажем, как будет выглядеть ваш
          сайт, до того как вы заплатите.
        </p>
        <p className="pick">Выберите свой бизнес и посмотрите пример:</p>
        <div className="chips" role="group" aria-label="Тип бизнеса">
          {niches.map((x, i) => (
            <button
              key={x.k}
              type="button"
              className="chip"
              aria-pressed={i === active}
              onClick={() => {
                setActive(i);
                setAuto(false);
              }}
            >
              {x.k}
            </button>
          ))}
        </div>
        <a className="btn shine" href="#order">
          Получить макет бесплатно
        </a>
      </div>

      <div className="phone-wrap">
        <div className="phone float">
          <div className="screen" style={vars}>
            <div className="screen-in" key={active}>
              <div className="top">
                <small>{n.k}</small>
                <h3>{n.name}</h3>
                <p>{n.line}</p>
              </div>
              <ul>
                {n.items.map(([title, price], i) => (
                  <li key={title} style={{ animationDelay: `${120 + i * 90}ms` }}>
                    <span>{title}</span>
                    <b>{price}</b>
                  </li>
                ))}
              </ul>
              <div className="cta">Заказать в WhatsApp</div>
            </div>
          </div>
        </div>
        <div className="toast" key={`toast-${active}`}>
          <i className="dot" /> Новый заказ: {n.items[0][0]}
        </div>
      </div>
    </div>
  );
}