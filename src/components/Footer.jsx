import "../styles/footer.css";

import logo from "../images/logo.svg";

import Navigation from "./Navigation";

import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer__content">
                <NavLink to = "/" className = "footer__logo">
                    <img src = {logo} className = "footer__logo-image" />
                </NavLink>

                <Navigation header = {false}/>

                <p className = "footer__rights">ООО "NTI Team" 2024. Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;