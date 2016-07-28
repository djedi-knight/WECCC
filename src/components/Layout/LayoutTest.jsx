import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { AppBar, Layout, Panel } from 'react-toolbox';
import HeaderImage from '../HeaderImage/HeaderImage.jsx';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <Layout>
        <Panel>
          <AppBar fixed flat >Outcome Reports</AppBar>
          <br /><br /><br /><br />
          <div style={{ display: 'block', width: '50%', margin: 'auto', padding: 10 }}>
            <HeaderImage />
          </div>
        </Panel>
      </Layout>
		);
  }
});
