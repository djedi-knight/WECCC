import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NavBar } from '../../src/components/NavBar';

describe('NavBar', () => {
  it('renders the component successfully', () => {
    let isLoggedIn = false;
    const login = () => {};
    const logout = () => {};

    shallow(<NavBar isLoggedIn={isLoggedIn} login={login} logout={logout} />);
    expect(true);
  });

  it('renders the Logged Out state correctly', () => {
    let isLoggedIn = false;
    const login = () => {};
    const logout = () => {};

    const result = shallow(<NavBar isLoggedIn={isLoggedIn} login={login} logout={logout} />);
    expect(result.find('.NavItems li')).to.have.length(2);
  });

  it('renders the Logged In state correctly', () => {
    let isLoggedIn = true;
    const login = () => {};
    const logout = () => {};

    const result = shallow(<NavBar isLoggedIn={isLoggedIn} login={login} logout={logout} />);
    expect(result.find('.NavItems li')).to.have.length(4);
  });
});
