import '../css/Busket.css'
import { BackElement } from './Back-element.jsx'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restartBusket, removeFromBusketByIndex } from '../features/users/usersSlice';
import busket from "../assets/busket-img/busket-img.svg"
import { Link } from 'react-router-dom';
function Busket() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.users.busket)
    const cards = Array(products.length).fill(0).map((_, i) => i + 1)
    const [productQuantity, setProductQuantity] = useState(cards.map(() => 1))
    const totalSum = products.reduce((sum, product, index) => {
        return sum + product.price * (productQuantity[index] || 1);
    }, 0);
console.log(products)

    return (
        <div className="main__bacground">
            <BackElement />
            <h2 className="busket__title">Корзина</h2>
            <div className="busket__content-container">
                <div className="busket__element-container">
                    {products.map((products, index) => {

                        return (
                            <div className="busket__product-container" key={index}>
                                <img src={busket} alt={products.alt} className="busket__product-img" />
                                <div className="busket__product-information-container">
                                    <div className="busket__product-title-container">
                                        <h3 className="busket__product-title">{`${products.name} ${products.description} ${products.weight}`}</h3>
                                        <p className="busket__product-articul">{`Артикул ${products.articul}`}</p>

                                    </div>
                                    <div className="busket__product-information-price-container">
                                        <p className="busket__product-information-price"><span className='busket__product-wan'>Цена за 1 шт:</span> {`${products.initialСost} руб.`}</p>
                                    </div>
                                </div>
                                <div className="busket__product-price-container">
                                    <p className="product-pages__quantity-text">Количество:</p>
                                    <div className="product-pages__add-button-container">
                                        <button onClick={() => {
                                            if (productQuantity[index] > 1) {
                                                setProductQuantity(prev =>
                                                    prev.map((qty, i) => (i === index ? qty - 1 : qty))
                                                );
                                            } else {
                                                dispatch(removeFromBusketByIndex(index));
                                                setProductQuantity(prev => prev.filter((_, i) => i !== index));
                                            }
                                        }} className="product-pages__product-reduce-btn">--</button>
                                        <span className="product-pages__product-quantity-number">{productQuantity[index]}</span>
                                        <button onClick={() => { setProductQuantity(prev => prev.map((qty, i) => (i === index ? qty + 1 : qty))) }} className="product-pages__product-add-btn">+</button>
                                    </div>
                                    <p className="busket__product-price"><span className="busket__product-total">Итого:</span> {`${productQuantity[index] * products.price} руб.`}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="busket__buy-container">
                    <Link to="/formPayment" className="busket__buy-btn">Оплатить</Link>
                </div>
            </div>
        </div>
    )
}

export { Busket }