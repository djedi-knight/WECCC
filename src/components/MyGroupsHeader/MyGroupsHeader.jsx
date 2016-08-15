import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
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
          <h2 style={{ width: '80%', padding: '2%' }}>
            My Groups
            <span style={{ margin: '0' }}>
              <IconButton className={theme.tooltip} primary icon="info">
                <span className={theme.tooltipBody} >
                  <MyGroupsPopover />
                </span>
              </IconButton>
            </span>
          </h2>
        </div>
      </div>
    );
  }
});
