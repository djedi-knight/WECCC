import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import remoteActionMiddleware from './actions/remote_action_middleware';
import App from './components/App';
import { HomeContainer } from './components/Home/Home';
import { MyGroupsContainer } from './components/MyGroups/MyGroups';

// setup React-Redux store
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);

// setup React-Router routes
const routes = (
  <Route component={App}>
    <Route path="/" component={HomeContainer} />
    <Route path="/my-groups" component={MyGroupsContainer} />
  </Route>
);

// render application
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
