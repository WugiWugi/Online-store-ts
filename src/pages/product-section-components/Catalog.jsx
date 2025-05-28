import feedersJpg from '../../assets/main-img/catalog/feeders.jpg'
import certainTypesFeedJpg from '../../assets/main-img/catalog/certain-types-feed.jpg'
import readyMixesJpg from '../../assets/main-img/catalog/ready-mixes.jpg'
import { Link } from 'react-router-dom'

function Catalog() {

    return (
        <div className="catalog">
            <h2 className="catalog__title">Каталог</h2>
            <div className="catalog__content-container">
                <div className="catalog__inner-container">
                    <img src={feedersJpg} alt="feeders" className="catalog__inner-img" />
                    <h3 className="catalog__inner-title">Кормушки</h3>
                    <Link className="catalog__inner-btn--">Подробнее</Link>
                </div>
                <div className="catalog__inner-container">
                    <img src={certainTypesFeedJpg} alt="certain types" className="catalog__inner-img" />
                    <h3 className="catalog__inner-title">Готовые миксы</h3>
                    <p className="catalog__inner-description">(смеси кормов)</p>
                    <Link className="catalog__inner-btn">Подробнее</Link>
                </div>
                <div className="catalog__inner-container">
                    <img src={readyMixesJpg} alt="ready mixes" className="catalog__inner-img" />
                    <h3 className="catalog__inner-title">Отдельные виды кормов</h3>
                    <p className="catalog__inner-description">(зерен)</p>
                    <Link className="catalog__inner-btn">Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

export { Catalog }