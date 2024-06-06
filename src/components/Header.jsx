import "../styles/header.css"

import logo from "../images/logo.svg"

const Header = () => {
    return (
        <header className = "header">
            <div className = "container">
                <div className = "header__content">
                    <img src={logo} alt="Логотип сайта" className = "header__logo" />
                    <nav className = "header-navigation">
                        <a className = "header-navigation__link" href="#">Главная</a>
                        <a className = "header-navigation__link" href="#">О нас</a>
                        <a className = "header-navigation__link" href="#">Контакты</a>
                        <a className = "header-navigation__link" href="#">Поиск</a>
                        <a className = "header-navigation__link" href="#">+7 (987) 887-87</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;