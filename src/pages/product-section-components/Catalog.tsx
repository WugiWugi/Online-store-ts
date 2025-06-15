import React, { FC } from 'react'
import feedersJpg from '../../assets/main-img/catalog/feeders.jpg'
import certainTypesFeedJpg from '../../assets/main-img/catalog/certain-types-feed.jpg'
import readyMixesJpg from '../../assets/main-img/catalog/ready-mixes.jpg'
import { Link } from 'react-router-dom'

interface CatalogCard {
  id: number
  image: string
  title: string
  description?: string
  link: string
}

const catalogCards: CatalogCard[] = [
  {
    id: 1,
    image: feedersJpg,
    title: 'Кормушки',
    link: '#',
  },
  {
    id: 2,
    image: certainTypesFeedJpg,
    title: 'Готовые миксы',
    description: '(смеси кормов)',
    link: '#',
  },
  {
    id: 3,
    image: readyMixesJpg,
    title: 'Отдельные виды кормов',
    description: '(зерен)',
    link: '#',
  },
]

const Catalog: FC = () => {
  return (
    <div className="catalog">
      <h2 className="catalog__title">Каталог</h2>
      <div className="catalog__content-container">
        {catalogCards.map((card) => (
          <div className="catalog__inner-container" key={card.id}>
            <img src={card.image} alt={card.title} className="catalog__inner-img" />
            <h3 className="catalog__inner-title">{card.title}</h3>
            {card.description && <p className="catalog__inner-description">{card.description}</p>}
            <Link to={card.link} className="catalog__inner-btn">Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Catalog }