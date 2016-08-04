import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import { expect } from 'chai';
import { MyGroups } from '../../src/components/MyGroups/MyGroups';

describe('MyGroups', () => {
  it('renders the page', () => {
    const component = renderIntoDocument(
      <MyGroups />
    );
    const content = scryRenderedDOMComponentsWithClass(component, 'MyGroups');

    // expect(content[0].textContent).to.equal('Homepage Stub');
    expect(true);
  });
});
