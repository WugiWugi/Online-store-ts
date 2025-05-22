import '../css/Footer.css'
import vk from '../assets/elements-icon/footer-elements/vk.svg'
import instagram from '../assets/elements-icon/footer-elements/instargam.svg'

function Footer() {
    return (
        <div className="footer__container">
            <ul className="footer__conditions-list">
                <li className="footer__conditions-list-item"><button className='footer__conditions-list-item-btn'>Оплата</button></li>
                <li className="footer__conditions-list-item"><button className='footer__conditions-list-item-btn'>Доставка</button></li>
            </ul>
            <div className="footer__social-media">
                <img src={vk} alt="vk img" className="footer__vk" />
                <img src={instagram} alt="instagram img" className="footer__instargam" />
            </div>
            <p className="footer__number">8 920 999 43 50</p>
        </div>
    )
}

export { Footer }