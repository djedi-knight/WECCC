import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory/dist/victory';
import data from './data.json';

const dummyText = 'Adverse drug effects are defined by Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      check1: false,
      check2: false,
      check3: false,
      data
    };
  },
  handleChange(value, event) {
    this.setState({ [event.target.name]: value });
  },
  render() {
    return (
      <div className={style.listBoxModalView}>
        <Row className={style.header}>
          <div className={style.title}>
            Safety Events: Adverse Drug Effects
          </div>
        </Row>
        <Row className={style.body}>
          <Col className={style.main} xs={9}>
            <Row className={style.changeOverTimeSection}>
              <div className={style.subtitle}>
                Change Over Time
                <FontIcon className={style.subtitleIcon} value="trending_up" />
              </div>
              <div style={{ width: '100%' }}>
                <VictoryChart domainPadding={20}>
                  <VictoryAxis />
                  <VictoryAxis dependentAxis />
                  <VictoryLine
                    data={this.state.data.lowRisk}
                    x={"x"}
                    y={"y"}
                    label="Low Risk"
                    style={{
                      data: {
                        stroke: '#0A4EEA',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  <VictoryLine
                    data={this.state.data.mediumRisk}
                    x={"x"}
                    y={"y"}
                    label="Medium Risk"
                    style={{
                      data: {
                        stroke: '#0AC2EA',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  <VictoryLine
                    data={this.state.data.highRisk}
                    x={"x"}
                    y={"y"}
                    label="High Risk"
                    style={{
                      data: {
                        stroke: '#12F5E4',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  {this.state.check1 ?
                    <VictoryLine
                      data={this.state.data.peerHigh}
                      x={"x"}
                      y={"y"}
                      label="Peer (High Risk)"
                      style={{
                        data: {
                          stroke: '#FF0000',
                          strokeWidth: 3
                        },
                        labels: { fontSize: 10 }
                      }}
                    />
                  : null}
                  {this.state.check2 ?
                    <VictoryLine
                      data={this.state.data.peerMedium}
                      x={"x"}
                      y={"y"}
                      label="Peer (Medium Risk)"
                      style={{
                        data: {
                          stroke: '#00FF00',
                          strokeWidth: 3
                        },
                        labels: { fontSize: 10 }
                      }}
                    />
                  : null}
                  {this.state.check3 ?
                    <VictoryLine
                      data={this.state.data.peerLow}
                      x={"x"}
                      y={"y"}
                      label="Peer (Low Risk)"
                      style={{
                        data: {
                          stroke: '#FF00CC',
                          strokeWidth: 3
                        },
                        labels: { fontSize: 10 }
                      }}
                    />
                  : null}
                </VictoryChart>
              </div>
            </Row>
            <Row className={style.peerComparisonSection}>
              <div className={style.subtitle}>
                Peer Comparison
                <FontIcon className={style.subtitleIcon} value="person" />
              </div>
              <Checkbox checked={this.state.check1} name="check1" label="- - High Risk" onChange={this.handleChange} />
              <Checkbox checked={this.state.check2} name="check2" label="- - Medium Risk" onChange={this.handleChange} />
              <Checkbox checked={this.state.check3} name="check3" label="- - Low Risk" onChange={this.handleChange} />
              <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
                <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
                  {dummyText}
                </p>
              </div>
            </Row>
          </Col>
          <Col className={style.sidebar} xs={3}>
            <div style={{ border: '1px solid gray', width: '100%', float: 'right', height: '508px', background: '#FADEDE' }}>
              <div style={{ background: '#F00', margin: '0px' }}>
                <FontIcon style={{ color: '#FFF', padding: '5px' }} value="warning" />
              </div>
              <p style={{ padding: '2px' }}> There is an indication that your High Risk score is lower than the peer score.</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});
