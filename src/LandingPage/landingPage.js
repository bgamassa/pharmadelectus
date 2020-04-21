import React from 'react'
import Button from '@material-ui/core/Button'
import './landingPage.css'
import LandingPageBar from './appBar';
import Footer from './footer';

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
                        <h1>Le machine learning au service des études en Pharmacie</h1>
                        <div style={{ padding: 10 }} />
                        <p style={divStyle}>Pharmadelectus vous propose un test intéractif permettant de découvrir les métiers de la pharmacie <br /> qui conviennent le mieux à vos compétences, qualités et intérêts.</p>
                        <div style={{ padding: 30 }} />
                        <Button variant="contained" size="large" style={{ backgroundColor: "#12546E", color: "#FFFFFF" }} href="/orientation">Trouver mon orientation</Button>
                    </div>
                    <div style={{ padding: 70 }} />
                </section>
                <section id="three" className="wrapper">
                    <div className="inner flex flex-3">
                        <div className="flex-item box">
                            <div className="content">
                                <h3 style={{color : "#0D825B"}}>À propos</h3>
                                <p>La plateforme Pharmadelectus a été créée afin de faciliter l’orientation de l’étudiant en se basant sur sa personne et ses compétences. Le but est de proposer à l’étudiant des métiers qui correspondent le plus à son profil.</p>
                            </div>
                        </div>
                        <div className="flex-item box">
                            <div className="content">
                                <h3 style={{color : "#0D825B"}}>Comment ça marche ?</h3>
                                <p>Sous la forme d'un test anonyme, les informations sont analysées et traitées par un algorithme de Machine Learning utilisant un arbre de décision. Un classement des métiers les plus compatibles avec l'étudiant est ensuite établi.</p>
                            </div>
                        </div>
                        <div className="flex-item box">
                            <div className="content">
                                <h3 style={{color : "#0D825B"}}>Comment est né le projet ?</h3>
                                <p>Pharmadelectus a été pensé et conçu par 3 étudiants en filière pharmaceutique à la faculté de Paris-Saclay - Châtenay-Malabry (Paris XI). Notre souhait premier est de donner un maximum de visibilité aux étudiants concernant les métiers de la pharmacie qu'ils peuvent exercer après leurs études.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;