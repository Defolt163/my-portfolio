import "./globals.css";
import Header from "./components/Header/Header";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmoothBackground from "./components/Background/SmoothBackground";

export const metadata = {
  title: "Web-разработка || Gp.Romanov",
  description: "Профессиональная разработка лендингов, корпоративных сайтов и веб-приложений. Создаю современные и эффективные решения для вашего бизнеса с индивидуальным подходом и качественным дизайном.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <SmoothBackground/>
        <Script src="https://kit.fontawesome.com/073ad96d9b.js" crossorigin="anonymous"></Script>
      </body>
    </html>
  );
}
