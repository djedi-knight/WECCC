import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Dropdown, FontIcon } from 'react-toolbox';
import theme from '../../theme/default';

const countries = [
  { value: 'EN-gb', label: 'Patient Experience Score Box' },
  { value: 'ES-es', label: 'Quality of Life Score Box' },
  { value: 'TH-th', label: 'Hours of Care Score Box' },
  { value: 'EN-en', label: 'Self-Reliance Score Box' },
];

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { active: false };
  },
  render() {
    return (
      <div className="MyGroupsHeader" style={{ background: '#E7F6ED', height: '90px', margin: '80px 0 0 0' }}>
        <div className="MyGroupsLogo">
          <h2 style={{ width: '80%', padding: '2%', displya: 'inline' }}> My Groups
            <span style={{ margin: '0' }}>
              <FontIcon value="info" />
            </span>
          </h2>
        </div>
        <div className={theme.SortingSelector}>
          <Dropdown
            className="dropdown"
            label={'Sort by timeframe:'}
            onChange={this.handleChange}
            source={countries}
            value={this.value}
            template={this.customItem}
            auto
          />
        </div>
      </div>
    );
  }
});
