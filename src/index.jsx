import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from './store/store';
import App from './components/App';
import { HomeContainer } from './components/Home';
import { MyGroupsContainer } from './components/MyGroups';
import { MyCommunityContainer } from './components/MyCommunity';
import { PopulationReachContainer } from './components/PopulationReach';
import { CommunityTapestryContainer } from './components/CommunityTapestry';
import { VitalSignsContainer } from './components/VitalSigns';
import { ProgressTrackerContainer } from './components/ProgressTracker';
import { SharedOutcomesContainer } from './components/SharedOutcomes';

// Setup store
const store = makeStore();

// Setup routes
const routes = (
  <Route component={App}>
    <Route path="/" component={HomeContainer} />
    <Route path="/my-groups" component={MyGroupsContainer} />
    <Route path="/my-community" component={MyCommunityContainer} />
    <Route path="/public/population-reach" component={PopulationReachContainer} />
    <Route path="/public/community-tapestry" component={CommunityTapestryContainer} />
    <Route path="/public/vital-signs" component={VitalSignsContainer} />
    <Route path="/public/progress-tracker" component={ProgressTrackerContainer} />
    <Route path= "/public/shared-outcomes" component={SharedOutcomesContainer} />
  </Route>
);

// Render application
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
