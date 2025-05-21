# test-task
(Веб-сайт, включающий главную страницу, страницу контактов с формой и базовый бэкэнд для обработки отправки форм.)

- Deploy: https://cadex-test-task-tau.vercel.app
---
## Основной функционал:
- На главной странице в первом разделе встроенное видео YouTube.
- Все кнопки «Связаться с нами» ведут на страницу «Связаться с нами».
- После отправки форма отправляет входные данные в бэкэнд.
- Бэкэнд регистрирует данные в консоли и отвечает: «Спасибо за ваш интерес, {Имя}», используя имя из формы.
- После получения ответа сервера страница «Связаться с нами» обновляется, чтобы отобразить
сообщение из ответа.
---
## Технологии:
- [x] Весь код на Typescript.
- [x] React 19 + сторонняя библиотека компонентов Ant Design.
- [x] Для стилизации используются CSS модули.
- [x] Используется Next.js для фронтенда и встроенные API Routes для бэкенда. Это позволило создать одно приложение, которое будет обрабатывать как клиентскую, так и серверную логику.
- [x] Все страницы и элементы следуют общепринятым рекомендациям по SEO и доступности.
- [x] Реализованы теги, необходимые для предварительного просмотра страницы в социальных сетях (Open Graph, карточки Twitter)


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![][node-version] ![][npm-version]

[npm-version]: https://img.shields.io/badge/pnpm-%3E%3D%2010.9.2-blue
[node-version]: https://img.shields.io/badge/node-%3E%3D%2022.14.0-brightgreen

## Installation and Setup Instructions:

📦Clone down this repository. You will need `node` and `npm` installed globally on your machine.

```bash
$ git git@git.cybertech.ai:23/sychkov_v/med_frontend.git
$ cd med_frontend
$ npm install
$ npm run dev
```

Open http://localhost:3000 to view it in the browser.

To Run Linter:

```bash
npm run lint
```

To Build Project:

```bash
npm run build
```
