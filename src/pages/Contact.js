  import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext } from 'react';
import { ThemeContext } from '../scripts/Theme';


const Contact = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className="contact">
            <Navigation />
            <div className="contact-content">
                <section className="contact-section">
                    <h2>Contactez-moi</h2>
                    <hr />
                    <div className="contact-me">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10139.929676015554!2d5.319587516430228!3d48.688850559613236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eb66b9fbeda903%3A0x8e9ea25a45f3f3e6!2sRue%20de%20l&#39;%C3%89glise%2C%2055500%20Ligny-en-Barrois!5e0!3m2!1sfr!2sfr!4v1633377011006!5m2!1sfr!2sfr" width="600" height="450" loading="lazy"></iframe>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Ligny-en-Barrois</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0781722377">
                                    <span className="click-input" onClick={() => {alert('N° de téléphone copié !');}}>07 81 72 23 77</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="a.guillemin73@hotmail.fr">
                                    <span className="click-input" onClick={() => {alert('Adresse e-mail copiée !');}}>a.guillemin73@hotmail.fr</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="socials-section">
                    <h2>Mes réseaux sociaux</h2>
                    <hr />
                    <div className="my-socials">
                    <ul>
                        <li>
                            <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer"><i className="fas fa-home"></i>LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer"><i className="fas fa-home"></i>GitHub</a>
                        </li>
                    </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;