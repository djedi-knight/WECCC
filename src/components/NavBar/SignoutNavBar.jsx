import React from 'react';
import { AppBar } from 'react-toolbox';
import theme from '../../theme/SignoutNavBar.scss';
import SignoutButton from './SignoutButton.jsx'
import { Button } from 'react-toolbox/lib/button';



class SignoutNavBar extends React.Component {    

    render() {
        return (
            
                    <AppBar theme={theme} fixed flat >
                        <h4>Outcome Reports</h4>
                        <ul >  
                            <li><a href="/about">ABOUT</a> </li>
                            <li><a href="/contact">CONTACT</a> </li>
                            <li><a href="/community">MY COMMUNITY</a></li> 
                            <li><a href="/group">MY GROUPS</a></li> 
                        </ul>

                   
                        <SignoutButton />  

                        

                    </AppBar>
                    
        );
    }
}

export default SignoutNavBar;