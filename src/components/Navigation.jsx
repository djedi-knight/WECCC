import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="Navigation">
      <Navigation type='horizontal' actions={actions} />
      <Navigation type='vertical'>
      <Link href='http://' label='O' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
      </div>
    );
  }
});
