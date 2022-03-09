import Navigation from '../components/Navigation';
import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';
import { webmapData } from '../data/webmapData';

const Webmap = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "webmap" : "webmap-light"}>
        <Navigation />
        <div className="webmap-content">
            <h2>Plan du site</h2>
            <hr />
            <div className="content">
                <ul>
                    {
                    webmapData.map(item => {
                        return (
                            <li key={item.id}>
                                <a href={item.link}><i class="far fa-circle"></i>{item.page}</a>
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

export default Webmap;