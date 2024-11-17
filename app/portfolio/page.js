
import Feedback from "@/app/components/Feedback/Feedback";
import Portfolio from "../components/Portfolio/Portfolio";
import './style.sass'
import Customers from "../components/Customers/Customers";

export default function portfolioPage(){
    return(
        <>
            <div className="mb50 portfolio_page">
                <Portfolio/>
            </div>
            <Feedback/>
            <Customers/>
        </>
        
    )
}