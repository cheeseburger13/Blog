import "../styles/navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const style = {
        gap: (props.position === "header") ? "40px" : "80px"
    }
    
    return (
        <nav className = {(props.state) ? "navigation navigation--" + props.position : "navigation navigation--" + props.position + " navigation--active"} style = {style}>
            <NavLink to = "/" className = "navigation__link">Главная</NavLink>
            <NavLink to = "/about" className = "navigation__link">О нас</NavLink>
            <NavLink to = "/contacts" className = "navigation__link">Контакты</NavLink>
            <NavLink to = "/search" className = "navigation__link">Поиск</NavLink>
            <span className = "navigation__link" style = {(props.position === "header") ? {} : {display: "none"}}>+7 (999) 999-99-99</span>
        </nav>
    );
}

export default Navigation;