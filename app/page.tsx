import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Price from "@/components/Price";
import Link from "next/link";
import CatalogShowcase from "@/components/CatalogShowcase";
import {
  SceneForm,
  SceneSite,
  SceneLaunch,
  SceneFind,
  SceneChat,
  SceneUpdate,
  PlanPage,
  PlanMenu,
  PlanKey,
} from "@/components/Scenes";

const words = [
  "Кофейни",
  "Барбершопы",
  "Автомойки",
  "Салоны красоты",
  "Спортзалы",
  "Репетиторы",
  "Автосервисы",
  "Студии",
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="wrap">
       <header>
  <a className="logo" href="#top">Storefy</a>
  <nav className="nav">
    <Link className="btn ghost" href="/catalog">Каталог</Link>
    <a className="btn" href="#order">Заказать сайт</a>
  </nav>
</header>

        <main id="top">
          <Hero />
        </main>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...words, ...words].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>

        <section>
          <h2>Как это работает</h2>
          <div className="steps">
            <div className="card row">
              <div className="txt">
                <div className="step-n">1</div>
                <h3>Вы оставляете заявку</h3>
                <p>Название бизнеса и телефон. Больше ничего не нужно.</p>
              </div>
              <SceneForm />
            </div>
            <div className="card row">
              <div className="txt">
                <div className="step-n">2</div>
                <h3>Мы показываем макет</h3>
                <p>Присылаем ссылку на сайт с вашим названием, ценами и контактами.</p>
              </div>
              <SceneSite />
            </div>
            <div className="card row">
              <div className="txt">
                <div className="step-n">3</div>
                <h3>Вы платите, если нравится</h3>
                <p>Запускаем сайт в течение суток. Не понравилось, ничего не платите.</p>
              </div>
              <SceneLaunch />
            </div>
          </div>
        </section>
        <section>
  <h2>Каталог готовых сайтов</h2>
  <p className="lead">Наведите на свой тип бизнеса и посмотрите, каким будет ваш сайт.</p>
  <CatalogShowcase />
  <p className="all">
    <Link className="btn" href="/catalog">Весь каталог</Link>
  </p>
</section>

        <section>
          <h2>Зачем бизнесу сайт</h2>
          <div className="why">
            <div className="card row">
              <div className="txt">
                <span className="ico">🔎</span>
                <h3>Вас находят</h3>
                <p>Клиенты ищут в телефоне адрес, цены и часы работы. Если вас нет, они идут к другому.</p>
              </div>
              <SceneFind />
            </div>
            <div className="card row">
              <div className="txt">
                <span className="ico">💬</span>
                <h3>Заказы в WhatsApp</h3>
                <p>Кнопка на сайте открывает чат с готовым сообщением. Вы отвечаете как обычно.</p>
              </div>
              <SceneChat />
            </div>
            <div className="card row">
              <div className="txt">
                <span className="ico">⚡</span>
                <h3>Всегда актуально</h3>
                <p>Поменялась цена или появилась акция: напишите нам, и мы обновим сайт.</p>
              </div>
              <SceneUpdate />
            </div>
          </div>
        </section>

        <section>
          <h2>Цены</h2>
          <div className="plans">
            <div className="card plan">
              <PlanPage />
              <h3>Визитка</h3>
              <div className="price">от <Price value={3000} /> сом</div>
              <ul>
                <li>Одна страница</li>
                <li>Адрес, контакты, фото</li>
                <li>Кнопка WhatsApp</li>
              </ul>
            </div>
            <div className="card plan main">
              <span className="tag">Популярный</span>
              <PlanMenu />
              <h3>Бизнес</h3>
              <div className="price">от <Price value={6000} /> сом</div>
              <ul>
                <li>Меню или каталог цен</li>
                <li>Форма заявки в Telegram</li>
                <li>Карта и 2GIS</li>
              </ul>
            </div>
            <div className="card plan">
              <PlanKey />
              <h3>Под ключ</h3>
              <div className="price">от <Price value={12000} /> сом</div>
              <ul>
                <li>Свой домен</li>
                <li>Онлайн-запись</li>
                <li>ИИ-помощник для ответов</li>
              </ul>
            </div>
          </div>
          <p className="note">
            Поддержка и правки: от 500 сом в месяц. Точную цену назовём после макета.
          </p>
        </section>

        <section id="order">
          <h2>Оставьте заявку</h2>
          {/* Следующий шаг: сюда придёт <OrderForm /> */}
        </section>
      </div>

      <footer>
        <div className="wrap">
          Storefy · сайты для малого бизнеса в Кыргызстане
        </div>
      </footer>
    </>
  );
}