import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip';
import { Dropdown, IconButton } from 'react-toolbox';
import MyGroupsPopover from '../MyGroupsPopover/MyGroupsPopover';
import theme from '../../theme/default';

const data = [
  { value: 'EN-gb', label: 'Patient Experience Score Box' },
  { value: 'ES-es', label: 'Quality of Life Score Box' },
  { value: 'TH-th', label: 'Hours of Care Score Box' },
  { value: 'EN-en', label: 'Self-Reliance Score Box' },
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      // DropdownList Selector
      <div className="MyGroupsHeader" style={{ background: '#E7F6ED', height: '90px', margin: '80px 0 0 0' }}>
        <div className={theme.SortingSelector} >
          <Dropdown
            label={'Sort by timeframe:'}
            auto
            onChange={this.handleChange}
            source={data}
            value={this.value}
            template={this.customItem}
          />
        </div>
        <div className={theme.MyGroupsLogo}>
          <h2>
            My Groups
            <span>
              <a data-tip data-for="info"><IconButton primary icon="info" /></a>
              <ReactTooltip className={theme.tooltip} id="info" place="right" type="light" effect="float" offset={{ bottom: 100 }}>
                <span><MyGroupsPopover /></span>
              </ReactTooltip>
            </span>
          </h2>
        </div>
      </div>
    );
  }
});
