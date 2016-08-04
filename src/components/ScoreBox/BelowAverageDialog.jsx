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

  render () {
    return (
      <div>
      <Button label='Information' onMouseOver={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='I'
        >
           <Button label ='Submit' onClick={this.handleToggle} />
           <Button label ='Cancel' onClick={this.handleToggle} />
          <p>Your patient score box is below the average</p>
        </Dialog>
      </div>
    );
  }
 });
