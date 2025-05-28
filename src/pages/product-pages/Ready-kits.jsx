import { useState, useContext } from 'react'
import GrainJpg from '../../assets/main-img/Grains/grain.jpg'
import basket from "../../assets/elements-icon/header-elements/basket.svg"
import { userContext } from '../../App'

function ReadyKits() {
    const data = useContext(userContext).readyKits[0]
    const cards = [1, 2, 3, 4];
    const [activeButtons, setActiveButtons] = useState(cards.map(() => 0));
    const handleClick = (cardIndex, btnIndex) => {
        const updated = [...activeButtons];
        updated[cardIndex] = btnIndex;
        setActiveButtons(updated);
    };
    return (
        <div className="products__content-container">
            {cards.map((_, cardIndex) => (
                <div className="product__container" key={cardIndex}>
                    <img src={data.src} alt={data.alt} className="product__img" />
                    <h3 className="product__title">{data.nameProduct}</h3>
                    <p className="product__description">{data.description}</p>
                    <p className="product__price">{`${data.prise} руб.`}</p>

                    <div className="product__weight-container">
                        {data.weight.map((label, btnIndex) => {
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
    )
}

export { ReadyKits }