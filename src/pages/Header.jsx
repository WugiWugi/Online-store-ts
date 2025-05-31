import '../css/Header.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo-img/logo.svg"
import search from "../assets/elements-icon/header-elements/Search.svg"
import busketImg from "../assets/elements-icon/header-elements/basket.svg"
import profile from "../assets/elements-icon/header-elements/profile.svg"
import { useState, useEffect } from 'react'

function Header() {
    const [catalogAction, setCatalogAction] = useState(false)
    const busket = useSelector(state => state.users.busket).length
    const downArrow = <svg className={`header__list-item-down-arrow ${catalogAction ? 'item-down-arrow-action' : ''}`} width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.74962 5.625C3.89566 5.62472 4.03718 5.67558 4.14962 
        5.76875L7.49962 8.56875L10.8559 5.86875C10.9198 5.81684 10.9934 5.77807 11.0723 5.75467C11.1513 5.73128 11.2341 5.72372 11.316 5.73243C11.3979 5.74114 11.4772 
        5.76595 11.5495 5.80544C11.6218 5.84492 11.6855 5.8983 11.7371 5.9625C11.789 6.02643 11.8278 6.09999 11.8512 6.17896C11.8746 6.25792 11.8822 6.34073 11.8734 6.42262C11.8647 
        6.50451 11.8399 6.58388 11.8004 6.65615C11.761 6.72842 11.7076 6.79218 11.6434 6.84375L7.89337 9.8625C7.78154 9.95443 7.64126 10.0047 7.4965 10.0047C7.35173 10.0047 7.21146 
        9.95443 7.09962 9.8625L3.34962 6.7375C3.28634 6.68504 3.23402 6.6206 3.19568 6.54788C3.15733 6.47516 3.13371 6.3956 3.12616 6.31374C3.11861 6.23188 3.12729 6.14933 3.15169 6.07083C3.1761 
        5.99233 3.21575 5.91941 3.26837 5.85625C3.32653 5.78456 3.39985 5.72664 3.48306 5.68665C3.56627 5.64667 3.65731 5.62561 3.74962 5.625Z" fill="currentColor" />
    </svg>
    const location = useLocation()
    useEffect(() => {
        if (!catalogAction) return
        setCatalogAction(false)
    }, [location.pathname])

    function handleClick(e) {
        e.preventDefault()
        setCatalogAction(!catalogAction)
    }
    return (
        <div className="header__container">
            <div className="header__content-container">
                <div className="header__top-container">
                    <div className="header__logo-block">
                        <img src={logo} alt="" className="logo img" />
                    </div>
                    <div className="header__information-block">
                        <p className="header__number">8 920 999 43 50</p>
                        <Link to={'/busket'} className="header__basket-btn">
                            {busket !== 0 && <div className="header__busket-item-container">
                                <span className="header__busket-item">{busket >= 99 ? '99+' : busket}</span>
                            </div>}
                            <img src={busketImg} alt="busket img" className='header__basket' />
                        </Link>
                        <Link  to={"/AccountPages"} className="header__profile-btn">
                            <img src={profile} alt="profile img" className="header__profile" />
                        </Link>
                    </div>
                </div>

                <div className="header__bottom-container">
                    <nav className="header__nav-container">
                        <ul className="header__list">
                            <li className="header__list-item"><button onClick={handleClick} className={`header__list-item-btn ${catalogAction ? 'item-action' : ''}`}>Каталог<span>{downArrow}</span></button>
                                {catalogAction && <ul className='header__catalog-list'>
                                    <li className="Link header__catalog-list-item"><Link to={"/catalogPages/readyMixes"} className=' header__catalog-list-item-link'>Готовые миксы</Link></li>
                                    <li className="Link header__catalog-list-item"><Link to={"/catalogPages/typesFeed"} className=' header__catalog-list-item-link'>Отдельные виды кормов</Link></li>
                                    <li className="Link header__catalog-list-item"><Link to={"/catalogPages/feeders"} className='header__catalog-list-item-link'>Кормушки</Link></li>
                                    <li className="Link header__catalog-list-item"><Link to={"/catalogPages/readyKits"} className='header__catalog-list-item-link'>Готовые комплекты</Link></li>
                                    <li className="Link header__catalog-list-item"><Link to={"/catalogPages/accessoriesAndMore"} className='header__catalog-list-item-link'>Аксессуары и другое</Link></li></ul>}
                            </li>
                            <li className="header__list-item"><Link className='header__list-item-btn'>О проекте</Link></li>
                            <li className="header__list-item"><Link to='/birds' className='header__list-item-btn'>Птицы</Link></li>
                            <li className="header__list-item"><Link className='header__list-item-btn'>Пожертвования</Link></li>
                        </ul>
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
