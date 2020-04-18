import React from 'react'
import Typography from "@material-ui/core/Typography";
import LandingPageBar from '../LandingPage/appBar';
import Grid from '@material-ui/core/Grid';
import '../LandingPage/landingPage.css';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';


const divStyle = {
    width: '50%',
    margin: '0 auto'
}

export function Item(props) {
    return (
        <Paper>
            <h2>{props}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    );
}

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.data
        }
        console.log(this.props.location.state.data)
    }

    render() {
        return (
            <div>
                <LandingPageBar />
                <section id="banner">
                    <div className="content" justify="center" style={divStyle}>
                        <Grid
                            spacing={24}
                            style={{ width: '100%', margin: 0 }}
                            container
                            direction="column"
                            justify="left"
                            alignItems="left"
                            style={{ backgroundColor: "#FFFFFF", opacity: 0.6 }}
                        >
                            <div style={{ padding: 10 }} />
                            <h1>Résultats</h1>
                            <div style={{ padding: 10 }} />
                            <Divider variant="middle" />
                                <Carousel interval={5000}>
                                    {
                                        this.state.data.map((item) => {
                                            return (
                                                <Paper>
                                                    <h3>{this.state.data.indexOf(item) + 1}e place </h3>
                                                    <h2>{item.key}</h2>
                                                    <h1>{item.value} %</h1>
                                                    <Button className="CheckButton">
                                                        [Fiches métiers à venir]
                                                    </Button>
                                                </Paper>
                                            );
                                        })
                                    }
                                </Carousel>
                        </Grid>
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

export default Results;