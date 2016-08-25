import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory/dist/victory';

const lowRisk = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const mediumRisk = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const highRisk = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];


const dummyText = 'Adverse drug effects are defined by Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { check1: false, check2: false, check3: false };
  },
  handleChange(field, value) {
    this.setState({ field, [field]: value });
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
              {/* TODO: replace image tag with graphical component  */}
              <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
              <VictoryAxis   />
              <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}        />
              <VictoryLine
              data={lowRisk}
              x={"quarter"}
              y={"earnings"}    />
              <VictoryLine
                data={mediumRisk}
                x={"quarter"}
                y={"earnings"}  />
              <VictoryLine
                data={highRisk}
                x={"quarter"}
                y={"earnings"}  />
            </VictoryChart> 
            </Row>
            <Row className={style.peerComparisonSection}>
              <div className={style.subtitle}>
                Peer Comparison
                <FontIcon className={style.subtitleIcon} value="person" />
              </div>
              <Checkbox checked={this.state.check1} label="- - High Risk" onChange={this.handleChange.bind(this, 'check1')} />
              <Checkbox checked={this.state.check2} label="- - Medium Risk" onChange={this.handleChange.bind(this, 'check2')} />
              <Checkbox checked={this.state.check3} label="- - Low Risk" onChange={this.handleChange.bind(this, 'check3')} />
              <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
                <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
                  {dummyText}
                </p>
              </div>
            </Row>
          </Col>
          <Col className={style.sidebar} xs={3}>
            <div style={{ border: '1px solid gray', width: '27%', float: 'right', height: '508px', background: '#FADEDE' }}>
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
