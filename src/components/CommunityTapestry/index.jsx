import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';

import AppBar from 'react-toolbox/lib/app_bar';
import { Card, CardText} from 'react-toolbox';
import { PieChart } from 'react-d3';
import FontIcon from 'react-toolbox/lib/font_icon';
import data from './pieData.json';


export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div style={{border:'1px solid #CCC'}} >
        <AppBar><h1>Your Community Pattern</h1></AppBar>
        <div style={{textAlign: 'center', margin:'40px' }}>
          <PieChart
            data={data}
            width={400}
            height={400}
            radius={200}
          />
        </div>
        <div style={{margin:'20px', float:'centre'}} >

        <div style={{margin:'20px', width:'20%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>S.R.O.I</h3>
                  <h2>15</h2>
                  <hr/>
                  <FontIcon value='trending_down' />
                </CardText>              
              </Card>
            </div>
            <div style={{margin:'20px', width:'20%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>E.R.O.I</h3>
                  <h2>27</h2>
                  <hr/>
                  <FontIcon value='trending_up' />
                </CardText>              
              </Card>
            </div>
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
