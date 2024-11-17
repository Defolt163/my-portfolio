import Image from "next/image";
import documentImage from '/public/document.png'
import './customers.sass'

export default function Customers() {
  return (
    <section className="mb50 container center">
        <h3 className='page-header mb20'>
          Партнерство
        </h3>
        <div className="customers">
            <div className="flex customers_block">
                <ul className="w60 ccustomers_block__item">
                    <li className="md-mb20">
                        <h3 className="mb10">Физические лица</h3>
                        <div>Для физических лиц мы предлагаем широкий спектр интернет-решений, начиная с простых и доступных вариантов и заканчивая комплексными проектами с возможностью оплаты наличными средствами или переводом.</div>
                    </li>
                    <li>
                        <h3 className="mb10">Юридические лица</h3>
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
