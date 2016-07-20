import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

	// it('handles SET_STATE', () => {
	// 	const initialState = Map();
 //    	const action = {
 //    		type: 'SET_STATE',
	// 	    state: Map({
	// 	    	vote: Map({
	// 	    		pair: List.of('Trainspotting', '28 Days Later'),
	// 	            tally: Map({Trainspotting: 1})
	// 	        })
	// 	    })
	// 	};
	//     const nextState = reducer(initialState, action);

	//     expect(nextState).to.equal(fromJS({
	//     	vote: {
	//     		pair: ['Trainspotting', '28 Days Later'],
	// 	        tally: {Trainspotting: 1}
	// 	    }
	//     }));
	// });

	// it('handles SET_STATE with plain JS payload', () => {
	// 	const initialState = Map();
	//     const action = {
	//     	type: 'SET_STATE',
	//         state: {
	//         	vote: {
	// 		        pair: ['Trainspotting', '28 Days Later'],
	// 		        tally: {Trainspotting: 1}
	// 		    }
	// 		}
	//     };
	// 	const nextState = reducer(initialState, action);
 //        expect(nextState).to.equal(fromJS({
 //        	vote: {
	// 	    	pair: ['Trainspotting', '28 Days Later'],
	// 	        tally: {Trainspotting: 1}
	// 	    }
	// 	}));
	// });

 //    it('handles SET_STATE without initial state', () => {
	// 	const action = {
	// 	    type: 'SET_STATE',
	// 	    state: {
	// 	    	vote: {
	// 	    		pair: ['Trainspotting', '28 Days Later'],
	// 	            tally: {Trainspotting: 1}
	// 	        }
	// 	    }
	// 	};
	//     const nextState = reducer(undefined, action);

	// 	expect(nextState).to.equal(fromJS({
	// 	    vote: {
	// 	    	pair: ['Trainspotting', '28 Days Later'],
	// 	        tally: {Trainspotting: 1}
	// 	    }
	// 	}));
	// });

	it('has an initial state', () =>{
		const action = {type: 'SET_ENTRIES', entries:['Trainspotting']};
		const nextState = reducer(undefined, action);
		expect(nextState).to.equal(fromJS({
			entries: ['Trainspotting']
		}));
	});

	it('handles SET_ENTRIES', () => {
		const initialState = Map();
		const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
        	entries: ['Trainspotting']
    	}));
  });

	it('handles NEXT', () => {
	 	const initialState = fromJS({
	 		entries: ['Trainspotting', '28 Days Later']
    	});
	    const action = {type: 'NEXT'};
	    const nextState = reducer(initialState, action);

	    expect(nextState).to.equal(fromJS({
	    	vote: {
	        	pair: ['Trainspotting', '28 Days Later']
	      	},
	      	entries: []
	    }));
  	});

	it('handles VOTE', () => {
		const initialState = fromJS({
			vote : {
				pair : ['Trainspotting', '28 Days Later']
			},
			entries : []
		});
		const action = {type : 'VOTE', entry: 'Trainspotting'};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote : {
				pair : ['Trainspotting', '28 Days Later'],
				tally : {'Trainspotting' : 1}
			},
			entries : []
		}));
	});

	it('can be used with reduce', () => {
		const actions = [
			{
				type  : 'SET_ENTRIES', entries : ['Trainspotting', '28 Days Later'] 
			},
			{
				type  : 'NEXT'
			},
			{
				type : 'VOTE', entry : 'Trainspotting'
			},
			{
				type : 'VOTE', entry : '28 Days Later'
			},
			{
				type : 'VOTE', entry : 'Trainspotting'
			},
			{
				type : 'NEXT'
			}
		];
		const finalState = actions.reduce(reducer, Map());

		expect(finalState).to.equal(fromJS({
			winner : 'Trainspotting'
		}));
	});

	it('handles VOTE by setting hasVoted', () => {
		const state = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
		        tally: {Trainspotting: 1}
		    }
	    });
	    const action = {type: 'VOTE', entry: 'Trainspotting'};
	    const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
		    vote: {
		    	pair: ['Trainspotting', '28 Days Later'],
		        tally: {Trainspotting: 1}
		    },
		    hasVoted: 'Trainspotting'
		}));
	});

	it('does not set hasVoted for VOTE on invalid entry', () => {
		const state = fromJS({
		    vote: {
			    pair: ['Trainspotting', '28 Days Later'],
			    tally: {Trainspotting: 1}
		    }
		});
		const action = {type: 'VOTE', entry: 'Sunshine'};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
		    vote: {
		      pair: ['Trainspotting', '28 Days Later'],
		      tally: {Trainspotting: 1}
		    }
		}));
	});

	it('removes hasVoted on SET_STATE if pair changes', () => {
		const initialState = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
		        tally: {Trainspotting: 1}
		    },
	    	hasVoted: 'Trainspotting'
	  	});
	    const action = {
	    	type: 'SET_STATE',
	    	state: {
	    		vote: {
	    			pair: ['Sunshine', 'Slumdog Millionaire']
	      		}
	    	}
	  	};
	    const nextState = reducer(initialState, action);

	    expect(nextState).to.equal(fromJS({
	    	vote: {
	    		pair: ['Sunshine', 'Slumdog Millionaire']
	        }
	    }));
	});
});