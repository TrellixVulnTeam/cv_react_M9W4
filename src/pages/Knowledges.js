import Navigation from "../components/Navigation";
import Experience from "../components/knowledges/Experience";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";
import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';

const Knowledges = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "knowledges" : "knowledges-light"}>
            <Navigation />
            <div className="knowledges-content">
                <div className="content-top">
                    <Languages />
                    <Experience />
                </div>
                <div className="content-bottom">
                    <OtherSkills />
                    <Hobbies />
                </div>
            </div>
        </div>
    );
};

export default Knowledges;