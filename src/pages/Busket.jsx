import '../css/Busket.css';
import { BackElement } from './Back-element.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { restartBusket, removeFromBusketByIndex, updateProductQuantity } from '../features/users/usersSlice';
import busket from "../assets/busket-img/busket-img.svg";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Busket() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.users.busket);
    const totalSum = products.reduce((sum, product) => {
        return sum + (product.totalPrice || product.price);
    }, 0);
    const handleDecrease = (index) => {
        const quantity = products[index].quantity || 1;
        if (quantity > 1) {
            dispatch(updateProductQuantity({ index, quantity: quantity - 1 }));
        } else {
            dispatch(removeFromBusketByIndex(index));
        }
    };

    const handleIncrease = (index) => {
        const quantity = products[index].quantity || 1;
        dispatch(updateProductQuantity({ index, quantity: quantity + 1 }));
    };


    return (
        <div className="main__bacground">
            <div className="back__container">
                <BackElement />
            </div>
            <div className="busket__content-container">
                <h2 className="busket__title">Корзина</h2>
                <div className="busket__element-container">
                    {products.map((product, index) => (
                        <div className="busket__product-container" key={index}>
                            <img src={busket} alt={product.alt} className="busket__product-img" />
                            <div className="busket__product-information-container">
                                <div className="busket__product-title-container">
                                    <h3 className="busket__product-title">
                                        {`${product.name} ${product.description} ${product.weight}`}
                                    </h3>
                                    <p className="busket__product-articul">{`Артикул ${product.articul}`}</p>
                                </div>
                                <div className="busket__product-information-price-container">
                                    <p className="busket__product-information-price">
                                        <span className='busket__product-wan'>Цена за 1 шт:</span> {`${product.price} руб.`}
                                    </p>
                                </div>
                            </div>
                            <div className="busket__product-price-container">
                                <p className="product-pages__quantity-text">Количество:</p>
                                <div className="product-pages__add-button-container">
                                    <button onClick={() => handleDecrease(index)} className="product-pages__product-reduce-btn">--</button>
                                    <span className="product-pages__product-quantity-number">{product.quantity}</span>
                                    <button onClick={() => handleIncrease(index)} className="product-pages__product-add-btn">+</button>
                                </div>
                                <p className="busket__product-price">
                                    <span className="busket__product-total">Итого:</span> {`${product.totalPrice} руб.`}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="busket__buy-container">
                    <Link to={`${totalSum !== 0 ? '/formPayment' : '/busket'}`} className="busket__buy-btn">Оплатить</Link>
                </div>
            </div>
        </div>
    );
}

export { Busket };