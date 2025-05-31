'use client'
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import './WorkInfo.sass'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import workArrayData from '/app/portfolio.json'
import FeedbackContainer from "../../components/Feedback/FeedbackContainer";


export default function workPage(){
    return(
        <>
            <div className="center mb50 portfolio_page">
                <h3 className="page-header mb20">REVVO 3D WebGL Приложение</h3>
                <Breadcrumb className="breadcrumb mb20">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/portfolio">Портфолио</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="breadcrumb__active">REVVO WebGL Приложение</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <iframe src="https://test-web-gl-sepia.vercel.app/" className='w-full h-dvh'/>
            </div>
            <FeedbackContainer/>
        </>
        
    )
}

function WorkInfo(){
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
                <Breadcrumb className="breadcrumb mb20">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/portfolio">Портфолио</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="breadcrumb__active">{workData && workData.name !== "" ? workData.name : null}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Image className="portfolio_image container center" src={`${workData && workData.image !== "" ? workData.image : '/' }`} alt="presentation" width={900} height={900}/>
                <Link style={{marginTop: "20px", display: "block"}} href={`${workData && workData.link !== "" ? workData.link : "#"}`}>{workData && workData.link !== "" ? ("Перейти в проект " + workData.name) : null}</Link>
            </div>
            <FeedbackContainer/>
        </>
        
    )
}