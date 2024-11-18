import "./globals.css";
import Header from "./components/Header/Header";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmoothBackground from "./components/Background/SmoothBackground";

export const metadata = {
  title: "Web-разработка || Gp.Romanov",
  description: "Профессиональная разработка лендингов, корпоративных сайтов и веб-приложений. Создаю современные и эффективные решения для вашего бизнеса с индивидуальным подходом и качественным дизайном.",
  openGraph: {
    title: "Студия WEB-разработки || Фриланс || Gp.Romanov",
    description: "Разрабатываю уникальные и современные сайты: корпоративные порталы, лендинги и интернет-магазины. Помогу вашему бизнесу выделиться и стать ближе к клиентам благодаря продуманному дизайну и функциональности. 💻✨",
    images: [
      {
        url: "/favicon/smm.png",
        width: 1200,
        height: 630,
        alt: "Описание изображения",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/favicon/smm.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta property="og:image" content="/favicon/smm.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://romanov-dev163.ru" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/favicon/smm.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
