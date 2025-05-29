import { useState, useEffect, useContext } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { userContext } from '../App'
import { BackElement } from './Back-element.jsx'
function CatalogPages() {
    const data = useContext(userContext)
    const { catalogPagesName } = useParams()
    const items = data[catalogPagesName][0] || []
    const cards = Array(8).fill(0).map((_, i) => i + 1)
    const [activeButtons, setActiveButtons] = useState(cards.map(() => 0));
    const location = useLocation()
    const handleClick = (cardIndex, btnIndex) => {
        const updated = [...activeButtons];
        updated[cardIndex] = btnIndex;
        setActiveButtons(updated);
    };
    useEffect(() => {
        setActiveButtons(cards.map(() => 0))
    }, [location.pathname])
    return (
        <div className="main__bacground main__bacground--">
            <div className="products-pages">
                <nav className="pages__navigation-list-container">
                    <ul className="pages__navigation-list">
                        <li className="pages__navigation__list-item">Каталог</li>
                        <li className="pages__navigation__list-item navigation__list-item--">{items.nameProducts}</li>
                    </ul>
                </nav>
                <BackElement />
                <div className="products-pages__product-content-container">
                    {cards.map((_, cardIndex) => {
                        const price = items.price * (activeButtons[cardIndex] + 1);
                        return <div className="product__container" key={cardIndex}>
                            <img src={items.src} alt={items.alt} className="product__img" />
                            <h3 className="product__title">{items.nameProduct}</h3>
                            <p className="product__description">{items.description}</p>
                            <p className="product__price">{`${price} руб.`}</p>
                            {items.weight.map((weight, btnIndex) => {
                                const isActive = activeButtons[cardIndex] === btnIndex;
                                return (
                                    <button
                                        key={btnIndex}
                                        className={`product__weight-btn ${isActive ? 'btn-weight-active' : ''}`}
                                        onClick={() => handleClick(cardIndex, btnIndex)}>
                                        {weight}
                                    </button>
                                )
                            })}
                            <div className="product__btn-container">
                                <button className="product__details-btn">Подробнее</button>
                                <button className="product__add-cart-btn">
                                    <img src={items.basket} alt="basket" className="product__busket-img" />
                                </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export { CatalogPages }