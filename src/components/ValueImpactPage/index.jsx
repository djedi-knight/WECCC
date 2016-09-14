import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import style from './style';

const careNeeds = [
  { value: 'light', label: 'Light' },
  { value: 'moderate', label: 'Moderate'},
  { value: 'complex', label: 'Complex' },
  { value: 'eol', label: 'EOL'}
];
const city = [
  { value: 'leamington', label: 'Leamington' },
  { value: 'windsor', label: ' Windsor'},
  { value: 'london', label: 'London' },
  { value: 'amherstburg', label: 'Amherstburg'}
];
const subgroup = [
  { value: 'school', label: 'School' },
  { value: 'faith', label: 'Faith'},
  { value: 'culture', label: 'Culture' }
];
export const ValueImpactPage = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState(){
    return { value: 'light', value2: 'london', value3: 'faith' };
  },
  
  handleChange(value, value2, value3){
    this.setState({value: value, value2: value2, value3:value3});
  },
  render() {
    return (
      <div className={style.valueImpact}>
        <Row>
          <Col xs= {3} >
          <div className={style.valueImpactHeader}>Population Subgroup</div>
           <Dropdown
            
            onChange={this.handleChange}
            source={careNeeds}
            value={this.state.value}
          />
          <Dropdown
            
            onChange={this.handleChange}
            source={city}
            value={this.state.value2}
          />
          <Dropdown
            
            onChange={this.handleChange}
            source={subgroup}
            value={this.state.value3}
          />
          </Col>
          <Col xs= {6}>
          <div className={style.valueImpactHeader}>Your Community Pattern</div>
          </Col>
          <Col xs= {3}>
          <div className={style.valueImpactHeader}>Things To Consider</div>
          </Col>
        </Row> 
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}

export const ValueImpactPageContainer = connect(
  mapStateToProps,
  actionCreators
)(ValueImpactPage);
