import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon, Table, Tooltip, Link, Dialog, Button } from 'react-toolbox';
import ListBoxModalView from '../ListBoxModalView';
import style from './style';

const TooltipLink = new Tooltip(Link);
const title = 'RESPONDING TO NEED';
const subtitle = '(Top 3 Clinical Assessment Protocols [CAPs])';
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

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { source: list, active: false };
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div className={style.listBox}>
        <Table
          theme={style}
          selectable={false}
          heading={false}
          model={ListModel}
          source={this.state.source}
        />
        <br />
        <Button label="List Box Modal View" onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >
          <ListBoxModalView />
        </Dialog>
      </div>
    );
  }
});
