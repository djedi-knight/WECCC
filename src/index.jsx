import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from './store/store';
import App from './components/App';
import { AgencyDashboardContainer, PublicDashboardContainer } from './components/Dashboard';
import { CommunityPatternContainer } from './components/CommunityPattern';
import { CommunityTapestryContainer } from './components/CommunityTapestry';
import { GISViewContainer } from './components/GISView';
import { HomeContainer } from './components/Home';
import { MyCommunityContainer } from './components/MyCommunity';
import { MyGroupsContainer } from './components/MyGroups';
import { PopulationReachContainer } from './components/PopulationReach';
import { ProgressTrackerContainer } from './components/ProgressTracker';
import { SharedOutcomesContainer } from './components/SharedOutcomes';
import { ValueImpactContainer } from './components/ValueImpact';

import { TestContainer } from './components/Test';

// Setup store
const store = makeStore();

// Setup routes
const routes = (
  <Route component={App}>
    <Route path="/" component={AgencyDashboardContainer}>
      <Route path="home" component={HomeContainer} />
      <Route path="my-community" component={MyCommunityContainer} />
      <Route path="my-groups" component={MyGroupsContainer} />
      <Route path="test" component={TestContainer} />
    </Route>
    <Route path="/demo" component={AgencyDashboardContainer}>
      <Route path="home" component={HomeContainer} demoRoute />
      <Route path="my-community" component={MyCommunityContainer} demoRoute />
      <Route path="my-groups" component={MyGroupsContainer} demoRoute />
    </Route>
    <Route path="/public" component={PublicDashboardContainer}>
      <Route path="community-pattern" component={CommunityPatternContainer} />
      <Route path="community-tapestry" component={CommunityTapestryContainer} />
      <Route path="gis-view" component={GISViewContainer} />
      <Route path="population-reach" component={PopulationReachContainer} />
      <Route path="progress-tracker" component={ProgressTrackerContainer} />
      <Route path="shared-outcomes" component={SharedOutcomesContainer} />
      <Route path="value-impact" component={ValueImpactContainer} />
    </Route>
    <Route path="/public/demo" component={PublicDashboardContainer}>
      <Route path="community-pattern" component={CommunityPatternContainer} demoRoute />
      <Route path="community-tapestry" component={CommunityTapestryContainer} demoRoute />
      <Route path="gis-view" component={GISViewContainer} demoRoute />
      <Route path="population-reach" component={PopulationReachContainer} demoRoute />
      <Route path="progress-tracker" component={ProgressTrackerContainer} demoRoute />
      <Route path="shared-outcomes" component={SharedOutcomesContainer} demoRoute />
      <Route path="value-impact" component={ValueImpactContainer} demoRoute />
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
