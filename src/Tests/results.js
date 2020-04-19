import React from 'react'
import LandingPageBar from '../LandingPage/appBar';
import Grid from '@material-ui/core/Grid';
import '../LandingPage/landingPage.css';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import Footer from '../LandingPage/footer';
import { Icon } from '@iconify/react';
import crownIcon from '@iconify/icons-mdi/crown';


const divStyle = {
    width: '50%',
    margin: '0 auto'
}

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state ? this.props.location.state.data : []
        }
        console.log(this.state.data)
    }

    iconColor(index) {
        if (index == 0)
            return (<Icon style={{color : "#D4AF37" }} icon={crownIcon} />);
        else if (index == 1)
            return (<Icon style={{color : "#aaa9ad" }} icon={crownIcon} />);
        else if (index == 2)
            return (<Icon style={{color : "#b08d57" }} icon={crownIcon} />);
        return (<div></div>);
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
                            <h1 style={{color : "#0D825B"}}>Résultats</h1>
                            <div style={{ padding: 10 }} />
                            <Divider variant="middle" />
                                <Carousel interval={5000}>
                                    {
                                        this.state.data.slice(0, 10).map((item) => {
                                            return (
                                                <Paper>
                                                    <h3 style={{color: "#C7B78F"}}>{this.state.data.indexOf(item) + 1}e place {this.iconColor(this.state.data.indexOf(item))} </h3>
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
                <Footer />
            </div>
        );
    }
}

export default Results;