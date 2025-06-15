import React, { useState, useContext, FC } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from '../App';
import { Grains } from './product-section-components/Grains';
import { ReadyKits } from './product-pages/Ready-kits';
import { BackElement } from './Back-element';
import '../css/Product-pages.css';
import type { DataType } from './Products-data';
import type { ProductBase, BirdInfoPage } from '../types/productData';

function isProduct(item: any): item is ProductBase | BirdInfoPage {
  return item && typeof item === 'object' && 'nameProducts' in item;
}

const ProductPages: FC = () => {
  const data = useContext(userContext) as DataType | null;
  const { productPagesName } = useParams<{ productPagesName: string }>();
  const items = (data && productPagesName && (data as Record<string, ProductBase[] | BirdInfoPage[]>)[productPagesName]?.[0]) || {};
  const [activeButtons, setActiveButtons] = useState<number>(1);
  const [productQuantity, setProductQuantity] = useState<number>(1);

  if (!isProduct(items)) return null;

  return (
    <div className="main__bacground main__bacground--">
      <div className="products-pages">
        <nav className="pages__navigation-list-container">
          <ul className="pages__navigation-list">
            <li className="pages__navigation__list-item">Каталог</li>
            <li className="pages__navigation__list-item navigation__list-item--">{items.nameProducts}</li>
            <li className="pages__navigation__list-item navigation__list-item--">{items.nameProductPages}</li>
          </ul>
        </nav>
        <BackElement />
        <div className="product-pages__container">
          <div className="product-pages__product-container">
            {items.productPagesSrc && (
              <img src={items.productPagesSrc} alt={items.alt} className="product-pages__img" />
            )}
            <div className="product-pages__text-container">
              <h3 className="product-pages__product-name">{items.nameProductPages}</h3>
              <p className="product-pages__product-description">{items.detailedDescription}</p>
              {items.weight && (
                <>
                  <div className="product-pages__weight-container">
                    {items.weight.map((weight, btnIndex) => {
                      const isActive = activeButtons === btnIndex + 1;
                      return (
                        <button
                          key={btnIndex}
                          className={`product-pages__weight-btn product-pages__weight-btn-- ${isActive ? 'btn-weight-active' : ''}`}
                          onClick={() => setActiveButtons(btnIndex + 1)}
                        >
                          {weight}
                        </button>
                      );
                    })}
                  </div>
                  <p className="product-pages__price">{`${items.price * activeButtons * productQuantity} руб.`}</p>
                  <p className="product-pages__quantity-text">Количество:</p>
                  <div className="product-pages__add-button-container">
                    <button onClick={() => { productQuantity !== 1 && setProductQuantity(productQuantity - 1); }} className="product-pages__product-reduce-btn">--</button>
                    <span className="product-pages__product-quantity-number">{productQuantity}</span>
                    <button onClick={() => { setProductQuantity(productQuantity + 1); }} className="product-pages__product-add-btn">+</button>
                  </div>
                  <div className="product-pages__button-container">
                    <button className="product-pages__buy-btn">Купить</button>
                    <button className="product-pages__add-busket">Добавить в корзину</button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="product-pages__additional-information-container">
            <div className="product-pages__information-container">
              <h3 className="product-pages__information-title">{items.additionalInformationWan}</h3>
              <div className="product-pages__information-images-container">
                <svg className="svipe-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5451 3.5342C13.7935 3.7777 13.816 4.15874 13.6128 4.42724L13.5451 4.50417L7.93882 9.99998L13.5451 15.4958C13.7935 15.7393 13.816 16.1203 13.6128 16.3888L13.5451 16.4658C13.2967 16.7093 12.908 16.7314 12.6341 16.5322L12.5557 16.4658L6.45492 10.485C6.20653 10.2415 6.18395 9.86043 6.38717 9.59192L6.45492 9.51499L12.5557 3.5342C12.8289 3.26635 13.2719 3.26635 13.5451 3.5342Z" fill="#00C620" />
                </svg>
                {items.additionalInformationSrcWan?.map((x, i) => (
                  <div key={i} className="product-pages__information-img-container">
                    <img src={x[0]} alt={`${x[1]} img`} className="product-pages__information-img" />
                    <p className="product-pages__information-img-name">{x[1]}</p>
                  </div>
                ))}
                <svg className="svipe-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.45492 16.4658C6.20653 16.2223 6.18395 15.8413 6.38718 15.5728L6.45492 15.4958L12.0612 10L6.45492 4.50421C6.20653 4.26071 6.18395 3.87967 6.38717 3.61117L6.45492 3.53424C6.7033 3.29074 7.09198 3.26861 7.36587 3.46783L7.44434 3.53424L13.5451 9.51504C13.7935 9.75854 13.816 10.1396 13.6128 10.4081L13.5451 10.485L7.44434 16.4658C7.17112 16.7336 6.72814 16.7336 6.45492 16.4658Z" fill="#00C620" />
                </svg>
              </div>
            </div>
            <div className="product-pages__information-container">
              <h3 className="product-pages__information-title">{items.additionalInformationTwo}</h3>
              <div className="product-pages__information-images-container">
                <svg className="svipe-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5451 3.5342C13.7935 3.7777 13.816 4.15874 13.6128 4.42724L13.5451 4.50417L7.93882 9.99998L13.5451 15.4958C13.7935 15.7393 13.816 16.1203 13.6128 16.3888L13.5451 16.4658C13.2967 16.7093 12.908 16.7314 12.6341 16.5322L12.5557 16.4658L6.45492 10.485C6.20653 10.2415 6.18395 9.86043 6.38717 9.59192L6.45492 9.51499L12.5557 3.5342C12.8289 3.26635 13.2719 3.26635 13.5451 3.5342Z" fill="#00C620" />
                </svg>
                {items.additionalInformationSrcTwo?.map((x, i) => (
                  <div key={i} className="product-pages__information-img-container">
                    <img src={x[0]} alt={`${x[1]} img`} className="product-pages__information-img" />
                    <p className="product-pages__information-img-name">{x[1]}</p>
                  </div>
                ))}
                <svg className="svipe-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.45492 16.4658C6.20653 16.2223 6.18395 15.8413 6.38718 15.5728L6.45492 15.4958L12.0612 10L6.45492 4.50421C6.20653 4.26071 6.18395 3.87967 6.38717 3.61117L6.45492 3.53424C6.7033 3.29074 7.09198 3.26861 7.36587 3.46783L7.44434 3.53424L13.5451 9.51504C13.7935 9.75854 13.816 10.1396 13.6128 10.4081L13.5451 10.485L7.44434 16.4658C7.17112 16.7336 6.72814 16.7336 6.45492 16.4658Z" fill="#00C620" />
                </svg>
              </div>
            </div>
          </div>
          <div className="product-pages__recommendations">
            <div className="product-pages__recommendations-container">
              <h2 className="product-pages__recommendations-title">С этим товаром смотрят</h2>
              <Grains />
            </div>
            <div className="product-pages__recommendations-container">
              <h2 className="product-pages__recommendations-title">С этим товаром покупают</h2>
              <ReadyKits />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductPages };