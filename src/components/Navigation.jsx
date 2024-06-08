import "../styles/navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className = {(props.header) ? "navigation navigation--header" : "navigation navigation--footer"} style = {(props.header) ? {gap: "40px"} : {gap: "80px"}}>
            <NavLink to = "/" className = "navigation__link">Главная</NavLink>
            <NavLink to = "/about" className = "navigation__link">О нас</NavLink>
            <NavLink to = "/contacts" className = "navigation__link">Контакты</NavLink>
            <NavLink to = "/search" className = "navigation__link">Поиск</NavLink>
            <span className = "navigation__link" style = {(props.header) ? {} : {display: "none"}}>+7 (999) 999-99-99</span>
        </nav>
    );
}

export default Navigation;