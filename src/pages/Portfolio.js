import Navigation from '../components/Navigation';
import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "portfolio" : "portfolio-light"}>
            <Navigation />
            <div className="portfolio-content">
                <h2>Portfolio</h2>
                <hr />
                <div>
                    <ProjectList />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;