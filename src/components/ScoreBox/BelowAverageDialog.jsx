import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import ScoreBoxSlider from './ScoreBoxSlider';

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { active: false };
  },

  handleToggle() {
    this.setState({active: !this.state.active})
  },

  actions: [
    { label: "Cancel"},
    { label: "Save" },
  ],


  render () {
    return (
      <div>
      <Button label='Information' onMouseMove={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='I'
        >
          <p>Your patient score box is below the average</p>
        </Dialog>
      </div>
    );
  }
 });
