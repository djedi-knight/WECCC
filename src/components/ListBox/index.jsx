import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Dialog, FontIcon, Link, Tooltip } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ListBoxModalView from '../ListBoxModalView';
import style from './style';
import data from './data.json';

const TooltipLink = new Tooltip(Link);

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      active: false,
      data
    };
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div className={style.listBox}>
        <Row style={{ backgroundColor: '#fff' }}>
          {this.state.data.title}<br />
          {this.state.data.subtitle}
          <Col><TooltipLink style={{ float: 'right' }} icon="info_outline" tooltip="info popup" /></Col>
        </Row>
        {this.state.data.topics.map((topic, i) =>
          <Row key={i} style={{ border: '0.5px solid gray', backgroundColor: '#e8f8f5' }}>
            {topic.title}
            {topic.warning === 'yes' ? <FontIcon style={{ color: '#FF0000' }} value="warning" /> : null}
            {topic.details === 'yes' ? <Link onClick={this.handleToggle} label="Show details" /> : null}
          </Row>
        )}
        <Row style={{ backgroundColor: '#fff' }}>
          <small><a href="#"><FontIcon value="person" />Show peer comparison</a></small>
        </Row>
        <br />
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
