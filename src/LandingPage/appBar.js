import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Logo from './images/logo.png';
import AppBar from '@material-ui/core/AppBar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './landingPage.css';

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
                        <h2 style={{ color: '#FFFFFF' }}>
                        Pharmadelectus
                        </h2>
                        <div style={{flexGrow: 1}}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default LandingPageBar;