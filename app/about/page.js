import Link from 'next/link'
import './style.sass'
import FeedbackContainer from '../components/Feedback/FeedbackContainer';
export const metadata = {
    title: "Обо мне || Gp.Romanov",
    description: "Меня зовут Михаил, я веб-разработчик из Самары. Специализируюсь на создании лендингов, корпоративных сайтов, веб-приложений и интернет-магазинов с акцентом на качество, удобство и эстетику. Моя миссия — находить эффективные решения для ваших задач.",
  };
export default function aboutPage(){
    return(
        <>
            <div className='min-[900px]:pt-[130px] flex flex-row-reverse'>
                <div id='introduction' className='about_me flex h-full container'>
                    <section className='about_me_introduction flex'>
                        <div className='about_me__image_block'>
                            <div className='about_me__image mb10'></div>
                            <h2 style={{textAlign: 'center'}}>Samara</h2>
                        </div>
                        <div className='about_me__content'>
                            <div className='page-header name'>Романов Михаил</div>
                            <h3 className='birthday'>19.01.2002</h3>
                            <div className='page-subheader mb10 font-light dev'>Веб-разработчик</div>
                            <ul className='flex smm_block mb20'>
                                <li><Link href={'https://github.com/Defolt163'} target='_blank'  className='button btn_about__me'><i className="fa-brands fa-github"></i> GitHub</Link></li>
                                <li><Link href={'https://t.me/gp_romanov'} target='_blank'  className='button btn_about__me'><i className="fa-brands fa-telegram"></i> Telegram</Link></li>
                                <li><Link href={'https://samara.hh.ru/resume/98b38a72ff09486ab30039ed1f7867524d6248'} target='_blank' className='button btn_about__me'>hh.ru</Link></li>
                                <li><Link href={'https://www.avito.ru/samara/predlozheniya_uslug/veb_razrabotka_saytov_i_veb_prilozheniy_pod_klyuch_4130968742'} target='_blank' className='button btn_about__me'>Avito</Link></li>
                            </ul>
                            <div className='page-content mb50'>
                                <p className='mb10'>
                                    Меня зовут Михаил, я веб-разработчик из Самары. Моя специализация — создание корпоративных сайтов, веб-приложений, лендингов и интернет-магазинов.<br/><br/>

                                    С 2022 года я работаю с современным фреймворком React и его расширением Next.js, создавая удобные, производительные и элегантные веб-продукты. Мой путь в веб-разработке начался в 2021 году с изучения HTML, CSS и JavaScript, что стало прочной основой для моего профессионального роста.<br/><br/>

                                    Помимо разработки, у меня есть опыт в создании дизайна пользовательских интерфейсов, что позволяет мне находить гармонию между функциональностью и эстетикой в каждом проекте.<br/><br/>

                                    Я окончил 11 классов, колледж связи ПГУТИ, и в данный момент учусь в Поволжском государственном университете телекоммуникаций и информатики на факультете информационных систем и технологий. Моя специальность — сети связи и системы коммутации, обучение проходит в очно-заочной форме.<br/><br/>

                                    Я искренне люблю свое дело и стремлюсь развиваться как профессионал. В университете я являюсь активным участником студенческой жизни: принимаю участие в мероприятиях, состою в профкоме, нахожусь на посту председателя факультета информатики и вычислительной техники. А так-же, активно выступаю в качестве волонтера.<br/><br/>

                                    Для меня важно находить простые решения сложных задач, объединяя технологии и пользовательский опыт.
                                </p>
                                <h3 id='education' className='page-header'>Образование</h3>
                                <h3 className='page-subheader font-light mb20'>Неоконченное высшее</h3>
                                <div className='education_block'>
                                    <div className='education__item flex'>
                                        <div className='education__item_year'>2022-2026</div>
                                        <div className='education__item_college'>Поволжский государственный университет телекоммуникаций и информатики, Самара</div>
                                    </div>
                                    <div className='education__item flex'>
                                        <div className='education__item_year'>2022</div>
                                        <div className='education__item_college'>Колледж связи при Поволжском государственном университете телекоммуникаций и информатики, Самара</div>
                                    </div>
                                </div>
                                <h3 id='stack' className='page-header'>Мой стек</h3>
                                <h3 className='page-subheader font-light mb20'>Инструменты, которыми я владею</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Js</li>
                                    <li>Figma</li>
                                    <li>ReactJs</li>
                                    <li>NextJs</li>
                                    <li>WebSocket</li>
                                    <li>MySQL</li>
                                    <li>Git</li>
                                    <li>Flex</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                    <li>Jquery</li>
                                    <li>Node js</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Premiere pro</li>
                                    <li>Blender</li>
                                </ul>
                                <h3 className='page-subheader font-light mb20'>И этот список постоянно увеличивается</h3>
                                <h3 id='projects' className='page-header'>Пара слов о выполненных проектах</h3>
                                <h3 id='sateco' className='page-subheader font-light mb20  mt-6'>САТЭКО</h3>
                                <p>
                                    Был выполнен заказ по созданию сайта для транспортной компании:
                                    <Link href='https://sateco.ru/' target='_blank' className='button mb10 mt-2'>САТЭКО</Link>
                                    Дизайн и разработку. Все делал сам.<br/>
                                    GitHub показать не могу, т.к там используются ключи к базе данных и админ панели. Это был мой первый многостраничный сайт написанный на ReactJs. После него я как раз таки пересел на NextJS ради серверного рендеринга и удобного роутера. На этом сайте тоже реализована админ панель на которой можно размещать либо удалять записи с вакансиями, а на странице {"Вакансии"} реализовано получение вакансий с базы данных. Организована функциональность форм, анимации. Данные с формы отправляются на эл. почту
                                </p>
                                <h3 id='mera' className='page-subheader font-light mb20  mt-6'>МЕРА БИТУМ</h3>
                                <p>
                                    Заказ по созданию сайта. Дизайн, верстка, функциональность форм. NextJs
                                    <Link href={'https://bitum-pbv.ru/'} target='_blank' className='button mb10 mt-2'>МЕРА</Link>
                                </p>
                                <h3 id='housesincity' className='page-subheader font-light mb20 mt-6'>Домик в городе</h3>
                                <p>
                                    Заказ по созданию сайта. Букинга загородных домов
                                    <Link href={'https://снятьдомвсамаре.рф/'} target='_blank' className='button mb10 mt-2'>снятьдомвсамаре</Link>
                                    Дизайн был создан заказчиком через конструктор сайтов tilda. Был мной перенесен на React. <br/>База данных: firebase, админ панель, рандомная загрузка карточек товара на главной странице, сортировка. Написан на чистом React
                                </p>
                                <h3 id='pet' className='page-subheader font-light mb20'>Пет-проект</h3>
                                <p>
                                    Время от времени веду свой пет проект приложения такси, на NextJs. Бд mysql, сообщение между приложениями по ws, карты и маршрут - geoapify, расчет маршрута. Настроено pwa, приложение на android собрано через cordova. Аутентификация проходит по коду, отправленному на Email: Код генерируется на сервере и сохраняется в кратковременную бд Redis на 5 минут, затем отправляется на Email. Далее авторизация проходит записью JWT в куки и ls. Срок жизни куки 7дней. Информация о заказах приходит в зашифрованном виде, с помощью алгоритма aes-256-cbc
                                    <Link href={'https://github.com/Defolt163/taxicap'} target='_blank' className='button mb10 mt-2'>GitHub</Link>
                                </p>
                                <h3 id='training' className='page-subheader font-light mb20  mt-6'>Тренировочные проекты</h3>
                                <p>
                                    Мой первый проект интернет магазина на NextJs. Изначально подключал базу данных через готовый fetch api, использовал для этого сервис mockapi.io
                                    
                                    Он довольно сырой, некоторых страниц там нет.
                                </p>
                                <div className='flex my-2'>
                                    <Link href={'https://emag-store-3amj.vercel.app/'} target='_blank' className='button mr-2'>Сайт</Link>
                                    <Link href={'https://github.com/Defolt163/EMAGStore'} target='_blank' className='button'>GitHub</Link>
                                </div>
                                <p>
                                    Имеется еще один {"интернет магазин"} Здесь ситуация уже получше
                                    
                                    В этот проект я подключил уже базу данных mysql через rest api и настройке роутов. БД стоит на бесплатном хосте, поэтому периодически возможна долгая загрузка либо слет бд. Так-же написал админ панель, находится по адресу /admin в которой можно изменять статус заказа.<br/>

                                    По большей части упор в этих проектах был сделан на функциональность.
                                    Реализована система аккаунтов, т.е у каждого пользователя свои данные, свои элементы в корзине. Это, практически первые шаги моей разработки в среде NextJS
                                </p>
                                <div className='flex mt-2'>
                                    <Link href={'https://stealth-shop.vercel.app/'} target='_blank' className='button mr-2'>Сайт</Link>
                                    <Link href={'https://github.com/Defolt163/stealth-shop'} target='_blank' className='button'>GitHub</Link>
                                </div>
                                <h3 id='webgl' className='page-subheader font-light mb20  mt-6'>WebGL 3D сцены</h3>
                                <p>
                                    Погружение и изучение мира 3D графики в браузере, с помощью технологии WebGL
                                    Использовал библиотеку THREE.js. Для управления сценой заюзал @react-three/drei и @react-three/fiber для отрисовки сцены
                                </p>
                                <ul className='list-disc list-inside'>
                                    <li className='ml-3'>
                                        📦 Структура сцен:
                                        <ul className='ml-6 list-disc list-inside'>
                                            <li>
                                                Использовано одно Canvas, внутри которого динамически рендерятся 3 сцены:
                                                <ul className='ml-9 list-decimal list-inside'>
                                                    <li>Телефон</li>
                                                    <li>Машина</li>
                                                    <li>Пассажир</li>
                                                    <i>Каждая сцена обернута в &lt;a.group&gt; с анимацией scale и rotation.</i>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    🔁 Анимация и прокрутка:<br/>
                                            Использован ScrollControls и useScroll из drei.<br/>
                                            По значению прокрутки (scroll.offset * 3) определяется текущая сцена.<br/>
                                            Переход между сценами происходит через useSpring.<br/>
                                </p>
                                <p>
                                    📱 Адаптация под экран:<br/>
                                    Отслеживается window.innerWidth с помощью useEffect.<br/>
                                    Модифицируется camera.fov и позиционирование объектов в зависимости от ширины экрана.
                                </p>
                                <p>
                                    📜 Прокрутка:<br/>
                                    Сначала заблокирована прокрутка body (overflow: hidden), пока пользователь не доскроллит до конца 3D-сцен.<br/>
                                    После — overflowY: scroll возвращается для обычной HTML-прокрутки.
                                </p>
                                <p>
                                    🧠 Поведение элементов:<br/>
                                    Использованы &lt;Html&gt; и &lt;Text&gt; внутри 3D-сцен.<br/>

                                    Для некоторых элементов добавлена анимация появления/исчезновения (motion.div).<br/>

                                    Применены Billboard и OrthographicCamera для фиксации объектов.
                                </p>
                                <div className='flex mt-2'>
                                    <Link href={'https://test-web-gl-sepia.vercel.app/'} target='_blank' className='button mr-2'>Приложение</Link>
                                    <Link href={'https://github.com/Defolt163/testWebGL'} target='_blank' className='button'>GitHub</Link>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
                <ul className='about__link_block'>
                    <li>— <Link href={'#introduction'}>Вступление</Link></li>
                    <li>— <Link href={'#education'}>Образование</Link></li>
                    <li>— <Link href={'#stack'}>Стек</Link></li>
                    <li>— <Link href={'#projects'}>Пара слов о проектах</Link>
                        <ul>
                            <li>— <Link href={'#sateco'}>САТЭКО</Link></li>
                            <li>— <Link href={'#mera'}>МЕРА БИТУМ</Link></li>
                            <li>— <Link href={'#housesincity'}>Домик в городе</Link></li>
                            <li>— <Link href={'#pet'}>Пет-проект</Link></li>
                            <li>— <Link href={'#training'}>Тренировочные проекты</Link></li>
                            <li>— <Link href={'#webgl'}>WebGL 3D</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <FeedbackContainer/>
        </>
        
    )
}
