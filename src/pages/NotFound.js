import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <div className="content">
                    <i className="fas fa-home"></i>
                    <h3>Page non trouvée | Erreur 404</h3>
                    <NavLink exact to="/">
                        <i className="fas fa-redo"></i>
                        <span>Retourner à la page d'accueil</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;