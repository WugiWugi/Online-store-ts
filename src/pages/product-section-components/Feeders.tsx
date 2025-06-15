import React, { useContext, FC } from 'react'
import { userContext } from '../../App'
import { Link } from 'react-router-dom'

interface FeedersProduct {
  nameProducts: string;
  nameProduct: string;
  description: string;
  price: number;
  alt: string;
  src: string;
  basket: string;
}

const cards = [1, 2, 3, 4];

const Feeders: FC = () => {
  const context = useContext(userContext);
  const data = context?.feeders?.[0] as FeedersProduct | undefined;
  if (!data) return null;

  return (
    <div className="product__bird-species">
      <div className="products__about-products-container">
        <h2 className="products__title">{data.nameProducts}</h2>
        <Link to="/catalogPages/feeders" className="products__more">Ещё</Link>
      </div>
      <div className="products__content-container">
        {cards.map((_, cardIndex) => (
          <div className="product__container" key={cardIndex}>
            <img src={data.src} alt={data.alt} className="product__img" />
            <h3 className="product__title">{data.nameProduct}</h3>
            <p className="product__description">{data.description}</p>
            <p className="product__price">{`${data.price} руб.`}</p>
            <div className="product__btn-container">
              <Link to="#" className="product__details-btn">Подробнее</Link>
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

export { Feeders }