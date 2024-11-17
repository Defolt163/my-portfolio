import Link from "next/link";
import './Header.sass'

export default function Header() {
  return (
    <header className="flex">
        <ul className="link_header__block flex">
            <li><Link className="link_header__block_item active" href={'/'}><i className="fa-solid fa-house"></i><span>Главная</span></Link></li>
            <li><Link className="link_header__block_item" href={'/about'}><i className="fa-regular fa-circle-user"></i><span>О мне</span></Link></li>
            <li><Link className="link_header__block_item" href={'/portfolio'}><i className="fa-solid fa-person-digging"></i><span>Портфолио</span></Link></li>
            <li><Link className="link_header__block_item" href={'/'}><i className="fa-solid fa-mobile"></i><span>Заказать</span></Link></li>
        </ul>
    </header>
  );
}
