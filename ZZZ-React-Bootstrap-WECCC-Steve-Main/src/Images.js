/**
 * App.js
 * Create a custom <Modal/> component to display dynamic content
 */
 import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    // Init state
    this.state = { modalOpen: props.opened, pic: props.welcomePicture};
  }

  // Toggle Modal visibility
  toggleModal(pic) {
    const state = this.state.modalOpen;
    // Update state: modal visibility and its content
    this.setState({ modalOpen: !state, pic });
  }

  render() {
    const { modalOpen, pic } = this.state;
    return (
      <div>
        { /* Modal */ }
        <Modal bg="#222" show={ modalOpen }
           onClose={ this.toggleModal.bind(this) }>
          <img src={ pic } />
        </Modal>

        { /* Buttons: open modals */ }
        <button className="btn"
          onClick={this.toggleModal.bind(this, 'http://lorempixel.com/200/200/business/1')}>
            Business
        </button>

        { /* You can also use the arrow functions to call a component method */ }
        <button className="btn"
          onClick={ () => this.toggleModal('http://lorempixel.com/400/200/nature/1')}>
            Fashion
        </button>
       </div>
    );
  }
}


/**
 * Reusable Modal Component
 */
class Modal extends React.Component {
  render() {
    const { show, bg, closeModal } = this.props;
    // Custom styles: set visibility and backbround color
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
      }
    };

    return (
      <div className="modal-wrapper" style={styles.modal}>
        { /* Close Button: invoke callback */ }
        <span className="glyphicon glyphicon-remove-sign modal-item"
            onClick={this.props.onClose}></span>
        { /* Content */ }
        <div className="modal-item">
          { this.props.children }
        </div>
      </div>
    )
  }
}


// Init App
// We pass some parameters to define the visibility and content of the modal when the application starts.
React.render(
  <App opened={true}
     welcomePicture="http://lorempixel.com/200/200/abstract/1/Welcome/"/>,
  document.getElementById('react_app')
)
