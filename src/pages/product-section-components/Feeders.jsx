import feeders from '../../assets/main-img/feeders/Feeder.jpg'
import basket from "../../assets/elements-icon/header-elements/basket.svg"

function Feeders() {
    const cards = [1, 2, 3, 4]
    return (
        <div className="product__bird-species">
            <div className="products__about-products-container">
                <h2 className="products__title">Кормушки</h2>
                <button className="products__more">Eщё</button>
            </div>
            <div className="products__content-container">
                {cards.map((_, cardIndex) => (
                    <div className="product__container" key={cardIndex}>
                        <img src={feeders} alt="ready mixes" className="product__img" />
                        <h3 className="product__title">Комплект-агро<br />"Избушка на курьих<br />ножках"</h3>
                        <p className="product__description">Кормушка Малая</p>
                        <p className="product__price">1000 руб.</p>
                        <div className="product__btn-container">
                            <button className="product__details-btn">Подробнее</button>
                            <button className="product__add-cart-btn">
                                <img src={basket} alt="basket" className="product__busket-img" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Feeders }