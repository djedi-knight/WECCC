import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import { themr } from 'react-css-themr';
import style from './NavigationTheme';

const actions  = [
  { label: 'ok', raised: true, icon: 'hi'},
  { label: 'Location', raised: true, accent: true, icon: 'room'},
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
      var myStyle = {
         margin: 0,
         color: '#0000cc',
      }
    return (
      <div className="MyGroupsNavigation">
      <Navigation style ={myStyle} type='vertical' actions={actions} />
      </div>
    );
  }
});
