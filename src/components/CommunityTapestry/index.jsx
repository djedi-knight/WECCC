import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';

//import AppBar from 'react-toolbox/lib/app_bar';
import { AppBar } from 'react-toolbox';
import { PieChart } from 'react-d3';

const pieData = [
  { label: 'Slice1', value: 50.0 },
  { label: 'Slice2', value: 35.0 },
  { label: 'Slice3', value: 60.0 },
  { label: 'Slice4', value: 30.0 },
  { label: 'Slice5', value: 15.0 },
  { label: 'Slice6', value: 65.0 },
  { label: 'Slice7', value: 55.0 },
  { label: 'Slice8', value: 20.0 }
];

export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div style={{border:'1px solid #CCC'}} >
        <AppBar><h1>Your Community Pattern</h1></AppBar>
        <div style={{textAlign: 'center', margin:'40px' }}>
          <PieChart
            data={pieData}
            width={400}
            height={400}
            radius={200}
          />
        </div>

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

export const CommunityTapestryContainer = connect(
  mapStateToProps,
  actionCreators
)(CommunityTapestry);
