import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import houseSparrow from '../../assets/main-img/bird-species/house-sparrow.jpg'

// Тип для карточки вида птицы (можно расширить при необходимости)
interface BirdCard {
  id: number
  name: string
  description: string
  image: string
  detailsLink: string
}

const birdCards: BirdCard[] = [
  {
    id: 1,
    name: 'Домовый воробей',
    description: '68',
    image: houseSparrow,
    detailsLink: '/productPages/sparrowPages',
  },
  // Можно добавить другие виды птиц по аналогии
  { id: 2, name: 'Домовый воробей', description: '68', image: houseSparrow, detailsLink: '/productPages/sparrowPages' },
  { id: 3, name: 'Домовый воробей', description: '68', image: houseSparrow, detailsLink: '/productPages/sparrowPages' },
  { id: 4, name: 'Домовый воробей', description: '68', image: houseSparrow, detailsLink: '/productPages/sparrowPages' },
]

const BirdSpecies: FC = () => {
  return (
    <div className="product__bird-species">
      <div className="products__about-products-container">
        <h2 className="products__title">Виды птиц</h2>
        <button className="products__more">Ещё</button>
      </div>
      <div className="products__content-container">
        {birdCards.map((card) => (
          <div className="product__container" key={card.id}>
            <img src={card.image} alt={card.name} className="product__img" />
            <h3 className="product__title">{card.name}</h3>
            <p className="product__description">{card.description}</p>
            <div className="product__btn-container">
              <Link to={card.detailsLink} className="product__details-btn">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { BirdSpecies }