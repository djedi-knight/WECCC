import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from './store/store';
import App from './components/App';
import { AgencyDashboardContainer, PublicDashboardContainer } from './components/Dashboard';
import { HomeContainer } from './components/Home';
import { MyGroupsContainer } from './components/MyGroups';
import { MyCommunityContainer } from './components/MyCommunity';
import { PopulationReachContainer } from './components/PopulationReach';
import { CommunityTapestryContainer } from './components/CommunityTapestry';
import { VitalSignsContainer } from './components/VitalSigns';
import { ProgressTrackerContainer } from './components/ProgressTracker';
import { SharedOutcomesContainer } from './components/SharedOutcomes';
import { ValueImpactContainer } from './components/ValueImpact';
import { GISViewContainer } from './components/GISView';
import { InteractiveSharedOutcomesContainer } from './components/InteractiveSharedOutcomes';
import { Test } from './components/Test';

// Setup store
const store = makeStore();

// Setup routes
const routes = (
  <Route component={App}>
    <Route path="/" component={AgencyDashboardContainer}>
      <Route path="home" component={HomeContainer} />
      <Route path="my-groups" component={MyGroupsContainer} />
      <Route path="my-community" component={MyCommunityContainer} />
      <Route path="test" component={Test} />
    </Route>
    <Route path="/public" component={PublicDashboardContainer}>
      <Route path="population-reach" component={PopulationReachContainer} />
      <Route path="community-tapestry" component={CommunityTapestryContainer} />
      <Route path="vital-signs" component={VitalSignsContainer} />
      <Route path="progress-tracker" component={ProgressTrackerContainer} />
      <Route path="shared-outcomes" component={SharedOutcomesContainer} />
      <Route path="value-impact" component={ValueImpactContainer} />
      <Route path="gis-view" component={GISViewContainer} />
      <Route path="interactive-shared-outcomes" component={InteractiveSharedOutcomesContainer} />
    </Route>
  </Route>
);

// Render application
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
