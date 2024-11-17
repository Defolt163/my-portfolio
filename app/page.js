'use client'
import { useEffect, useRef, useState } from 'react';
import './style.sass'
import Customers from './components/Customers/Customers';
import Portfolio from './components/Portfolio/Portfolio';
import Feedback from './components/Feedback/Feedback';
import Link from 'next/link';
import Slider from "react-slick";

export default function Home() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, [])

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: false,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          swipeToSlide: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        }
      }
    ]
  }

  return (
    <main>
      <section className="promo container center flex">
        <h1 className="promo_text mb20">Создание <strong>САЙТОВ</strong> и <strong>WEB</strong> приложений</h1>
        <h2 className='mb20'>Добро пожаловать! Меня зовут Михаил, я из г.Самара, занимаюсь веб разработкой {">2"} лет. В свободное от работы время я создаю свои собственные пет-проекты.</h2>
        <div className='flex w50 mb10 promo_social__media'>
          <div className='button btn_about__me'>Обо мне</div>
          <Link href={'https://github.com/Defolt163'} target='_blank'  className='button btn_about__me'>GitHub</Link>
          <Link href={'https://samara.hh.ru/resume/98b38a72ff09486ab30039ed1f7867524d6248'} target='_blank' className='button btn_about__me'>hh.ru</Link>
          <Link href={'https://www.avito.ru/samara/predlozheniya_uslug/veb_razrabotka_saytov_i_veb_prilozheniy_pod_klyuch_4130968742'} target='_blank' className='button btn_about__me'>Avito</Link>
        </div>
        <div className='button btn_about__me red'>Связаться!</div>
      </section>
      <section className='partners center container mb50'>
        <h3 className='page-header'>Клиенты</h3>
        <div className="slider-container">
      <Slider className='partners_logo_block' {...settings}>
        <div>
          <div className='partner_logo' style={{background: `url(/partners/logo.383c6b2bf8cd8c9cdd8e.png) center center/contain no-repeat`}}></div>
        </div>
        <div>
          <div className='partner_logo' style={{background: `url(/partners/logo.3cf603ba.svg) center center/contain no-repeat`}}></div>
        </div>
        <div>
          <div className='partner_logo' style={{background: `url(/partners/swift-logo.svg) center center/contain no-repeat`}}></div>
        </div>
      </Slider>
    </div>
      </section>
      <section className='services container center mb50'>
        <h3 className='page-header mb20'>
          Что я могу вам <strong>ПРЕДЛОЖИТЬ</strong>
        </h3>
        <div className='card_block flex'>
          <div className='card_item'>
            <h3 className='mb20'>Landing Page</h3>
            <div className='mb20 services_item__text'>Одностраничный сайт — это оптимальный инструмент для небольших компаний, которые хотят протестировать новые ниши, запустить временные промо-акции или просто представить свои услуги в интернете. </div>
            <div className='card_item__ico flex mb10'>
              <i className="fa-regular fa-clock ico-bgc"></i>
              <h4><strong>Срок:</strong> от 1 недели</h4>
            </div>
            <div className='card_item__ico flex'>
              <i className="fa-solid fa-tv ico-bgc"></i>
              <h4><strong>Кол-во страниц:</strong> 1</h4>
            </div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Корпоративный сайт</h3>
            <div className='mb20 card_item__text'>Создание многостраничного сайта — это идеальный выбор для компаний, которые хотят эффективно представить свои услуги и привлечь клиентов через поисковые системы.</div>
            <div className='card_item__ico flex mb10'>
              <i className="fa-regular fa-clock ico-bgc"></i>
              <h4><strong>Срок:</strong> от 2х недель</h4>
            </div>
            <div className='card_item__ico flex'>
              <i className="fa-solid fa-tv ico-bgc"></i>
              <h4><strong>Кол-во страниц:</strong> <i className="fa-solid fa-infinity"></i></h4>
            </div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>WEB приложение</h3>
            <div className='mb20 card_item__text'>Создание web приложения - это возможность, бюджетного запуска своего приложения по технологии PWA</div>
            <div className='card_item__ico flex mb10'>
              <i className="fa-regular fa-clock ico-bgc"></i>
              <h4><strong>Срок:</strong> от 2х недель</h4>
            </div>
            <div className='card_item__ico flex'>
              <i className="fa-solid fa-tv ico-bgc"></i>
              <h4><strong>Кол-во слотов:</strong> <i className="fa-solid fa-infinity"></i></h4>
            </div>
          </div>
        </div>
      </section>
      <Customers/>
      <section className='container center mb50'>
        <h3 className='page-header mb20'>
          <strong>РАБОТА</strong> включает в себя
        </h3>
        <div className='card_block flex'>
          <div className='card_item'>
            <h3 className='mb20'>Адаптивная верстка</h3>
            <div className='mb20 services_item__text'>Грамотная адаптивная верстка гарантирует, что ваш сайт будет отлично выглядеть и функционировать на любых устройствах: от мобильных телефонов до настольных компьютеров. </div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Документация</h3>
            <div className='mb20 services_item__text'>Создание документации и инструкций по пользованию продуктом — это важный процесс, который поможет понять, как эффективно использовать продукт</div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Дизайн</h3>
            <div className='mb20 services_item__text'>Помогу в создании уникального дизайна для вашего сайта. Этот этап является ключевым для создания привлекательного и функционального веб-ресурса, который будет соответствовать вашему бренду и вашему ТЗ.</div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Соблюдение нормативных требований</h3>
            <div className='mb20 services_item__text'>Нормативные акты заставляют публиковать определённую информацию и даже прибегать к определённым техническим и дизайнерским решениям.</div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Базовая SEO оптимизация</h3>
            <div className='mb20 services_item__text'>Это набор мероприятий, направленных на улучшение видимости сайта в поисковых системах</div>
          </div>
          <div className='card_item'>
            <h3 className='mb20'>Постановка на хостинг</h3>
            <div className='mb20 services_item__text'>Процесс размещения вашего сайта на сервере, который обеспечивает его доступность в Интернете</div>
          </div>
        </div>
      </section>
      <Portfolio/>
      <Feedback/>
      <div className='background_cursor_gradient' style={{maskImage: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%)`}}></div>
      <div className='background' style={{maskImage: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%)`}}></div>
    </main>
  );
}
