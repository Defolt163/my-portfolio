import Portfolio from "../components/Portfolio/Portfolio";
import './style.sass'
import Customers from "../components/Customers/Customers";
import FeedbackContainer from "../components/Feedback/FeedbackContainer";
import Link from "next/link";
export const metadata = {
    title: "Портфолио || Gp.Romanov",
    description: "Generated by create next app",
  };
export default function portfolioPage(){
    return(
        <>
            <div className="reference container center">
                <h1 className="page-header mb20">Справочник</h1>
                <div className="reference_block flex">
                    <Link className="reference_link" href={'/docs/confidence'}>Согласие на обработку персональных данных</Link>
                    <Link className="reference_link" href={'/docs/policy'}>Политика конфиденциальности</Link>
                </div>
            </div>
        </>
        
    )
}