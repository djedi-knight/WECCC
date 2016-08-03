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
      <Button label='4/10' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Readmissions'
        >
        <ScoreBoxSlider />
          <p>The Divert scale shows a comparison between your scores and those of your peers.(click away from this box to go back to main page)</p>
        </Dialog>
      </div>
    );
  }
 });
