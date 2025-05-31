'use client'
import Image from "next/image";
import documentImage from '/public/document.png'
import './customers.sass'
import { useEffect, useRef, useState } from "react";

export default function Customers() {
    const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');

          // Добавляем текущий раздел в видимые
          setVisibleSections(prev => ({ ...prev, [index]: true }));

          // Отключаем наблюдение за этим элементом, чтобы не перезаписывать состояние
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    sectionRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  return (
    <section ref={el => (sectionRefs.current[0] = el)} data-index="0" className={`mb50 customer_block container center ${visibleSections[0] ? 'reveal' : ''}`}>
        <h3 className='page-header mb20'>
          Партнерство
        </h3>
        <div className="customers">
            <div className="flex customers_block">
                <ul className="w60 ccustomers_block__item">
                    <li className="md-mb20 mb-4">
                        <h3 className="mb10 text-2xl font-normal">Физические лица</h3>
                        <div>Для физических лиц мы предлагаем широкий спектр интернет-решений, начиная с простых и доступных вариантов и заканчивая комплексными проектами с возможностью оплаты наличными средствами или переводом.</div>
                    </li>
                    <li>
                        <h3 className="mb10 text-2xl font-normal">Юридические лица</h3>
                        <div>Мы сотрудничаем с индивидуальными предпринимателями, обществами с ограниченной ответственностью, государственными компаниями и другими юридическими лицами. Мы предлагаем индивидуальные условия сотрудничества, закреплённые в договоре, а также обмен документами через систему электронного документооборота (ЭДО) и возможность оплаты наличными и безналичными средствами</div>
                    </li>
                </ul>
                <div className="w40 ccustomers_block__item"><Image className="customers_image" src={documentImage} alt="document"/></div>
            </div>
            <div className="flex fz18 mt10">
                <strong>Бесплатная консультация, Гарантия на работу, Работа по договору, Срочные заказы, Техническая поддержка сайта</strong>
            </div>
        </div>
    </section>
  );
}
