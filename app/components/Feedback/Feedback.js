import Image from "next/image";
import imageMe from '/public/me.png'
import './Feedback.sass'
import Link from "next/link";

export default function Feedback(){
    return(
        <section className="mb50 container center flex feedback">
            <div className="w60 md-w100">
                <h3 className="mb20 feedback_promo">Если вам нужна помощь в разработке сайта, обращайтесь! Я с радостью проконсультирую вас абсолютно <strong>БЕСПЛАТНО.</strong></h3>
                <div className="flex mb10">
                    <input placeholder="+7 (___) ___ __-__" id="userNumber"/>
                    <div className="button">Отправить</div>
                </div>
                <div className="mb20">
                    <input id="confidence" type="checkbox"/>
                    <label htmlFor="confidence">Отправляя форму вы даете согласие на обработку персональных данных</label>
                </div>
                <h3 className="page-header mb20">А так-же в мессенджерах!</h3>
                <div className="flex">
                    <Link className="fa-brands" href={'https://t.me/gp_romanov'} target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                    <Link className="fa-brands" href={'/'}><i className="fa-brands fa-viber"></i></Link>
                    <Link className="fa-brands" href={'/'}><i className="fa-brands fa-whatsapp"></i></Link>
                </div>
            </div>
            <Image className="w30 md-w80" src={imageMe} alt="me"/>
        </section>
    )
}