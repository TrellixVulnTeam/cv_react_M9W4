import { Component } from 'react';
import { portfolioData } from './../../data/portfolioData';
import Projects from './Projects';

export default class ProjectList extends Component {
    state = {
        projects:portfolioData
    }

    render() {
        let {projects} = this.state;

        console.log(this.propos);

        return (
            <div className="content">
                <ul className="radio-display">
                    <li>HTML</li>
                    <li>PHP</li>
                    <li>Symphony</li>
                    <li>React</li>
                    <li>TailWindCSS</li>
                </ul>
                <div className="projects">
                {
                    projects.map(item => {
                        return(
                            <Projects
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}