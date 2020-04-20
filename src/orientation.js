import React from 'react'
import LandingPageBar from './LandingPage/appBar';
import Grid from '@material-ui/core/Grid';
import './LandingPage/landingPage.css';
import { Button, Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Footer from './LandingPage/footer';

const divStyle = {
    width: '50%',
    margin: '0 auto'
}

class Orientation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
            step1: true,
            trad: false,
        })
    }

    goBack = (event) => {
        this.setState({
            step1: true,
            trad: false,
        })
    }

    selectTrad = (event) => {
        this.setState({
            step1: false,
            trad: true
        })
    }

    getQuestion() {
        if (this.state.step1)
            return (<h3>Souhaitez-vous vous orienter vers une filière traditionnelle ou vers un parcours particulier ?</h3>);
        return (<h3>Sélectionnez un test parmi celui du domaine de l'<span style={{color : "#047924"}}>Industrie</span> ou celui de la <span style={{color : "#047924"}}>Pharmacie hôspitalière, biologie médicale et recherche.</span></h3>);
    }

    getButtons() {
        if (this.state.step1) {
            return (
                <Grid container direction="row" justify="center">
                    <Button size="large" variant="contained" style={{ backgroundColor: "#C7B78F", color: "#FFFFFF" }} onClick={this.selectTrad}>Filières Traditionnelles</Button>
                    <div style={{ padding: 15 }} />
                    <Button size="large" variant="contained" style={{ backgroundColor: "#C7B78F", color: "#FFFFFF" }} href="/pharmadelectus-project/#/autres">Parcours Particuliers</Button>
                </Grid>
            );
        }
        return (
            <Grid container direction="column" justify="center">
                <Grid container direction="row" justify="center">
                    <Button size="large" variant="contained" style={{ backgroundColor: "#C7B78F", color: "#FFFFFF" }} href="/pharmadelectus-project/#/industrie">Industrie</Button>
                    <div style={{ padding: 15 }} />
                    <Button size="large" variant="contained" style={{ backgroundColor: "#C7B78F", color: "#FFFFFF" }} href="/pharmadelectus-project/#/phbmr">PHBMR</Button>
                    <div style={{ padding: 15 }} />
                    <Button size="large" variant="contained" style={{ backgroundColor: "#C7B78F", color: "#FFFFFF" }}>Officine</Button>
                </Grid>
                <div style={{ padding: 15 }} />
                <Grid container direction="row" justify="center">
                    <Button size="large" variant="contained" style={{ backgroundColor: "#12546E", color: "#FFFFFF" }} onClick={this.goBack}>Retour</Button>
                </Grid>
            </Grid>
        );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    render() {
        return (
            <div>
                {this.state.industrie ? (<Redirect to="/pharmadelectus-project/#/industrie" />) : (<div></div>)}
                {this.state.part ? (<Redirect to="/pharmadelectus-project/#/autres" />) : (<div></div>)}
                {this.state.phbmr ? (<Redirect to="/pharmadelectus-project/#/phbmr" />) : (<div></div>)}
                <LandingPageBar />
                <section id="banner">
                    <div className="content" justify="center" style={divStyle}>
                        <Grid>
                            <Paper elevation={3} style={{ opacity: 0.7 }}><h2>{this.getQuestion()}</h2></Paper>
                        </Grid>
                        <div style={{ padding: 25 }} />
                        <Grid
                            spacing={24}
                            style={{ width: '100%', margin: 0 }}
                            container
                            direction="column"
                            justify="left"
                            alignItems="left"
                            style={{ backgroundColor: "#FFFFFF", opacity: 0.6 }}
                        >
                        </Grid>
                        {this.getButtons()}
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Orientation;