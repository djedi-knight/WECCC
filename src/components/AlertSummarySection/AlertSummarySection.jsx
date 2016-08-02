import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';

const actions = [
  { label: '!', raised: true, accent: true, icon: 'Alert Summary' },
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="myGroupsNavigation">
        <Navigation type="horizontal" actions={actions} />
        <Navigation type="horizontal" />
      </div>
    );
  }
});
