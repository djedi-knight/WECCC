import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
ReactStormpath.init();
ReactDOM.render(
<Router history={createBrowserHistory()}>
  <HomeRoute path='/' component={MasterPage}>
  <Route path='/register' component={RegistrationPage} />
  <AuthenticatedRoute>
    <HomeRoute path='/profile' component={ProfilePage} />
  </AuthenticatedRoute>
  <LoginRoute path='/login' component={LoginPage} />
  <IndexRoute component={IndexPage} />
</HomeRoute>
</Router>,
  document.getElementById('app-container')
);



