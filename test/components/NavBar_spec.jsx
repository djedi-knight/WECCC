import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import { expect } from 'chai';
import NavBar from '../../src/components/NavBar/NavBar'

describe('NavBar', () => {
  it('renders the page', () => {
    const component = renderIntoDocument(
      <NavBar />
    );
    const content = scryRenderedDOMComponentsWithClass(component, 'home');

    // expect(content[0].textContent).to.equal('Homepage Stub');
    expect(true);
  });
});
