import React from 'react';

var DatePicker = require("react-bootstrap-date-picker");

var App = React.createClass({
  getInitialState: function(){
    var value = new Date().getISOString();
    return {
      value: value
    }
  },
  handleChange: function(value) {
    // value is an ISO String.
    this.setState({
      value: value
    });
  },
  render: function(){
    return <FormGroup>
      <ControlLabel>Label</ControlLabel>
      <DatePicker value={this.state.value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
    </FormGroup>;
  }
});

export default DatePicker
