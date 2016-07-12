import React from 'react';
import {Button, Well, Collapse, Grid, Jumbotron, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

export default class Custom extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
      getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
