import { useState } from 'react'
import '../css/Product-sections.css'
import feeders from '../assets/main-img/catalog/feeders.jpg'
import certainTypesFeed from '../assets/main-img/catalog/certain-types-feed.jpg'
import readymixes from '../assets/main-img/catalog/ready-mixes.jpg'
import readyMix from '../assets/main-img/ready-mixes/ready-mix.jpg'
import basket from "../assets/elements-icon/header-elements/basket.svg"


function Productsections() {
    const cards = [1, 2, 3, 4]; // можно заменить на реальные данные
    const weight = ['200 г', '400 г', '800 г', '1 кг'];

    // 👇 Сохраняем индекс активной кнопки для каждой карточки (по умолчанию 0)
    const [activeButtons, setActiveButtons] = useState(cards.map(() => 0));

    const handleClick = (cardIndex, btnIndex) => {
        const updated = [...activeButtons];
        updated[cardIndex] = btnIndex;
        setActiveButtons(updated);
    };

    return (
        <div className="main__bacground">
            <div className="catalog">
                <h2 className="catalog__title">Каталог</h2>
                <div className="catalog__content-container">
                    <div className="catalog__inner-container">
                        <img src={feeders} alt="feeders" className="catalog__inner-img" />
                        <h3 className="catalog__inner-title">Кормушки</h3>
                        <button className="catalog__inner-btn">Подробнее</button>
                    </div>
                    <div className="catalog__inner-container">
                        <img src={certainTypesFeed} alt="certain types" className="catalog__inner-img" />
                        <h3 className="catalog__inner-title">Готовые миксы</h3>
                        <p className="catalog__inner-description">(смеси кормов)</p>
                        <button className="catalog__inner-btn">Подробнее</button>
                    </div>
                    <div className="catalog__inner-container">
                        <img src={readymixes} alt="ready mixes" className="catalog__inner-img" />
                        <h3 className="catalog__inner-title">Отдельные виды кормов</h3>
                        <p className="catalog__inner-description">(зерен)</p>
                        <button className="catalog__inner-btn">Подробнее</button>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="products__about-products-container">
                    <h2 className="products__title">Готовые миксы</h2>
                    <button className="products__more">Eщё</button>
                </div>

                <div className="products__content-container">
                    {cards.map((_, cardIndex) => (
                        <div className="products__product-container" key={cardIndex}>
                            <img src={readyMix} alt="ready mixes" className="products__img" />
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
        </div>
    );
}

export { Productsections }
