import React from 'react';
import Portal from 'react-portal';
import DialogBoxPart from './DialogBoxPart';

export default React.createClass({
  render() {
    const button1 = <button>Open portal with pseudo modal</button>;

    return (
      <Portal closeOnEsc closeOnOutsideClick openByClickOn={button1}>
        <DialogBoxPart>
          <h2>Pseudo Modal</h2>
          <p>This react component is appended to the document body.</p>
        </DialogBoxPart>
      </Portal>
    );
  }
});
