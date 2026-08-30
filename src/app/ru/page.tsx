import Image from "next/image";
import Link from "next/link";
import { directions, faqs, journeySteps, riskSteps } from "@/content/site";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "IRMA", url: `${siteUrl}/ru` },
      { "@type": "WebSite", name: "IRMA", url: `${siteUrl}/ru`, inLanguage: "ru-RU", publisher: { "@id": `${siteUrl}/#organization` } }
    ]
  };

  return <>
    <header className="header">
      <Link href="/ru" className="brand" aria-label="IRMA, на главную"><span>IR</span><span>MA</span></Link>
      <nav className="nav" aria-label="Основная навигация">
        <a href="#directions">Направления</a><a href="#approach">Подход</a><a href="#process">Как работаем</a><a href="#knowledge">База знаний</a>
      </nav>
      <a className="headerCta" href="#selection">Обсудить задачу</a>
    </header>

    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/placeholders/hero-mountain-expedition.png" alt="Участник экспедиции на горном хребте на рассвете — сгенерированная композиционная заглушка" fill priority sizes="100vw" className="heroImage" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Оператор сложных экспедиций</p>
          <h1 id="hero-title">Сложная охота должна быть сложной <em>только в поле</em></h1>
          <p className="heroLead">IRMA собирает маршрут, документы и смету — с резервным сценарием до старта.</p>
          <div className="heroActions"><a className="button primary" href="#selection">Разобрать задачу <Arrow /></a><a className="textLink" href="#approach">Узнать подход <span>↓</span></a></div>
        </div>
        <p className="imageLabel">Изображение-заглушка · заменить до запуска</p>
      </section>

      <section className="promise" id="approach">
        <div className="sectionNumber">01 / ПОДХОД</div>
        <h2>Мы не обещаем предсказуемое поле.<br/>Мы делаем предсказуемой <em>подготовку.</em></h2>
        <div className="riskList">{riskSteps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="directions" id="directions">
        <div className="directionsIntro"><p>География</p><h2>Направление — это не точка на карте</h2><p className="directionLead">Это связка сезона, района, команды, правил и реальной логистики. Публикуем только проверенные программы.</p><p className="mediaDisclosure">Визуальные материалы раздела сгенерированы и используются как тематические заглушки.</p></div>
        <div className="directionGrid">{directions.map((item, index) => <article className={`direction d${index + 1}`} key={item.name}>
          <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1000px) 50vw, 33vw" placeholder="blur" blurDataURL={item.blur} />
          <div className="directionShade"/><div className="directionCopy"><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.note}</p></div>
        </article>)}</div>
      </section>

      <section className="process" id="process">
        <div><span className="largeIndex">05</span><h2>От запроса<br/>до возвращения</h2></div>
        <ol>{journeySteps.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
      </section>

      <section className="knowledge" id="knowledge">
        <h2>До решения нужно знать больше, чем название программы</h2>
        <div className="knowledgeGrid">
          <article className="featured">
            <div className="featuredMedia"><Image src="/placeholders/preparation-route.webp" alt="Планирование маршрута по карте — сгенерированная тематическая заглушка" fill sizes="(max-width: 767px) 100vw, 55vw" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABQAgCdASoQAAsAAgA0JYgCdAYuR20feYiVQVAA/v12XMrhXju4nfYPts6F0IvHOi8h6GXcnCm0bZZrArJJuy4embfSPtzC1ewm0Q+B/7/mQajImcXPRaEI3wWFB/MccB97mv+LWiOwYnPzftaGkkDydMs27mfOF74AAA==" /><span>Сгенерированная заглушка</span></div>
            <div className="featuredBody"><span>База знаний</span><h3>Из чего складывается полная стоимость экспедиции</h3><p>Как читать смету, где возникают переменные расходы и что зафиксировать до депозита.</p><a href="#selection">Получить разбор <Arrow /></a></div>
          </article>
          <article><span>Документы</span><h3>Своё оружие или аренда на месте</h3><p>Какие вопросы проверить до выбора маршрута.</p></article>
          <article><span>Подготовка</span><h3>Как оценить физическую сложность</h3><p>Рельеф, высота, переходы и запас по погоде.</p></article>
        </div>
      </section>

      <section className="selection" id="selection">
        <div className="selectionIntro"><p className="sectionNumber">ПЕРВЫЙ ШАГ</p><h2>Начнём не с каталога.<br/>Начнём с вашей задачи.</h2><p>Оставьте исходные данные. Это не бронирование — мы сначала проверим реалистичность маршрута и ограничений.</p></div>
        <form className="form" action={`${basePath}/api/leads`} method="post">
          <div className="field"><label htmlFor="interest">Направление или вид</label><input id="interest" name="interest" placeholder="Например, Камчатка" required /></div>
          <div className="fieldRow"><div className="field"><label htmlFor="dates">Ориентировочные даты</label><input id="dates" name="dates" placeholder="Осень 2027" /></div><div className="field"><label htmlFor="groupSize">Участников</label><input id="groupSize" name="groupSize" type="number" min="1" max="20" placeholder="2" /></div></div>
          <div className="field"><label htmlFor="contact">Как с вами связаться</label><input id="contact" name="contact" placeholder="Телефон или email" required /></div>
          <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>Согласен на обработку данных для ответа на запрос</span></label>
          <button className="button primary" type="submit">Отправить запрос <Arrow /></button>
        </form>
      </section>

      <section className="faq"><h2>До первого разговора</h2><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    </main>

    <footer><div className="footerBrand">IRMA</div><p>Сложные охотничьи экспедиции<br/>с управляемым риском.</p><div><a href="#directions">Направления</a><a href="#process">Процесс</a><a href="#selection">Контакты</a></div><small>Демо-версия. Факты, программы, контакты и юридические данные требуют подтверждения.</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
