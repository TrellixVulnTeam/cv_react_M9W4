import { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "HTML", xp: 1.8},
            {id: 2, value: "CSS", xp: 1.3},
            {id: 3, value:"JS", xp: 1.1}, 
        ],
        frameworks: [
            {id: 1, value:"React.js", xp: .7},
            {id: 2, value: "Bootstrap 4", xp: 1.8},
            {id: 3, value: "jQuery", xp: 1.6},
        ],
    }
    
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languages-frameworks">
                <div className="languages">
                    <ProgressBar
                        languages={languages}
                        className="languages-display"
                        title="Languages"
                    />
                </div>
                <div className="frameworks">
                    <ProgressBar
                        languages={frameworks}
                        className="frameworks-display"
                        title="Frameworks & bibliothèques"
                    />
                </div>
            </div>
        );
    }
}

export default Languages;