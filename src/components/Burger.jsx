import "../styles/burger.css"

import { useState } from "react";

const Burger = () => {
    const [state, setState] = useState(true);

    return (
        <div className = "burger" onClick = {() => {setState(!state)}}>
            <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
            <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
            <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
            <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
            <span className = {(state) ? "burger__line" : "burger__line burger__line--active"}></span>
        </div>
    );
}
 
export default Burger;