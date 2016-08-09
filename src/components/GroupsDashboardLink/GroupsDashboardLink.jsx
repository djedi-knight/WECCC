import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: '', raised: false, icon: 'Ok I Understand: '},
  { label: '', raised: true, accent:true, icon: 'Go To Groups Dashboard'}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="GroupsDashboardLink">
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
