import React from 'react'
import LandingPageBar from '../LandingPage/appBar';
import Grid from '@material-ui/core/Grid';
import '../LandingPage/landingPage.css';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import data_industrie from './industrie.json';
import data_phbmr from './phbmr.json';
import data_autres from './autres.json';
import { Button, Paper } from '@material-ui/core';
import { pharmaClient } from '../pharmaClient';
import { Redirect } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import Footer from '../LandingPage/footer';

const divStyle = {
    width: '50%',
    margin: '0 auto'
}

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qualities: [],
            competences: [],
            interets: []
        }

        var qualities = [];
        var competences = [];
        var interets = [];

        const data = this.props.test_type == "industrie" ? data_industrie : (this.props.test_type == "phbmr" ? data_phbmr : data_autres)
        const len = this.props.test_type == "industrie" ? 80 : (this.props.test_type == "phbmr" ? 86 : 96)
        for (let i = 0; i < data.length; i++) {
            this.state[data[i].key] = false
            if (data[i].value < 21)
                qualities.push(data[i])
            else if (data[i].value < 42)
                competences.push(data[i])
            else
                interets.push(data[i])
        }

        this.state["qualities"] = qualities
        this.state["competences"] = competences
        this.state["interets"] = interets
        this.state["len"] = len
        this.state["redirect"] = false;
        this.state["data"] = []
    }

    submit = (event) => {
        console.log(this.state)
        var self = this;
        var array = Array(this.state.len).fill(0);
        for (let i = 0; i < this.state.qualities.length; i++) {
            if (this.state[this.state.qualities[i].key])
                array[this.state.qualities[i].value] = 1
        }
        for (let i = 0; i < this.state.competences.length; i++) {
            if (this.state[this.state.competences[i].key])
                array[this.state.competences[i].value] = 1
        }
        for (let i = 0; i < this.state.interets.length; i++) {
            if (this.state[this.state.interets[i].key])
                array[this.state.interets[i].value] = 1
        }

        console.log(array)
        pharmaClient.post('/predict/', { "type": this.props.test_type, "data": array })
            .then(function (response) {
                console.log(response)
                self.setState({ data: response.data })
                self.setState({ redirect: true })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    render() {
        const pairing = [
            { "title": "Traits de personnalité", "obj": "qualities", "color" : "#264418" },
            { "title": "Qualités professionnelles", "obj": "competences", "color" : "#C7B78F" },
            { "title": "Intérêts", "obj": "interets", "color" : "#0D825B" },
        ];

        const test_name = {
            "industrie" : "Industrie",
            "autres" : "Parcours Particuliers",
            "phbmr" : "Pharmacie hôspitalière, biologie médicale et recherche"
        }

        return (
            <div>
                {this.state.redirect ? (<Redirect to={{ pathname: '/results', state: { data: this.state.data } }} />) : (<div></div>)}
                <LandingPageBar />
                <section id="banner">
                    <div className="content" justify="center" style={divStyle}>
                        <Grid>
                            <Paper elevation={3} style={{opacity : 0.7 }}><h2>Test {test_name[this.props.test_type]}</h2></Paper>
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
                            <Carousel autoPlay={false}>
                                {
                                    pairing.map((p) => {
                                        return (
                                            <div>
                                                <div style={{ padding: 10 }} />
                                                <h1 style={{color : p.color}}>{p.title}</h1>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center"
                                                    style={{margin : 15}}
                                                >
                                                    {this.state[p.obj].map((item) => {
                                                        return (<FormControlLabel control={
                                                            <Checkbox
                                                                checked={this.state[item.key]}
                                                                onChange={this.handleChange}
                                                                name={item.key}
                                                                color="primary"
                                                            />
                                                        }
                                                            label={item.key} />);
                                                    })}
                                                </Grid>
                                                <div style={{ padding: 10 }} />
                                                <Divider variant="middle" />
                                                <div style={{ padding: 10 }} />
                                            </div>
                                        );
                                    })
                                }
                            </Carousel>
                        </Grid>
                        <div style={{ padding: 15 }} />
                        <Button size="large" variant="contained" style={{backgroundColor : "#C7B78F", color: "#FFFFFF"}} onClick={this.submit}>Valider</Button>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;