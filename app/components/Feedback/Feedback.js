'use client'
import Image from "next/image";
import imageMe from '/public/me.png'
import './Feedback.sass'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { InputMask } from '@react-input/mask';

export default function Feedback({ onSuccess, onError }){
    const [agreeCheck, setAgree] = useState(true)
    const [message, setMessage] = useState('');
    const [statusPhone, setStatusPhone] = useState('');
    const [statusAgree, setStatusAgree] = useState('');
    const [responseStatus, setResponseStatus] = useState('')

    useEffect(()=>{
        console.log(message)
    },[message])


    const handleSubmit = async () => {
        if(agreeCheck && message.length == 18){
            try {
                const response = await fetch('/api/sendTelegramMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
                });
        
                const data = await response.json();
        
                if (data.success) {
                    setResponseStatus(true);
                    onSuccess()
                } else {
                    setResponseStatus(false);
                    onError()
                }
            } catch (error) {
                setResponseStatus(false);
                onError()
            }
        }if(message.length !== 18){
            setStatusPhone(true)
        }if(message.length == 18){
            setStatusPhone(false)
        }if(!agreeCheck){
            setStatusAgree(true)
        }if(agreeCheck){
            setStatusAgree(false)
        }
    };

    return(
        <section className="mb50 container center flex feedback">
            <div className="w60 md-w100">
                <h3 className="mb20 feedback_promo">Если вам нужна помощь в разработке сайта, обращайтесь! Я с радостью проконсультирую вас абсолютно <strong>БЕСПЛАТНО.</strong></h3>
                <h2 className="mb10">Оставьте свой номер телефона (без 8)</h2>
                <div className="flex feedback_input__block mb10">
                    <InputMask 
                        mask="+7 (___) ___-__-__" replacement={{ _: /\d/ }} 
                        id="userNumber"
                        className={`error`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="+7 (___) ___ __-__"
                        />
                    <div onClick={handleSubmit} className="button">Отправить</div>
                </div>
                {statusPhone && <span className="error-message">Некорректный номер телефона</span>}
                <div className="">
                    <input id="confidence" checked={agreeCheck} onChange={(e) => setAgree(e.target.checked)} type="checkbox"/>
                    <label htmlFor="confidence">Отправляя форму вы даете согласие на обработку персональных данных</label>
                </div>
                {statusAgree && <span className="error-message mb20">Без вашего согласия, увы, никак{'('}</span>}
                <h3 className="page-header mb20">А так-же напишите в мессенджерах!</h3>
                <div className="flex">
                    <Link className="fa-brands" href={'tg://resolve?domain=gp_romanov'} target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                    <Link className="fa-brands" href={'viber://chat?number=%2B791397561466/'}><i className="fa-brands fa-viber"></i></Link>
                    <Link className="fa-brands" href={'whatsapp://send?phone=79397561466'}><i className="fa-brands fa-whatsapp"></i></Link>
                </div>
            </div>
            <Image className="w30 md-w80" src={imageMe} alt="me"/>
            {responseStatus ?
                <div onClick={()=>{setResponseStatus('')}} className="modal">
                    <div className="modal_wrapper success">
                        <h2 className='page-header text-center'>Успешно!</h2>
                        <h3 className='page-subheader'>Ваше сообщение было отправлено ✅</h3>
                    </div>
                </div>
                : responseStatus === false ?
                <div onClick={()=>{setResponseStatus('')}} className="modal">
                    <div className="modal_wrapper success">
                        <h2 className='page-header text-center'>Ошибка!</h2>
                        <h3 className='page-subheader'>Похоже, на неполадки с сервером ❌</h3>
                    </div>
                </div>
                : null
            }
        </section>
    )
}