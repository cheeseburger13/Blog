import "../styles/footer.css"

import logo from "../images/logo.svg"

const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer__content">
                <img src = {logo} alt = "Логотип сайта" className = "footer__logo" />
                <nav className = "footer-navigation">
                    <a href = "#" className = "footer-navigation__link">О нас</a>
                    <a href = "#" className = "footer-navigation__link">Галерея</a>
                    <a href = "#" className = "footer-navigation__link">Новости</a>
                    <a href = "#" className = "footer-navigation__link">Контакты</a>
                </nav>
                <p className = "footer__rights">ООО "NTI Team" 2024. Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;