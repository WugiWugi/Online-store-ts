import React, { useState, useContext, FC } from 'react';
import { useDispatch } from 'react-redux';
import { pushBusket, Product } from '../../features/users/usersSlice';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

interface ReadyMixesProduct {
  nameProducts: string;
  nameProductPages: string;
  articul: string;
  description: string;
  weight: string[];
  price: number;
  alt: string;
  src: string;
  basket: string;
  nameProduct: string;
}

const cards = [1, 2, 3, 4];

const ReadyMixes: FC = () => {
  const dispatch = useDispatch();
  const context = useContext(userContext);
  const data = context?.readyMixes?.[0] as ReadyMixesProduct | undefined;
  const [activeButtons, setActiveButtons] = useState<number[]>(cards.map(() => 0));

  const handleClick = (cardIndex: number, btnIndex: number) => {
    const updated = [...activeButtons];
    updated[cardIndex] = btnIndex;
    setActiveButtons(updated);
  };

  function pushDataOfBusket(price: number, cardIndex: number): Product {
    return {
      name: data?.nameProductPages ?? '',
      articul: data?.articul ?? '',
      description: data?.description ?? '',
      weight: data?.weight?.[activeButtons[cardIndex]] ?? '',
      initialСost: data?.price ?? 0,
      price: price,
      alt: data?.alt ?? '',
    };
  }

  if (!data) return null;

  return (
    <div className="product__ready-mixes">
      <div className="products__about-products-container">
        <h2 className="products__title">{data.nameProducts}</h2>
        <Link to={"/catalogPages/readyMixes"} className="products__more">Ещё</Link>
      </div>
      <div className="products__content-container">
        {cards.map((_, cardIndex) => {
          const price = data.price * (activeButtons[cardIndex] + 1);
          return (
            <div className="product__container" key={cardIndex}>
              <img src={data.src} alt={data.alt} className="product__img" />
              <h3 className="product__title">{data.nameProduct}</h3>
              <p className="product__description">{data.description}</p>
              <p className="product__price">{`${price} руб.`}</p>
              <div className="product__weight-container">
                {data.weight.map((label, btnIndex) => {
                  const isActive = activeButtons[cardIndex] === btnIndex;
                  return (
                    <button
                      key={btnIndex}
                      className={`product__weight-btn ${isActive ? 'btn-weight-active' : ''}`}
                      onClick={() => handleClick(cardIndex, btnIndex)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <div className="product__btn-container">
                <Link to={"/productPages/readyMixes"} className="product__details-btn">Подробнее</Link>
                <button
                  onClick={() => {
                    dispatch(pushBusket(pushDataOfBusket(price, cardIndex)));
                  }}
                  className="product__add-cart-btn"
                >
                  <img src={data.basket} alt="basket" className="product__busket-img" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ReadyMixes };