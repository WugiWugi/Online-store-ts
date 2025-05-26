import '../css/Product-sections.css'
import { Catalog } from './product-section-components/Catalog.jsx'
import { ReadyMixes } from './product-section-components/Ready-mixes.jsx'
import { BirdSpecies } from './product-section-components/BirdSpecies.jsx'
import { Grains } from './product-section-components/Grains.jsx'
import { Feeders } from './product-section-components/Feeders.jsx'
import { Charity } from './product-section-components/Charity.jsx'
function Productsections() {
    return (
        <>
            <div className="main__bacground">
                <Catalog />
                <div className="products">
                    <ReadyMixes />
                    <BirdSpecies />
                    <Grains />
                    <Feeders />
                </div>

            </div>
            <Charity />
        </>
    );
}

export { Productsections }
