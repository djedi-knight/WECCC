import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon, Checkbox } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryStack, VictoryGroup } from 'victory/dist/victory';
import style from './style';
import data from './data.json';

const dummyText = 'The DIVERT scale shows Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';
const b= 4;
const d = 3;
export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { check: false, data };
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
              <div>
                DIVERT
              </div>
              <div style={{ width: '100%' }}> 
              <VictoryChart height={150} domain={{x:[0,5]}}> 
                <VictoryAxis tickValues={[0, 1, 2, 3, 4, 5]} style={{ticks: { stroke: 'red', size: 10 }, tickLabels: { fontSize: 22 },}} />
                <VictoryGroup horizontal height={100} offset={20} colorScale={"qualitative"} >
                  <VictoryBar data={this.state.data.score} />
                  {this.state.check ? <VictoryBar data={this.state.data.peer}/> : null }              
                </VictoryGroup>
              </VictoryChart>
              </div>
            </Row>
            <Row >
              <div >              
                <FontIcon value="remove" /> My Outcomes <br />        
                <Checkbox checked={this.state.check} label="-- Peer Comparison" onChange={this.handleChange.bind(this, 'check')}/>
              </div>
              <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
                <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
                  {dummyText}
                </p>
              </div>
            </Row>
          </Col>
          <Col className={style.sidebar} xs={3}>          
            <div style={{ border: '1px solid gray', width: '100%', float: 'right', height: '300px', background: '#FADEDE' }}>
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
