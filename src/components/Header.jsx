import "../styles/header.css"

import { NavLink } from "react-router-dom";

import Burger from "./Burger";

import logo from "../images/logo.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/" className="header__logo">
                        <img src={logo} className="header__logo-image" />
                    </NavLink>
                    <nav className="header-navigation">
                        <NavLink to="/" className="header-navigation__link">Главная</NavLink>
                        <NavLink to="/about" className="header-navigation__link">О нас</NavLink>
                        <NavLink to="/contacts" className="header-navigation__link">Контакты</NavLink>
                        <NavLink to="/search" className="header-navigation__link">Поиск</NavLink>
                        <NavLink to="/contacts" className="header-navigation__link">+7 (999) 999-99-99</NavLink>
                    </nav>
                    <Burger />
                </div>
            </div>
        </header>
    );
}

export default Header;