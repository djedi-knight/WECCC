import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from './store/store';
import App from './components/App';
import { HomeContainer } from './components/Home/Home';
import { MyGroupsContainer } from './components/MyGroups/MyGroups';
import { MyCommunityContainer } from './components/MyCommunity/MyCommunity';
import { PopulationReachContainer } from './components/PopulationReach/PopulationReach';
import { VitalSignsContainer } from './components/VitalSigns/VitalSigns';

// Setup store
const store = makeStore();

// Setup routes
const routes = (
  <Route component={App}>
    <Route path="/" component={HomeContainer} />
    <Route path="/my-groups" component={MyGroupsContainer} />
    <Route path="/my-community" component={MyCommunityContainer} />
    <Route path="/public/population-reach" component={PopulationReachContainer} />
    <Route path="/vital-signs" component={VitalSignsContainer} />
  </Route>
);

// Render application
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
