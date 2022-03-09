import { useContext } from 'react';
import Navigation from '../components/Navigation';
import { ThemeContext } from '../scripts/Theme';

const Home = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? 'home' : 'home-light'}>
            <Navigation />
            <div className="home-content">
                <div className="content">
                    <h1>Augustin GUILLEMIN</h1>
                    <h2>Développeur Web - Technicien d'Infrastructure Informatique et Sécurité</h2>
                    <div className="pdf">
                        <a href="./public/media/pdf/CV-AugustinGuillemin.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;