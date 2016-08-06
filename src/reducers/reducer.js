function setState(state, newState) {
  return state.merge(newState);
}

function login(state) {
  return state.set('loggedIn', true);
}

export default function (state, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'LOGIN':
      return login(state);
    default:
      return state;
  }
}
