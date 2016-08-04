import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Layout, Panel } from 'react-toolbox';
import HeaderImage from '../HeaderImage/HeaderImage.jsx';
import DataSources from '../DataSources/DataSources.jsx';
import SharedGoals from '../SharedGoals/SharedGoals.jsx';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <Layout className={theme.layoutTest}>
        <Panel>
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
