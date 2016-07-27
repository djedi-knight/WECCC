import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';


export default React.createClass({
  mixins: [PureRenderMixin],
  render () {
    return (
      <div>
        <Button label='Show my dialog' onClick={this} />
        <Dialog
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    );
  }
});
