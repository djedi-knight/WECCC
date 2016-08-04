import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import NavBar from '../../src/components/NavBar/NavBar';

describe('NavBar', () => {
  it('renders the component successfully', () => {
    renderIntoDocument(
      <NavBar />
    );
    expect(true);
  });
});
