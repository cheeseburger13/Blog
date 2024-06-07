import "../styles/footer.css"

import { NavLink } from "react-router-dom";

import logo from "../images/logo.svg"

const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer__content">
                <NavLink to="/" className="footer__logo">
                    <img src = {logo} className = "footer__logo-image" />
                </NavLink>
                <nav className = "footer-navigation">
                    <NavLink to="/" className="footer-navigation__link">Главная</NavLink>
                    <NavLink to="/about" className="footer-navigation__link">О нас</NavLink>
                    <NavLink to="/contacts" className="footer-navigation__link">Контакты</NavLink>
                    <NavLink to="/search" className="footer-navigation__link">Поиск</NavLink>
                </nav>
                <p className = "footer__rights">ООО "NTI Team" 2024. Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;