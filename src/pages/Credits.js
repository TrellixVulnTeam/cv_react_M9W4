import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';
import Navigation from '../components/Navigation';
import { creditsData } from '../data/creditsData';

const Credits = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "credits" : "credits-light"}>
        <Navigation />
        <div className="credits-content">
            <h2>Crédits</h2>
            <hr />
            <div className='content'>
                <ul>
                    {
                    creditsData.map(item => {
                        return( 
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                         )
                    })
                    }
                </ul>
            </div>
        </div>
    </div>
    )
};

export default Credits;
