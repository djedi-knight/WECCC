import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import { expect } from 'chai';
import { Home } from '../../src/components/Home/Home';

describe('Home', () => {
  it('renders the page', () => {
    const component = renderIntoDocument(
      <Home />
    );
    const content = scryRenderedDOMComponentsWithClass(component, 'home');

    expect(content[0].textContent).to.equal('Homepage Stub');
  });
});
