import React from 'react'
import LandingPageBar from './LandingPage/appBar';
import Grid from '@material-ui/core/Grid';
import './LandingPage/landingPage.css';
import Divider from '@material-ui/core/Divider';
import data_industrie from './Tests/industrie_jobs.json';
import data_phbmr from './Tests/phbmr_jobs.json';
import data_autres from './Tests/autres_jobs.json';
import { Button, Paper } from '@material-ui/core';
import Footer from './LandingPage/footer';

const divStyle = {
    width: '50%',
    margin: '0 auto'
}

class Jobs extends React.Component {

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    render() {
        const pairing = [
            { "title": "Industrie", "obj": data_industrie, "color": "#264418" },
            { "title": "Pharmacie hôspitalière, biologie médicale et recherche", "obj": data_phbmr, "color": "#C7B78F" },
            { "title": "Parcours particuliers", "obj": data_autres, "color": "#0D825B" },
        ];

        return (
            <div>
                <LandingPageBar />
                <section id="banner">
                    <div className="content" justify="center" style={divStyle}>
                        <Grid>
                            <Paper elevation={3} style={{ opacity: 0.7 }}>
                                <div style={{ padding: 10 }} />
                                <h1 style={{ color: "#12546E" }}>Fiches métiers</h1>
                                <h5>(Contenu à venir)</h5>
                                <div style={{ padding: 10 }} />
                            </Paper>
                        </Grid>
                        <div style={{ padding: 25}} />
                        {pairing.map((p) => {
                            return (
                                <div>
                                    <Grid>
                                        <Paper elevation={3} style={{ opacity: 0.7 }}><h2 style={{ color: p.color }}>Secteur {p.title}</h2></Paper>
                                    </Grid>
                                    <div style={{ padding: 5 }} />
                                    <Grid
                                        spacing={24}
                                        style={{ width: '100%', margin: 0 }}
                                        container
                                        direction="column"
                                        justify="left"
                                        alignItems="left"
                                        style={{ backgroundColor: "#FFFFFF", opacity: 0.6 }}
                                    >
                                        <div style={{ padding: 5 }} />
                                        <ul style={{ listStyleType: "none" }}>
                                            {
                                                p.obj.map((item) => {
                                                    return (
                                                        <li>• {item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Grid>
                                    <Divider variant="middle" />
                                    <div style={{ padding: 30 }} />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <Footer />
            </div >
        );
    }
}

export default Jobs;