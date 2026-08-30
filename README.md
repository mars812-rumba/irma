# IRMA

Рабочий MVP сайта оператора сложных охотничьих экспедиций. Главная реализована на Next.js App Router с серверным HTML, базовыми SEO-файлами и защищённым по схеме endpoint формы.

## Запуск

```bash
cp .env.example .env.local
npm install
npm run dev
```

Откройте `http://localhost:3000/ru`.

Production-сборка использует `basePath=/irma` и публикует контейнер только на `127.0.0.1:3010`. Фрагмент reverse proxy находится в `deploy/nginx-irma.conf`.

Проверки:

```bash
npm run typecheck
npm run build
```

## Что уже сделано

- адаптивная главная `/ru`;
- server-rendered контент, metadata, JSON-LD, robots и sitemap;
- визуальная система premium expedition editorial;
- доступные состояния focus, семантические секции и форма;
- Zod-валидация лида без логирования PII;
- Dockerfile и PostgreSQL в Docker Compose;
- безопасная сгенерированная hero-заглушка с явной маркировкой.

## Следующая фаза

Подключить Payload CMS к PostgreSQL и заменить статический модуль `src/content/site.ts` коллекциями и globals из `IRMA_PROJECT_ROADMAP.md`. Endpoint формы сейчас только валидирует запрос и возвращает `202`; запись в Payload помечена TODO. До production необходимо заменить заглушки, подтвердить контакты, юридические данные, программы, кейсы, цены и утверждения.
