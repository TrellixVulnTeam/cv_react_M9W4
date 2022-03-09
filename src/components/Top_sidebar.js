import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ThemeContext } from "./../scripts/Theme";

const Top_sidebar = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={theme ? "top-sidebar" : "top-sidebar-light"}>
            <button title={theme ? "Mode clair" : "Mode sombre"} onClick={toggleTheme}>
                <i className={theme ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
            <a title="Plan du site" href="/plan"><i className="fas fa-list"></i></a>
            <a title="Crédits" href="/credits"><i className="fas fa-handshake"></i></a>
        </div>
    );
};

export default Top_sidebar;