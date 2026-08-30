import Link from "next/link";
export default function NotFound() { return <main className="notFound"><span>404</span><h1>Маршрут не найден</h1><p>Возможно, страница ещё не опубликована или адрес изменился.</p><Link className="button primary" href="/ru">На главную</Link></main>; }
