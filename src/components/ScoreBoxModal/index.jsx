import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon} from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import Score from './Score.jsx';

const dummyText = 'The DIVERT scale shows Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { check1: false};
  },
  handleChange(field, value) {
    this.setState({ [field]: value });
  },
  
  render() {
    return (
      <div className={style.listBoxModalView}>
        <Row >
          <div className={style.title}>
            Readmissions
          </div>
        </Row>
        <Row className={style.body}>
          <Col className={style.main} xs={9}>
            <Row>
              <div  >
                DIVERT                
              </div>
              <div style={{ width: '100%' }}>
                <Score />
              </div>
            </Row>
            <Row >
              <div >
                <FontIcon value="remove"/>My Outcomes <br/>
                <input type="checkbox" /> -- Peer Comparison                
              </div>
              <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
                <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
                  {dummyText}
                </p>
              </div>
            </Row>
          </Col>
          <Col className={style.sidebar} xs={3}>
            <div style={{ border: '1px solid gray', width: '100%', float: 'right', height: '300px',background: '#FADEDE' }}>
              <div style={{ background: '#F00', margin: '0px' }}>
                <FontIcon style={{ color: '#FFF', padding: '5px' }} value="warning" />
              </div>
              <p style={{ padding: '2px' }}> There is an indication that your DIVERT score is lower than the peer score.</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});
