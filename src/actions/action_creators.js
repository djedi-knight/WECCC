export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function login() {
  return {
    type: 'LOGIN'
  };
}

export function logout() {
  return {
    type: 'LOGOUT'
  };
}
