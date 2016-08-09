import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Layout, Panel } from 'react-toolbox';
import HeaderImage from '../HeaderImage/HeaderImage.jsx';
import DataSources from '../DataSources/DataSources.jsx';
import SharedGoals from '../SharedGoals/SharedGoals.jsx';
import theme from '../../theme/default';

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="home">
        <Layout className={theme.homeLayout}>
          <Panel>
            <br /><br /><br /><br />
            <div>
              <HeaderImage />
              <SharedGoals />
              <DataSources />
            </div>
          </Panel>
        </Layout>
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

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
)(Home);
