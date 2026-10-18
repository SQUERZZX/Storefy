import Link from "next/link";
import type { CSSProperties } from "react";
import { niches } from "@/lib/niches";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Каталог сайтов — Storefy",
  description: "Готовые сайты для кафе, барбершопов, автомоек и салонов.",
};

export default function Catalog() {
  return (
    <>
      <ScrollReveal />
      <div className="wrap">
        <header>
          <Link className="logo" href="/">Storefy</Link>
          <Link className="btn ghost" href="/#order">Заказать сайт</Link>
        </header>

        <section>
          <h2>Каталог готовых сайтов</h2>
          <p className="lead">
            Выберите тип бизнеса и посмотрите, как будет выглядеть ваш сайт.
          </p>

          <div className="catalog">
            {niches.map((n) => {
              const vars = {
                "--s-bg": n.bg,
                "--s-ink": n.ink,
                "--s-acc": n.acc,
                "--s-acc-ink": n.accInk,
              } as CSSProperties;

              return (
                <Link key={n.slug} href={`/catalog/${n.slug}`} className="card tile">
                  <div className="tile-prev" style={vars}>
                    <small>{n.k}</small>
                    <b>{n.name}</b>
                    <i />
                    <i />
                    <span>{n.items[0][0]}</span>
                  </div>
                  <h3>{n.k}</h3>
                  <p>{n.line}</p>
                  <span className="tile-go">Смотреть макет →</span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}