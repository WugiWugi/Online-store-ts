import React from 'react';
import type { ProductBase, BirdInfoPage } from '../types/productData';
import readyMixJpg from '../assets/main-img/ready-mixes/ready-mix.jpg';
import grainJpg from '../assets/main-img/Grains/grain.jpg';
import feedersJpg from '../assets/main-img/feeders/feeder.jpg';
import readyKitsJpg from "../assets/main-img/catalog-pages/ready-kits.jpg";
import accessoriesJpg from "../assets/main-img/catalog-pages/accessories.jpg";
import sparrowPagesImg from "../assets/main-img/product-pages/sparrowPagesImg.jpg";
import ovomix from "../assets/main-img/product-pages/ovomix.jpg";
import pigeon from "../assets/main-img/product-pages/additional-information/pigeon.png";
import sparrow from "../assets/main-img/product-pages/additional-information/sparrow.png";
import martin from "../assets/main-img/product-pages/additional-information/martin.png";
import starling from "../assets/main-img/product-pages/additional-information/starling.png";
import millet from "../assets/main-img/product-pages/additional-information/millet.png";
import milletTwo from "../assets/main-img/product-pages/additional-information/milletTwo.png";
import flax from "../assets/main-img/product-pages/additional-information/flax.png";
import wheat from "../assets/main-img/product-pages/additional-information/wheat.png";
import clifi from "../assets/main-img/product-pages/additional-information/clifi.png";
import Benelux from "../assets/main-img/product-pages/additional-information/Benelux.png";
import cliffiItalian from "../assets/main-img/product-pages/additional-information/cliffi-italian.png";
import BeneluxKarma from "../assets/main-img/product-pages/additional-information/Benelux-karma.png";
import basket from "../assets/elements-icon/header-elements/basket.svg";

const weight = ['200 г', '400 г', '800 г', '1 кг'];

const birds: [string, string][] = [
  [pigeon, 'Голубь'],
  [sparrow, 'Воробей'],
  [martin, 'Ласточка'],
  [starling, 'Скворец']
];

const feed: [string, string][] = [
  [millet, 'Пшено'],
  [milletTwo, 'Просо'],
  [flax, 'Лен'],
  [wheat, 'Пшеница']
];

const mixes: [string, React.ReactNode][] = [
  [clifi, <>clifi<br />(Италия)</>],
  [Benelux, <>Benelux<br />(корма)</>],
  [cliffiItalian, <>clifi<br />(Италия)</>],
  [BeneluxKarma, <>Benelux<br />(корма)</>]
];

export const data: {
  readyMixes: ProductBase[];
  typesFeed: ProductBase[];
  feeders: ProductBase[];
  readyKits: ProductBase[];
  accessoriesAndMore: ProductBase[];
  sparrowPages: BirdInfoPage[];
} = {
  readyMixes: [{
    nameProducts: 'Готовые миксы',
    nameProductPages: "PADOVAN OVOMIX OLD ROSSO",
    src: readyMixJpg,
    alt: 'ready mixes img',
    productPagesSrc: ovomix,
    nameProduct: (<>PADOVAN OVOMIX<br />GOLD ROSSO</>),
    description: 'Корм для птиц',
    articul: 'Т00001632',
    price: 228,
    weight: weight,
    basket: basket,
    detailedDescription: (
      <>Дополнительный пюреобразный пигментирующий корм, для птенцов<br />
        с красным оперением.<br />
        Отлично подходит для увеличения поступления питательных веществ<br />
        на особенных этапах жизни зерноядных птиц (при линьке<br />
        и размножении), а также в периоды, когда животное испытывает стресс.</>
    ),
    additionalInformationWan: 'Виды птиц, для которых подойдет данный товар',
    additionalInformationTwo: 'Зерна из которых состоит данный товар',
    additionalInformationSrcWan: birds,
    additionalInformationSrcTwo: feed,
  }],

  typesFeed: [{
    nameProducts: 'Отдельные виды кормов',
    src: grainJpg,
    alt: 'types of feed img',
    nameProductPages: 'Корм для птиц RIO Линька',
    nameProduct: (<>Корм для птиц RIO<br />Линька</>),
    description: 'для волнистых попугайчиков',
    articul: 'Т00001476',
    price: 228,
    weight: weight,
    basket: basket
  }],

  feeders: [{
    nameProducts: 'Кормушки',
    src: feedersJpg,
    alt: 'feeders img',
    nameProduct: (<>Комплект-агро<br />"Избушка на курьих<br />ножках"</>),
    description: 'Кормушка малая',
    articul: 'Т00001354',
    price: 1000,
    weight: weight,
    basket: basket
  }],

  readyKits: [{
    nameProducts: 'Готовые комплекты',
    src: readyKitsJpg,
    alt: 'ready kits img',
    nameProductPages: 'Корм для птиц RIO Линька',
    nameProduct: (<>Корм для птиц RIO<br />Линька</>),
    description: 'для волнистых попугайчиков',
    articul: 'Т00001434',
    price: 300,
    weight: weight,
    basket: basket
  }],

  accessoriesAndMore: [{
    nameProducts: 'Аксессуары и другое',
    src: accessoriesJpg,
    alt: 'aaccessories img',
    nameProduct: (<>Домик для птиц TRIOL<br />из кокоса</>),
    description: 'кормушка малая',
    articul: 'Т00001434',
    price: 1000,
    weight: weight,
    basket: basket
  }],

  sparrowPages: [{
    nameProducts: 'Готовые миксы',
    nameProductPages: 'Домовый воробей',
    productPagesSrc: sparrowPagesImg,
    alt: 'sparrow img',
    price: Infinity,
    detailedDescription: (
      <>
        Воробей – это птица, знакомая всем, как взрослым, так и детям. Это небольшая<br />
        птица, которая, на первый взгляд, имеет монотонный серо-коричневый окрас<br />
        оперения, но если внимательно присмотреться, то можно обнаружить более<br />
        контрастные тона, больше темные или даже черные. Область головы, брюшка и<br />
        область ушей раскрашены в светлые оттенки, причем их интенсивность<br />
        варьируется от светло-серых до светло-коричневых тонов.<br />

        У воробья мощный клюв темного оттенка, а хвост короткий и окрашен в одни<br />
        тона. Вырастают воробьи до 15 сантиметров максимум, при весе не больше 35<br />
        граммов. Размах крыльев птицы достигает около 27 сантиметров.
      </>
    ),
    additionalInformationWan: 'Виды зерен, которыми питаются данные птицы',
    additionalInformationTwo: 'Виды миксов, которыми могут питаться данные птицы',
    additionalInformationSrcWan: feed,
    additionalInformationSrcTwo: mixes,
  }],
};

export type DataType = typeof data;