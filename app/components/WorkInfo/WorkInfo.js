'use client'
import Image from "next/image";
import './WorkInfo.sass'
import Link from "next/link";
import Feedback from "@/app/components/Feedback/Feedback";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import workArrayData from '/app/portfolio.json'

export default function WorkInfo(){
    const location = usePathname()
    const [workData, setWorkData] = useState(null)
    useEffect(() => {
        const pathParts = location.split("/"); // Разбиваем путь
        const currentId = pathParts[pathParts.length - 1]; // Получаем ID
        const foundData = workArrayData.find((entry) => entry.id === currentId); // Ищем данные
        setWorkData(foundData || null); // Устанавливаем данные или null
    }, [location])

    return(
        <>
            <div className="center container mb50 portfolio_page">
                <h3 className="page-header mb20">{workData && workData.name !== "" ? workData.name : null}</h3>
                <ul className="flex links_block mb20">
                    <li><Link href={'/'}>Главная</Link></li>
                    {'>'}
                    <li><Link href={'/portfolio'}>Портфолио</Link></li>
                    {'>'}
                    <li>{workData && workData.name !== "" ? workData.name : null}</li>
                </ul>
                <Image className="portfolio_image container center" src={`${workData && workData.image !== "" ? workData.image : '/' }`} alt="presentation" width={900} height={900}/>
                <Link style={{marginTop: "20px", display: "block"}} href={`${workData && workData.link !== "" ? workData.link : "#"}`}>{workData && workData.link !== "" ? ("Перейти в проект " + workData.name) : null}</Link>
            </div>
            <Feedback/>
        </>
        
    )
}