import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, FontIcon } from 'react-toolbox';

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
      <div style={{ width: '100%' }}>
        <h3 style={{ background: '#110b31', color: '#FFF', margin: '0px', padding: '12px' }}>
          Safety Events: Adverse Drug Effects
        </h3>
        <br />
        <div style={{ border: '1px solid gray', width: '70%', float: 'left' }}>
          <div style={{ border: '1px solid gray', borderStyle: 'hidden hidden solid hidden' }}>
            <h3 style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
              Change Over Time
              <FontIcon style={{ float: 'right' }} value="trending_up" />
            </h3>
          </div>
          <img alt="graph" style={{ width: '200px', height: '150px', padding: '12px' }} src="https://s31.postimg.org/hla3xitq3/imageedit.jpg" />
          <div style={{ border: '1px solid gray', borderStyle: 'solid hidden solid hidden' }}>
            <h3 style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
              Peer Comparison
              <FontIcon style={{ float: 'right' }} value="person" />
            </h3>
          </div>
          <Checkbox checked={this.state.check1} label="- - High Risk" onChange={this.handleChange.bind(this, 'check1')} />
          <Checkbox checked={this.state.check2} label="- - Medium Risk" onChange={this.handleChange.bind(this, 'check2')} />
          <Checkbox checked={this.state.check3} label="- - Low Risk" onChange={this.handleChange.bind(this, 'check3')} />
          <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
            <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
              {dummyText}
            </p>
          </div>
        </div>
        <div style={{ border: '1px solid gray', width: '27%', float: 'right', height: '508px', background: '#FADEDE' }}>
          <div style={{ background: '#F00', margin: '0px' }}>
            <FontIcon style={{ color: '#FFF', padding: '5px' }} value="warning" />
          </div>
          <p style={{ padding: '2px' }}> There is an indication that your High Risk score is lower than the peer score.</p>
        </div>
      </div>
    );
  }
});
