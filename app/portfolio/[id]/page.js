import Image from "next/image";
import './style.sass'
import Link from "next/link";
import Feedback from "@/app/components/Feedback/Feedback";


export default function workPage(){
    return(
        <>
            <div className="center container mb50 portfolio_page">
                <h3 className="page-header mb20">Транспортная компания СаТЭКО</h3>
                <ul className="flex links_block mb20">
                    <li><Link href={'/'}>Главная</Link></li>
                    {'>'}
                    <li><Link href={'/'}>Портфолио</Link></li>
                    {'>'}
                    <li>Сатэко</li>
                </ul>
                <Image className="portfolio_image container center" src={'/portfolio-sites/sateco.ru_.png'} alt="presentation" width={900} height={900}/>
                <Link style={{marginTop: "20px", display: "block"}} href={'/'}>Сайт компании САТЭКО</Link>
            </div>
            <Feedback/>
        </>
        
    )
}