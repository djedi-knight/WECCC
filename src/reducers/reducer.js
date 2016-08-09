function setState(state, newState) {
  return state.merge(newState);
}

function login(state) {
  return state.set('isLoggedIn', true);
}

function logout(state) {
  return state.set('isLoggedIn', false);
}

export default function (state, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'LOGIN':
      return login(state);
    case 'LOGOUT':
      return logout(state);
    default:
      return state;
  }
}
