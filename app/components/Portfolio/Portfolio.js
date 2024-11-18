import Link from "next/link";
import './Portfolio.sass'
import sitesData from '/app/portfolio.json'

export default function Portfolio() {
  return (
    <section className="mb50 container center">
        <h3 className='page-header mb20'>
            Портфолио
        </h3>
        <div className="flex portfolio_block__wrapper">
          {sitesData.map((work) =>(
            <Link key={work.id} href={`/portfolio/${work.id}`} className="portfolio_card">
                <div className="portfolio_card__image" style={{backgroundImage: `url(${work.image})`}}></div>
                <h3 className="portfolio_card__name mt10">{work.name}</h3>
            </Link>
          ))}
        </div>
    </section>
  );
}
