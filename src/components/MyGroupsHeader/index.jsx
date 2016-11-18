import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip';
import { Dropdown, IconButton } from 'react-toolbox';
import MyGroupsPopover from '../MyGroupsPopover';
import config from './config.json';
import style from './style';

// const data = [
//   { value: 'EN-gb', label: 'Patient Experience Score Box' },
//   { value: 'ES-es', label: 'Quality of Life Score Box' },
//   { value: 'TH-th', label: 'Hours of Care Score Box' },
//   { value: 'EN-en', label: 'Self-Reliance Score Box' },
// ];

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { 
      active: false,
      currentSelection: null,
      config
    };
  },
  handleSelectionChange(newSelection) {
    this.setState({ currentSelection: newSelection });
  },
  render() {
    return (
      <div className={style.myGroupsHeader}>
        <Dropdown
          theme={style}
          label={this.state.config.dropdownLabel}
          auto
          onChange={this.handleSelectionChange}
          source={this.state.config.keys.selections}
          value={this.state.currentSelection}
          template={this.customItem}
        />
        <div className={style.title}>
          <h2>
            {this.state.config.headerTitle}
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
