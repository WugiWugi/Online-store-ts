import '../css/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo-img/logo.svg"
import search from "../assets/elements-icon/header-elements/Search.svg"
import basket from "../assets/elements-icon/header-elements/basket.svg"
import profile from "../assets/elements-icon/header-elements/profile.svg"

function Header() {
    return (
        <div className="header__container">
            <div className="header__content-container">
                <div className="header__top-container">
                    <div className="header__logo-block">
                        <img src={logo} alt="" className="logo img" />
                    </div>
                    <div className="header__information-block">
                        <p className="header__number">8 920 999 43 50</p>
                        <button className="header__basket-btn">
                            <img src={basket} alt="basket img" className='header__basket' />
                        </button>
                        <button className="header__profile-btn">
                            <img src={profile} alt="profile img" className="header__profile" />
                        </button>
                    </div>
                </div>

                <div className="header__bottom-container">
                    <nav className="header__nav-container">
                        <form >
                            <ul className="header__list">
                                <li className="header__list-item"><Link className='header__list-item-btn'>Каталог</Link></li>
                                <li className="header__list-item"><Link className='header__list-item-btn'>О проекте</Link></li>
                                <li className="header__list-item"><Link to='/birds' className='header__list-item-btn'>Птицы</Link></li>
                                <li className="header__list-item"><Link className='header__list-item-btn'>Пожертвования</Link></li>
                            </ul>
                        </form>
                    </nav>
                    <form className="header__search-engine-form">
                        <input type="text" placeholder="Поиск" className="header__search-engine" />
                        <button className='header__magnifying-glass-btn'>
                            <img src={search} alt="magnifying glass img" className='header__magnifying-glass' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Header }
