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
      <Link href='http://' active label='Outcome Reports' />
      <Link href='http://' active label='About' />
      <Link href='http://' active label='Contact' />
      <Link href='http://' active label='My Community' />
      <Link href='http://' active label='My Groups' />
      <Link href='http://' active label = 'SIGN OUT' />
      </Navigation>
      </div>
    );
  }
});
