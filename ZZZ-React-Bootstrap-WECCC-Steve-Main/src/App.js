import React from 'react';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import HeaderNavigation from './HeaderNavigation';
import Body from './Body';
import Footer from './Footer';
import Topper from './Topper';

global.React = React;

React.render(
  <div>
    <HeaderNavigation />
    <Body />
    <Topper />
    <Footer />
  </div>
  , document.getElementById('app'));
