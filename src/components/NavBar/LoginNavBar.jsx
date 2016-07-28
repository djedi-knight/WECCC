import React from 'react';
import { AppBar } from 'react-toolbox';
import { Layout, NavDrawer } from 'react-toolbox';
import theme from '../../theme/LoginNavBar.scss';
import LoginButton from './LoginButton.jsx'
import { Button } from 'react-toolbox/lib/button';


class LoginNavBar extends React.Component {    

    render() {
        return (
            
                    <AppBar theme={theme} fixed flat >
                        <h4>Outcome Reports</h4>
                        <ul >  
                            
                            <li><a href="/about">ABOUT</a> </li>
                            <li><a href="/contact">CONTACT</a> </li>
                         </ul>

                            <LoginButton />  

                    </AppBar>
                    
        );
    }
}

export default LoginNavBar;





