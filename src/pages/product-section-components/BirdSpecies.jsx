import houseSparrow from '../../assets/main-img/bird-species/house-sparrow.jpg'

function BirdSpecies() {
    const cards = [1, 2, 3, 4]
    return (
        <div className="product__bird-species">
            <div className="products__about-products-container">
                <h2 className="products__title">Виды птиц</h2>
                <button className="products__more">Eщё</button>
            </div>
            <div className="products__content-container">
                {cards.map((_, cardIndex) => (
                    <div className="product__container" key={cardIndex}>
                        <img src={houseSparrow} alt="ready mixes" className="product__img" />
                        <h3 className="product__title">Домовый воробей</h3>
                        <p className="product__description">68</p>
                        <div className="product__btn-container">
                            <button className="product__details-btn">Подробнее</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { BirdSpecies }