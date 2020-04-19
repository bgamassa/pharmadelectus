import React from 'react'
import './landingPage.css'

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <h2>Contact</h2>
                    <ul className="actions">
                        <li><span className="icon fa-envelope" /> <span>pharmadelectus@gmail.com</span></li>
                    </ul>
                </div>
                <div className="copyright">
                    @Tous droits réservés Pharmadelectus<br/>
                    Projet élaboré par Djibril GUEYE, Samira IDHAMMOU, et Adam SADKI<br/>
                    Développement web réalisé par Binta GAMASSA, avec l'aide de Thanh-Long NGUYEN<br/>
                </div>
            </footer>
        );
    }
}

export default Footer;