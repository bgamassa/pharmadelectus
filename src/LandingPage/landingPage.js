import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Logo from './images/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import './landingPage.css'

class LandingPageBar extends React.Component {
    render() {
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="sticky" style={{backgroundColor: "#047924"}}>
                    <Toolbar>
                        <a href="/"> 
                        <LazyLoadImage alt="" src={Logo} border="0" height="32" />
                        </a>
                        <div style={{ padding: 10 }}/>
                        <Typography variant="h4">
                        Pharmadelectus
                        </Typography>
                        <div style={{flexGrow: 1}}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <LandingPageBar />
                <section id="banner">
                        <div className="content">
                            <h1>Le machine learning au service du domaine pharmaceutique</h1>
                            <p>Pharmadelectus vous propose un test intéractif permettant de vous orienter vers les métiers de la pharmacie <br/> qui conviennent le mieux à vos compétences, vos qualités et intérêts.</p>
                            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                <Button style={{color: "#047924", borderColor: "#047924"}}>Industrie</Button>
                                <Button style={{color: "#C7B78F", borderColor: "#C7B78F"}}>PHBMR</Button>
                                <Button style={{color: "#12546E", borderColor: "#12546E"}}>Autres métiers</Button>
                            </ButtonGroup>
                        </div>
                </section>
                <footer id="footer">
                    <div className="inner">
                        <h2>Contact</h2>
                        <ul className="actions">
                            <li><span className="icon fa-envelope" /> <span>contact.lokimo@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="copyright">
                      <a href="/privacy">Politique de confidentialité</a>
                      <br/>
                      <a href="https://www.freepik.com/free-photos-vectors/city">City vector created by freepik - www.freepik.com</a>
                      <br/>
                        <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LandingPage;