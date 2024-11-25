import "./globals.css";
import Header from "./components/Header/Header";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmoothBackground from "./components/Background/SmoothBackground";

export const metadata = {
  title: "Web-разработка || Gp.Romanov",
  description:
    "Профессиональная разработка лендингов, корпоративных сайтов и веб-приложений. Создаю современные и эффективные решения для вашего бизнеса с индивидуальным подходом и качественным дизайном.",
  openGraph: {
    type: "website", // Указывает тип страницы
    url: "https://romanov-dev163.ru", // Укажите полный URL вашего сайта
    title: "Студия WEB-разработки || Фриланс || Gp.Romanov",
    description:
      "Разрабатываю уникальные и современные сайты: корпоративные порталы, лендинги и интернет-магазины. Помогу вашему бизнесу выделиться и стать ближе к клиентам благодаря продуманному дизайну и функциональности. 💻✨",
    images: [
      {
        url: "https://romanov-dev163.ru/favicon/smm.png",
        width: 1200,
        height: 630,
        alt: "Студия WEB-разработки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Тип карты Twitter
    title: "Студия WEB-разработки || Фриланс || Gp.Romanov", // Заголовок для Twitter
    description:
      "Разрабатываю уникальные и современные сайты: корпоративные порталы, лендинги и интернет-магазины. Помогу вашему бизнесу выделиться и стать ближе к клиентам благодаря продуманному дизайну и функциональности. 💻✨",
    images: ["https://romanov-dev163.ru/favicon/smm.png"], // Полный URL изображения
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="https://romanov-dev163.ru/favicon.ico" type="image/x-icon"/>
      </head>
      <body>
        <Header/>
        {children}
        <SmoothBackground/>
        <Script src="https://kit.fontawesome.com/073ad96d9b.js" crossorigin="anonymous"></Script>
      </body>
    </html>
  );
}
