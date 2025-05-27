import readyMixJpg from '../assets/main-img/ready-mixes/ready-mix.jpg'
import GrainJpg from '../assets/main-img/Grains/grain.jpg'
import feedersJpg from '../assets/main-img/feeders/Feeder.jpg'
import readyKitsJpg from "../assets/main-img/catalog-pages/ready-kits.jpg"
import accessoriesJpg from "../assets/main-img/catalog-pages/accessories.jpg"
import basket from "../assets/elements-icon/header-elements/basket.svg"
const weight = ['200 г', '400 г', '800 г', '1 кг']
export const data = {
  readyMixes: [{ nameProducts: 'Готовые миксы', src: readyMixJpg, alt: 'ready mixes img', nameProduct: (<>PADOVAN OVOMIX<br />GOLD ROSSO</>), description: 'Корм для птиц', prise: '228 руб.', weight: weight, basket: basket }],
  typesFeed: [{ nameProducts: 'Отдельные виды кормов', src: GrainJpg, alt: 'types of feed img', nameProduct: (<>Корм для птиц RIO<br />Линька</>), description: 'для волнистых попугайчиков', prise: '228 руб.', weight: weight, basket: basket }],
  feeders: [{ nameProducts: 'Кормушки', src: feedersJpg, alt: 'feeders img', nameProduct: (<>Комплект-агро<br />"Избушка на курьих<br />ножках"</>), description: 'Кормушка малая', prise: '1000 руб.', weight: weight, basket: basket }],
  readyKits: [{ nameProducts: 'Готовые комплекты', src: readyKitsJpg, alt: 'ready kits img', nameProduct: (<>Корм для птиц RIO<br />Линька</>), description: 'для волнистых попугайчиков', prise: '300 руб.', weight: weight, basket: basket }],
  accessoriesAndMore: [{ nameProducts: 'Аксессуары и другое', src: accessoriesJpg, alt: 'aaccessories img', nameProduct: (<>Домик для птиц TRIOL<br />из кокоса</>), description: 'кормушка малая', prise: '1000 руб.', weight: weight, basket: basket}]
}