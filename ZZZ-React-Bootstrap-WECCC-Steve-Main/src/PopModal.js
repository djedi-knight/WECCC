import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

var Modal = window.ReactModalBootstrap.Modal;
var ModalHeader = window.ReactModalBootstrap.ModalHeader;
var ModalTitle = window.ReactModalBootstrap.ModalTitle;
var ModalClose = window.ReactModalBootstrap.ModalClose;
var ModalBody = window.ReactModalBootstrap.ModalBody;
var ModalFooter = window.ReactModalBootstrap.ModalFooter;

export default class PopModal extends React.Component {
  state = {
    isOpen: false,
    isSubOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  openSubModal = () => {
    this.setState({
      isSubOpen: true
    });
  };

  hideSubModal = () => {
    this.setState({
      isSubOpen: false
    });
  };

  render() {
    let subModalDialogStyles = {
      base: {
        bottom: -600,
        transition: 'bottom 0.4s'
      },
      open: {
        bottom: 0
      }
    };
    return (
      <div className='layout-page'>
        <main className='layout-main'>
          <div className='container'>
            <button className='btn btn-primary' onClick={this.openModal}>
              Open Modal
            </button>

            <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Modal title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <button className='btn btn-primary' onClick={this.openSubModal}>
                  Open Sub Modal
                </button>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda ex iure, necessitatibus odit optio quas
                  recusandae repellat totam. Alias dignissimos ea obcaecati quae
                  qui recusandae rem repellendus, vel veniam!</p>

                <p>Consequatur delectus doloremque in quam qui reiciendis rem
                  ut. Culpa cupiditate doloribus eos est ex illum magni nesciunt
                  obcaecati odit ratione, saepe vitae? Accusantium aliquid
                  assumenda fugiat perferendis ratione suscipit!</p>

                <p>Accusantium ad alias aliquid architecto, aspernatur autem
                  commodi distinctio dolor ducimus excepturi fugit hic laborum
                  maxime, mollitia necessitatibus neque nihil odio, officiis
                  quae quaerat quam quasi quia sed tempore ut!</p>

                <p>Accusamus asperiores aspernatur atque commodi consectetur
                  cumque cupiditate distinctio dolor dolorum eum excepturi
                  expedita explicabo fugiat iusto, labore magnam, natus nesciunt
                  nobis odio officiis provident quam, quasi quo saepe
                  suscipit!</p>

                <p>Accusantium at commodi corporis cum cumque delectus deleniti
                  dicta dolor dolore dolorem ducimus esse fugiat fugit maiores
                  neque nulla perspiciatis placeat, possimus quisquam
                  repellendus saepe suscipit tempore totam, vel voluptatem!</p>

                <p>Consequatur delectus doloremque in quam qui reiciendis rem
                  ut. Culpa cupiditate doloribus eos est ex illum magni nesciunt
                  obcaecati odit ratione, saepe vitae? Accusantium aliquid
                  assumenda fugiat perferendis ratione suscipit!</p>

                <p>Accusantium ad alias aliquid architecto, aspernatur autem
                  commodi distinctio dolor ducimus excepturi fugit hic laborum
                  maxime, mollitia necessitatibus neque nihil odio, officiis
                  quae quaerat quam quasi quia sed tempore ut!</p>

                <p>Accusamus asperiores aspernatur atque commodi consectetur
                  cumque cupiditate distinctio dolor dolorum eum excepturi
                  expedita explicabo fugiat iusto, labore magnam, natus nesciunt
                  nobis odio officiis provident quam, quasi quo saepe
                  suscipit!</p>

                <p>Accusantium at commodi corporis cum cumque delectus deleniti
                  dicta dolor dolore dolorem ducimus esse fugiat fugit maiores
                  neque nulla perspiciatis placeat, possimus quisquam
                  repellendus saepe suscipit tempore totam, vel voluptatem!</p>

                <Modal isOpen={this.state.isSubOpen} onRequestHide={this.hideSubModal} dialogStyles={subModalDialogStyles}>
                  <ModalHeader>
                    <ModalClose onClick={this.hideSubModal}/>
                    <ModalTitle>Sub Modal title</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto laborum nemo porro quaerat qui quisquam sequi,
                      tenetur. Alias nostrum qui ratione repellat rerum tenetur
                      voluptas. Commodi dolore eligendi facilis nihil.</p>

                    <p>Autem distinctio fugit laboriosam molestias nulla, qui
                      repudiandae ullam vero voluptas? Aperiam corporis dolore
                      laboriosam molestiae saepe veritatis voluptate,
                      voluptatem. Assumenda ducimus error fugit iusto quos
                      ratione! Doloribus, iste saepe?</p>

                    <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
                      explicabo hic incidunt placeat quasi repellendus soluta,
                      vero. Autem delectus est laborum minus modi molestias
                      natus provident, quidem rerum sint, voluptas!</p>
                  </ModalBody>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                  Close
                </button>
                <button className='btn btn-primary'>
                  Save changes
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </main>
      </div>
    );
  }
}

function run() {
  ReactDOM.render( < PopModal / > , document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
