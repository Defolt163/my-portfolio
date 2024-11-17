'use client'
import Link from "next/link";
import './Header.sass'
import ModalGetOrder from "../ModalGetOrder/ModalGetOrder";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  useEffect(() => {
    console.log("Current route:", pathname); // Теперь должно работать
  }, [pathname]);
  const isActive = (link) => {
    return pathname === link ? 'active' : ''
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <header className="flex">
        <ul className="link_header__block flex">
            <li><Link className={`link_header__block_item ${isActive('/')}`} href={'/'}><i className="fa-solid fa-house"></i><span>Главная</span></Link></li>
            <li><Link className={`link_header__block_item ${isActive('/about')}`} href={'/about'}><i className="fa-regular fa-circle-user"></i><span>Обо мне</span></Link></li>
            <li><Link className={`link_header__block_item ${isActive('/portfolio')}`} href={'/portfolio'}><i className="fa-solid fa-person-digging"></i><span>Портфолио</span></Link></li>
            <li><div className={`link_header__block_item`} onClick={()=>{setIsModalOpen(true)}}><i className="fa-solid fa-mobile"></i><span>Связаться</span></div></li>
        </ul>
    </header>
    <div className="header_shadow"></div>
    <div>{isModalOpen == true ? <ModalGetOrder onClose={closeModal}/> : null}</div>
    </>
  );
}
