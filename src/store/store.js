import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/reducer';
import remoteActionMiddleware from '../actions/remote_action_middleware';

const initialState = fromJS({
  isLoggedIn: false
});

export default function makeStore() {
  // Setup React-Redux store & apply middleware/ Redux DevTools to the store
  return createStore(reducer, initialState, compose(
    applyMiddleware(remoteActionMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // TODO: exclude devToolsExtension from production build
}
