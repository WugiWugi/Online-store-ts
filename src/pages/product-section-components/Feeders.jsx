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
                    <div className="products__product-container" key={cardIndex}>
                        <img src={feeders} alt="ready mixes" className="products__img" />
                        <h3 className="products__product-title">Комплект-агро<br />"Избушка на курьих<br />ножках"</h3>
                        <p className="products__product-description">Кормушка Малая</p>
                        <p className="products__product-price">1000 руб.</p>
                        <div className="products__product__btn-container">
                            <button className="products__product-details-btn">Подробнее</button>
                            <button className="products__product-add-cart-btn">
                                <img src={basket} alt="basket" className="products__product-busket-img" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Feeders }