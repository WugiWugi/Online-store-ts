import { useState } from 'react'
import readyMixJpg from '../../assets/main-img/ready-mixes/ready-mix.jpg'
import basket from "../../assets/elements-icon/header-elements/basket.svg"

function ReadyMixes() {
    const cards = [1, 2, 3, 4];
    const weight = ['200 г', '400 г', '800 г', '1 кг'];
    const [activeButtons, setActiveButtons] = useState(cards.map(() => 0));
    const handleClick = (cardIndex, btnIndex) => {
        const updated = [...activeButtons];
        updated[cardIndex] = btnIndex;
        setActiveButtons(updated);
    };
    return (
        <div className="product__ready-mixes">
            <div className="products__about-products-container">
                <h2 className="products__title">Готовые миксы</h2>
                <button className="products__more">Eщё</button>
            </div>

            <div className="products__content-container">
                {cards.map((_, cardIndex) => (
                    <div className="products__product-container" key={cardIndex}>
                        <img src={readyMixJpg} alt="ready mixes" className="products__img" />
                        <h3 className="products__product-title">PADOVAN OVOMIX<br />GOLD ROSSO</h3>
                        <p className="products__product-description">Корм для птиц</p>
                        <p className="products__product-price">1000 руб.</p>

                        <div className="products__product-weight-container">
                            {weight.map((label, btnIndex) => {
                                const isActive = activeButtons[cardIndex] === btnIndex;
                                return (
                                    <button
                                        key={btnIndex}
                                        className={`products__product-weight-btn ${isActive ? 'btn-weight-active' : ''}`}
                                        onClick={() => handleClick(cardIndex, btnIndex)}>
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

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

export { ReadyMixes }