import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { AppBar, Layout, Panel } from 'react-toolbox';
import HeaderImage from '../HeaderImage/HeaderImage.jsx';
import DataSources from '../DataSources/DataSources.jsx';
import SharedGoals from '../SharedGoals/SharedGoals.jsx'
import style from '../../theme/style';

let className = style.layouttest;

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <Layout className={className}>
        <Panel>
          <AppBar fixed flat >Outcome Reports</AppBar>
          <br /><br /><br /><br />
          <div>
            <HeaderImage />
            <SharedGoals />
            <DataSources />
          </div>
        </Panel>
      </Layout>
		);
  }
});
