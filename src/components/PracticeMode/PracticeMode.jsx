import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'react-toolbox';

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { active: true };
  },

  handleToggle() {
    this.setState({active: !this.state.active})
  },

  actions: [

    { label: "Cancel" },
    { label: "Save" },
  ],

  render () {
    return (
      <div>
      <Button label='Show my dialog' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My First Dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    );
  }
 });
