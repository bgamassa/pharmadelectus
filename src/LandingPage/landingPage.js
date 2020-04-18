import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import './landingPage.css'
import LandingPageBar from './appBar';

const divStyle = {
    width: '70%',
    margin: '0 auto'
}

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <LandingPageBar />
                <section id="banner">
                    <div className="content">
                        <h1>Le machine learning au service du domaine pharmaceutique</h1>
                        <p style={divStyle}>Pharmadelectus vous propose un test intéractif permettant de découvrir les métiers de la pharmacie <br /> qui conviennent le mieux à vos compétences, vos qualités et intérêts.</p>
                        <div style={{ padding: 20 }} />
                        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                            <Button style={{ color: "#047924", borderColor: "#047924" }} href="/industrie">Industrie</Button>
                            <Button style={{ color: "#C7B78F", borderColor: "#C7B78F" }} href="/phbmr">PHBMR</Button>
                            <Button style={{ color: "#12546E", borderColor: "#12546E" }} href="/autres">Autres métiers</Button>
                        </ButtonGroup>
                    </div>
                </section>
                <footer id="footer">
                    <div className="inner">
                        <h2>Contact</h2>
                        <ul className="actions">
                            <li><span className="icon fa-envelope" /> <span>pharmadelectus@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <a href="/privacy">Politique de confidentialité</a>
                        <br />
                        <a href="https://www.freepik.com/free-photos-vectors/city">City vector created by freepik - www.freepik.com</a>
                        <br />
                        <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LandingPage;