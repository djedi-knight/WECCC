import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { MyCommunity } from '../../src/components/MyCommunity/MyCommunity';

describe('MyCommunity', () => {
  it('renders the component successfully', () => {
    renderIntoDocument(
      <MyCommunity />
    );
    expect(true);
  });
});
