import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
}

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

});
