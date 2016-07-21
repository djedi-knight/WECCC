import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../src/reducers/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        test: 'Works!'
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      test: 'Works!'
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        test: 'Works!'
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      test: 'Works!'
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        test: 'Works!'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      test: 'Works!'
    }));
  });

});
