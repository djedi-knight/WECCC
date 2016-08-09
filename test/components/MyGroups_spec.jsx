import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { MyGroups } from '../../src/components/MyGroups/MyGroups';

describe('MyGroups', () => {
  it('renders the component successfully', () => {
    renderIntoDocument(
      <MyGroups />
    );
    expect(true);
  });
});
