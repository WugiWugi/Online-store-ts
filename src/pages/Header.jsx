import '../css/Header.css'
import { logo } from "../assets/logo-img/logo.svg"

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top-header">
                    <img src={logo} alt="" className="logo" />
                </div>
            </div>
        </header>
    )
}

export { Header }
