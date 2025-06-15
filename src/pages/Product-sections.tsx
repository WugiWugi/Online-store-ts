import React, { FC } from 'react';
import '../css/Product-sections.css';
import { Catalog } from './product-section-components/Catalog';
import { ReadyMixes } from './product-section-components/Ready-mixes';
import { BirdSpecies } from './product-section-components/BirdSpecies';
import { Grains } from './product-section-components/Grains';
import { Feeders } from './product-section-components/Feeders';
import { Charity } from './product-section-components/Charity';
import { Link } from 'react-router-dom';

const ProductSections: FC = () => {
  return (
    <>
      <div className="main__bacground">
        <Catalog />
        <div className="products">
          <ReadyMixes />
          <BirdSpecies />
          <div className="product__ready-mixes">
            <div className="products__about-products-container">
              <h2 className="products__title">Зёрна</h2>
              <Link to={"/catalogPages/typesFeed"} className="products__more">Eщё</Link>
            </div>
            <Grains />
          </div>
          <Feeders />
        </div>
      </div>
      <Charity />
    </>
  );
};

export { ProductSections };