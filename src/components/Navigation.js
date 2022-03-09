import { NavLink } from "react-router-dom"
import AG_pic from "./../img/AugustinGuillemin.jpg"

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="id-content">
                    <img src={AG_pic} alt="Profile pic of Augustin Guillemin" />
                    <div className="ribbon">
                        <h3>Augustin Guillemin</h3>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/formations" activeClassName="navActive">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Formations</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/experiences" activeClassName="navActive">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Expériences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/connaissances" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Connaissances</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-card"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="social-networks">
                <ul>
                    <li>
                        <i className="fas fa-file-code"></i>
                        <a href="https://www.linkedin.com/in/augustin-guillemin-730331162/" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <i className="fas fa-at"></i>
                        <a href="#" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <i className="fab fa-github"></i>
                        <a href="https://github.com/augustin-55" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p>Augustin Guillemin - 2022</p>
            </div>
        </div>
    );
};

export default Navigation;