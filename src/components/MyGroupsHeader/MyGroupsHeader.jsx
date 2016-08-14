import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dropdown from 'react-toolbox/lib/dropdown';
import {Button,IconButton,FontIcon} from 'react-toolbox/lib/button';
import theme from '../../theme/default';
import Tooltip from 'react-toolbox/lib/tooltip';


let TooltipButton = Tooltip(IconButton);


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
      // DropdownList Selector
      <div className="MyGroupsHeader" style={{  background:'#E7F6ED', height:'90px',margin:'80px 0 0 0'}}>

          <div className={theme.SortingSelector} > 
             <Dropdown className={theme.dropdown}
              label={'Sort by timeframe:'}
              auto
              onChange={this.handleChange}
              source={countries}
              value={this.value}
              template={this.customItem}
            />
          </div>


          <div className="MyGroupsLogo">

            <h2 style={{ width:'80%', padding:'2%', displya:'inline'}}> MY Groups 
              <span style={{margin: '0'}}> 
                      <TooltipButton icon='info'  tooltip='{{ <MyGroupsPopoversection />}}'  tooltipPosition='right' />
              </span>
            </h2>

          </div>              

      </div>
    );
  }
});


