import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: '', raised: false, icon: 'My Community Network'},
  { label: '', raised: false, icon: 'Windsor'}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyCommunityHeader">
      <Navigation type='horizontal' actions={actions} />
      <Navigation type='vertical'>
    </Navigation>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
       test: 'Works!',
    state
  };
}
