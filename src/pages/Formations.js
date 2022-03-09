import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';
import Navigation from '../components/Navigation';
import { formationsData } from '../data/formationsData';

const Formations = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? 'formations' : 'formations-light'}>
            <Navigation />
            <div className="formations-content">
                <h2>Formations</h2>
                <hr />
                <div className="content">
                    <ul>
                        {
                        formationsData.map(item => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.title}</h3>
                                    <a href={item.website} target="_blank"><i class="fas fa-thumbtack"></i>{item.place}</a>
                                    <div>
                                        <img src={item.picture} alt="" />
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Formations;