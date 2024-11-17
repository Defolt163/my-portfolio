import Link from "next/link";
import './Portfolio.sass'

export default function Portfolio() {
  return (
    <section className="mb50 container center">
        <h3 className='page-header mb20'>
            Портфолио
        </h3>
        <div className="flex">
            <Link href={'/portfolio/1'} className="portfolio_card">
                <div className="portfolio_card__image" style={{backgroundImage: 'url(/portfolio-sites/sateco.ru_.png)'}}></div>
                <h3 className="portfolio_card__name mt10">Hello world</h3>
            </Link>
        </div>
    </section>
  );
}
