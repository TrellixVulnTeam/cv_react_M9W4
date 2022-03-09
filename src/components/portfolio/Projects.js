import { Component } from 'react';

export default class Projects extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        let { namePortfolioItem, languages, languagesIcons, source, info, picture } = this.props.item;
        
        return(
            <div className="project">
                <img src={picture} alt="ok"></img>
                <div>
                    <div className="icons">
                        {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i> 
                        )}
                    </div>
                    <h3>{namePortfolioItem}</h3> 
                    <span onClick={this.handleInfo} >
                        <i className="fas fa-plus-circle"></i>
                    </span>
                    {
                        this.state.showInfo && (
                            <div className="show-infos">
                                <div className="infos-content">
                                    <div className="head">
                                        <h2>{namePortfolioItem}</h2>
                                    </div>
                                    <button className="button return" onClick={this.handleInfo}>Retourner sur la page</button>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}