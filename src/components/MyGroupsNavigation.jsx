import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import { themr } from 'react-css-themr';
import theme from './NavigationTheme';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsNavigation">
      <Navigation type='horizontal'>
      <Link href='http://' label='Inbox' icon='inbox' label='Inbox' icon='inbox' />
      <Link href='http://' active label='profile' icon='person' />
      <Link href='http://' active label='profile' icon='person' />
      </Navigation>
      </div>
    );
  }
});
