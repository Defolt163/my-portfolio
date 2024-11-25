import Portfolio from "../components/Portfolio/Portfolio";
import './style.sass'
import Customers from "../components/Customers/Customers";
import FeedbackContainer from "../components/Feedback/FeedbackContainer";
export const metadata = {
    title: "Портфолио || Gp.Romanov",
    description: "Портфолио моих работ",
  };
export default function portfolioPage(){
    return(
        <>
            <div className="mb50 portfolio_page">
                <Portfolio/>
            </div>
            <FeedbackContainer/>
            <Customers/>
        </>
        
    )
}