import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from '../../App'


function ReadyMixes() {
    const data = useContext(userContext).readyMixes[0]
    const cards = [1, 2, 3, 4];
    const [activeButtons, setActiveButtons] = useState(cards.map(() => 0));
    const handleClick = (cardIndex, btnIndex) => {
        const updated = [...activeButtons];
        updated[cardIndex] = btnIndex;
        setActiveButtons(updated);
    };
    return (
        <div className="product__ready-mixes">
            <div className="products__about-products-container">
                <h2 className="products__title">{data.nameProducts}</h2>
                <button className="products__more">Eщё</button>
            </div>

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
                            <Link to={"/productPages/readyMixes"} className="product__details-btn">Подробнее</Link>
                            <button className="product__add-cart-btn">
                                <img src={data.basket} alt="basket" className="product__busket-img" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ReadyMixes }