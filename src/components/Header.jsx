import "../styles/header.css";
import "../styles/burger.css";

import logo from "../images/logo.svg";

import Navigation from "./Navigation";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [state, setState] = useState(true);

    return (
        <header className = "header">
            <div className = "container">
                <div className = "header__content">
                    <NavLink to = "/" className = "header__logo">
                        <img src = {logo} className = "header__logo-image" />
                    </NavLink>
                    
                    <Navigation position = {"header"} state = {state}/>

                    <div className = {(state) ? "burger" : "burger burger--active"} onClick = {() => {setState(!state)}}>
                        <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
                        <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
                        <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;