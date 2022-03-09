import Navigation from '../components/Navigation';
import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';

const Experiences = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "experiences" : "experiences-light"}>
            <Navigation />
            <div className="experiences-content">
                <h2>Expériences</h2>
                <hr />
                <div className="content">

                </div>
            </div>
        </div>
    );
};

export default Experiences;
