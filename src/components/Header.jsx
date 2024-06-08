import "../styles/header.css";

import logo from "../images/logo.svg";

import Burger from "./Burger";
import Navigation from "./Navigation";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className = "header">
            <div className = "container">
                <div className = "header__content">
                    <NavLink to = "/" className = "header__logo">
                        <img src = {logo} className = "header__logo-image" />
                    </NavLink>
                    
                    <Navigation header = {true}/>

                    <Burger />
                </div>
            </div>
        </header>
    );
}

export default Header;