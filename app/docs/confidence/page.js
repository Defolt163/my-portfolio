import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import '../style.sass'
export const metadata = {
    title: "Согласие на обработку персональных данных || Gp.Romanov",
    description: "Профессиональная разработка лендингов, корпоративных сайтов и веб-приложений. Мы ценим вашу конфиденциальность и стремимся обеспечить безопасное обращение с вашей информацией.",
  };
export default function policyInfo(){
    return(
        <>
            <div className="reference reference_content container center">
                <h1 className="page-header mb20">Согласие на обработку персональных данных</h1>
                <Breadcrumb className="breadcrumb mb20">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs">Справочник</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="breadcrumb__active">Согласие на обработку персональных данных</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <p>Настоящим я, во исполнение требований Федерального закона от 27.07.2006 г. No 152-ФЗ «О персональных данных» (с изменениями и дополнениями) свободно, своей волей и своем интересе, а также подтверждая свою дееспособность, даю свое согласие Физическому лицу Романову Михаилу Александровичу, далее – Организация, сайт Организации: <Link href={'/'}>https://romanov-dev163.ru/</Link> на обработку своих персональных данных со следующими условиям:<br/><br/></p>
                <p>1. Данное Согласие дается на обработку персональных данных, как без использования средств автоматизации, так и с их использованием. Согласие дается на обработку следующих моих персональных данных: фамилия, имя, отчество; номер телефона; электронная почта; пользовательские данные (сведения о местоположении, тип и версия ОС, тип и версия Браузера, тип устройства и разрешение его экрана; источник, откуда пришел на сайт пользователь; с какого сайта или по какой рекламе; язык ОС и Браузера; какие страницы открывает и на какие кнопки нажимает пользователь; ip-адрес); данные обо мне, которые станут известны в ходе исполнения договоров (в случае заключения договора между мной и Организацией), а также иная общедоступная информация обо мне.<br/><br/></p>
                <p>2. Цель обработки персональных данных: обработка входящих запросов физических с целью оказания консультирования по различным вопросам, относящимся к сфере деятельности Организации; направление в адрес физических лиц информации, в том числе рекламной, о мероприятиях/товарах/услугах/работах Организации; аналитики действий физического лица на веб-сайте и функционирования веб-сайта.<br/><br/></p>
                <p>3. Основанием для обработки персональных данных является статья 24 Конституции Российской Федерации; статья 6 Федерального закона No 152-ФЗ «О персональных данных»; настоящее Согласие посетителя сайта на обработку персональных данных.<br/><br/></p>
                <p>4. В ходе обработки с персональными данными будут совершены следующие действия: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, предоставление, доступ), блокирование, удаление, уничтожение.<br/><br/></p>
                <p>5. Настоящим я уведомлен Организацией, что предполагаемыми пользователями персональных данных являются работники Организации, а также лица, привлеченные Организацией на условиях гражданско-правового договора.<br/><br/></p>
                <p>6. Я ознакомлен (а), что:<br/><br/></p>
                <p>6.1. настоящее Согласие на обработку моих персональных данных является бессрочным и может быть отозвано посредством направления мною уведомления на электронный адрес Организации: <Link href={'mailto:m.romanov.biz@gmail.com.ru'}>m.romanov.biz@gmail.com.ru</Link>.<br/><br/></p>
                <p>6.2. имею право на доступ к моим персональным данным, требовать уточнения (обновление, изменение) моих персональных данных, а также удаления и уничтожения моих персональных данных в случае их обработки Организацией, нарушающих мои законные права и интересы, законодательство Российской Федерации.<br/><br/></p>
                <p>6.3. в случае отзыва Согласия на обработку персональных данных Организация вправе продолжить обработку персональных данных без моего согласия при наличии оснований, указанных в пунктах 2.11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона No152-ФЗ «О персональных данных» от 27.07.2006 г.<br/><br/></p>
                <p>7. Настоящим Согласием я подтверждаю, что являюсь субъектом предоставляемых персональных данных, а также подтверждаю достоверность предоставляемых данных.<br/><br/></p>
                <p>8. Настоящее Согласие действует все время до момента прекращения обработки персональных данных, согласно п. 6.1 Согласия.</p>
            </div>
        </>
        
    )
}