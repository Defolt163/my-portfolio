
import Link from 'next/link'
import './style.sass'

export default function portfolioPage(){
    return(
        <>
            <div className='about_me container'>
                <section className='about_me_introduction flex'>
                    <div className='about_me__image'></div>
                    <div className='about_me__content'>
                        <div className='page_header'>Романов Михаил</div>
                    </div>
                </section>
            </div>
            <ul className='link_block'>
                <li><Link href={'#'}>Вступление</Link></li>
                <li><Link href={'#'}>Образование</Link></li>
                <li><Link href={'#'}>Стек</Link></li>
            </ul>
        </>
        
    )
}