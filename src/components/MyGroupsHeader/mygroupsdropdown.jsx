import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dropdown from 'react-toolbox/lib/dropdown';
import Navigation from 'react-toolbox/lib/navigation';

const countries = [
  { value: 'EN-gb', label: 'Patient Experience Score Box' },
  { value: 'ES-es', label: 'Quality of Life Score Box'},
  { value: 'TH-th', label: 'Hours of Care Score Box' },
  { value: 'EN-en', label: 'Self-Reliance Score Box'}
];
const values = [
  { value: 'EN-gb', label: 'My Groups ' },
  { value: 'ES-es', label: 'Sort by timeframe: '},
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsDropDown">
      <Navigation type='horizontal' actions={values} />
      <Navigation type='horizontal'>
      </Navigation>
      <Dropdown
        label = {'Sort by timeframe:'}
        auto
        onChange={this.handleChange}
        source={countries}
        value={this.value}
      />
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
