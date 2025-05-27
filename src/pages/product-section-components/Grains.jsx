import { useState } from 'react'
import GrainJpg from '../../assets/main-img/Grains/grain.jpg'
import basket from "../../assets/elements-icon/header-elements/basket.svg"

function Grains() {
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
                <h2 className="products__title">Зёрна</h2>
                <button className="products__more">Eщё</button>
            </div>

            <div className="products__content-container">
                {cards.map((_, cardIndex) => (
                    <div className="product__container" key={cardIndex}>
                        <img src={GrainJpg} alt="ready mixes" className="product__img" />
                        <h3 className="product__title">Корм для птиц Rio<br />Линька</h3>
                        <p className="product__description">для волнистых попугайчиков</p>
                        <p className="product__price">1000 руб.</p>

                        <div className="product__weight-container">
                            {weight.map((label, btnIndex) => {
                                const isActive = activeButtons[cardIndex] === btnIndex;
                                return (
                                    <button
                                        key={btnIndex}
                                        className={`product__weight-btn ${isActive ? 'btn-weight-active' : ''}`}
                                        onClick={() => handleClick(cardIndex, btnIndex)}>
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

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

export { Grains }