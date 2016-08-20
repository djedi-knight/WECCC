import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip';
import { Dropdown, IconButton } from 'react-toolbox';
import MyGroupsPopover from '../MyGroupsPopover/MyGroupsPopover';
import style from './style';

const data = [
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
      // DropdownList Selector
      <div className={style.myGroupsHeader}>
        <Dropdown
          theme={style}
          label={'Sort by timeframe:'}
          auto
          onChange={this.handleChange}
          source={data}
          value={this.value}
          template={this.customItem}
        />
        <div className={style.title}>
          <h2>
            My Groups
            <span>
              <a data-tip data-for="info"><IconButton primary icon="info" /></a>
              <ReactTooltip id="info" place="right" type="light" effect="float" offset={{ bottom: 100 }}>
                <span><MyGroupsPopover /></span>
              </ReactTooltip>
            </span>
          </h2>
        </div>
      </div>
    );
  }
});
