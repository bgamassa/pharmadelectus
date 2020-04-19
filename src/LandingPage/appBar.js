import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './images/logo.png';
import AppBar from '@material-ui/core/AppBar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Chip from '@material-ui/core/Chip';
import './landingPage.css';

class LandingPageBar extends React.Component {

    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ backgroundColor: "#047924" }}>
                    <Toolbar>
                        <a href="/">
                            <LazyLoadImage alt="" src={Logo} border="0" height="32" />
                        </a>
                        <div style={{ padding: 10 }} />
                        <h2 style={{ color: '#FFFFFF' }}>
                            Pharmadelectus
                        </h2>
                        <div style={{ flexGrow: 1 }} />
                        <Chip style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }} label="Fiches métiers" component="a" href="/metiers" clickable variant="outlined" />
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}

export default LandingPageBar;