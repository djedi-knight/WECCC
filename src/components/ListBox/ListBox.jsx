import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FontIcon from 'react-toolbox/lib/font_icon';
import Table from 'react-toolbox/lib/table';
import theme from '../../theme/default';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';

const TooltipLink = new Tooltip(Link);
const title = 'RESPONDING TO NEED';
const subtitle = 'Top 3 Clinical Assessment Protocols [CAPS]';
const ListModel = {
  title: { type: String }
};

const list = [
  { title: <div>{title} <TooltipLink style={{ float: 'right' }} icon="info_outline" tooltip="info popup" /><br />{subtitle}</div> },
  { title: '1. Falls' },
  { title: <div>2. Social Isolation <a href="#" style={{ float: 'right' }}>Show details</a></div> },
  { title: <div>3. Depression <FontIcon style={{ color: '#FF0000' }} value="warning" /><a href="#" style={{ float: 'right' }}>Show details</a></div> },
  { title: <small><a href="#"><FontIcon value="person" /> Show peer comparison</a></small> }
];

// <TooltipLink style ={{color:'#FF0000'}}  icon='warning' tooltip='Warning info' />

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { source: list };
  },
  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }} >
        <Table className={theme.ListBox} selectable={false} heading={false} model={ListModel} source={this.state.source} />
        <br />
      </div>
    );
  }
});
