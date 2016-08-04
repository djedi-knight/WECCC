import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { Home } from '../../src/components/Home/Home';

describe('Home', () => {
  it('renders the component successfully', () => {
    renderIntoDocument(
      <Home />
    );
    expect(true);
  });
});
