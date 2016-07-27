import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './PurpleAppBar.scss';
import Link from 'react-toolbox/lib/link';
import { Button } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';
import SuccessButton from './SuccessButton.js';
import SignoutButton from './SignoutButton.js';



const PurpleAppBar = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
     <h4>WECCC Outcome Reports</h4>

  {children}
      <ul>  
        <li><a href="/about">ABOUT</a> </li>
        <li><a href="/contact">CONTACT</a> </li>
        <li><a href="/community">MY COMMUNITY</a></li> 
        <li><a href="/group">MY GROUPS</a></li> 
      </ul>

      <div>
          <SignoutButton/>
      </div>

  </AppBar>
);

PurpleAppBar.propTypes = {
  children: PropTypes.node
};

export default PurpleAppBar;
