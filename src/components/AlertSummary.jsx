import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import { themr } from 'react-css-themr';
import theme from './NavigationTheme';


const actions = [
  { label: '!', raised: true, accent:true, icon: 'Alert Summary'},
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsNavigation">
         <Navigation type='horizontal' actions={actions} />
    <Navigation type='horizontal'>
    </Navigation>
      </div>
    );
  }
});
