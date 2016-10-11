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
import { ProgressTrackerContainer } from './components/ProgressTracker';
import { SharedOutcomesContainer } from './components/SharedOutcomes';
import { ValueImpactContainer } from './components/ValueImpact';
import { GISViewContainer } from './components/GISView';
import { CommunityPatternContainer } from './components/CommunityPattern';
import { TestContainer } from './components/Test';

// Setup store
const store = makeStore();

// Setup routes
const routes = (
  <Route component={App}>
    <Route path="/" component={AgencyDashboardContainer}>
      <Route path="home" component={HomeContainer} />
      <Route path="my-groups" component={MyGroupsContainer} />
      <Route path="my-community" component={MyCommunityContainer} />
      <Route path="test" component={TestContainer} />
    </Route>
    <Route path="/test" component={AgencyDashboardContainer}>
      <Route path="home" component={HomeContainer} testRoute />
      <Route path="my-groups" component={MyGroupsContainer} testRoute />
      <Route path="my-community" component={MyCommunityContainer} testRoute />
    </Route>
    <Route path="/public" component={PublicDashboardContainer}>
      <Route path="population-reach" component={PopulationReachContainer} />
      <Route path="community-tapestry" component={CommunityTapestryContainer} />
      {/* <Route path="vital-signs" component={VitalSignsContainer} /> */}
      <Route path="progress-tracker" component={ProgressTrackerContainer} />
      <Route path="shared-outcomes" component={SharedOutcomesContainer} />
      <Route path="value-impact" component={ValueImpactContainer} />
      <Route path="gis-view" component={GISViewContainer} />
      {/* <Route path="interactive-shared-outcomes" component={InteractiveSharedOutcomesContainer} /> */}
      <Route path="community-pattern" component={CommunityPatternContainer} />
    </Route>
    <Route path="/public/test" component={PublicDashboardContainer}>
      <Route path="population-reach" component={PopulationReachContainer} testRoute />
      <Route path="community-tapestry" component={CommunityTapestryContainer} testRoute />
      {/* <Route path="vital-signs" component={VitalSignsContainer} testRoute /> */}
      <Route path="progress-tracker" component={ProgressTrackerContainer} testRoute />
      <Route path="shared-outcomes" component={SharedOutcomesContainer} testRoute />
      <Route path="value-impact" component={ValueImpactContainer} testRoute />
      <Route path="gis-view" component={GISViewContainer} testRoute />
      {/* <Route path="interactive-shared-outcomes" component={InteractiveSharedOutcomesContainer} testRoute /> */}
      <Route path="community-pattern" component={CommunityPatternContainer} testRoute />
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
