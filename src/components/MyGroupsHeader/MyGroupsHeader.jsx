import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dropdown from 'react-toolbox/lib/dropdown';
import Navigation from 'react-toolbox/lib/navigation';
import {Button,IconButton,FontIcon} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import theme from '../../theme/default';
<<<<<<< HEAD
import Tooltip from 'react-toolbox/lib/tooltip';
import MyGroupsPopoversection from '../MyGroupsPopoversection/MyGroupsPopoversection.jsx';

let TooltipButton = Tooltip(IconButton);
=======
import MyGroupsPopoversection from '../MyGroupsPopoversection/MyGroupsPopoversection.jsx';

>>>>>>> f753b0a2335b687da00cba0bb89a576ff1d2b2b0

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

<<<<<<< HEAD
  
  render() {
    return (

      // DropdownList Selector
=======
  toggleActiveState() {
    this.setState({ active: !this.state.active });
  },

  render() {
    return (

>>>>>>> f753b0a2335b687da00cba0bb89a576ff1d2b2b0
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

<<<<<<< HEAD

=======
>>>>>>> f753b0a2335b687da00cba0bb89a576ff1d2b2b0
          <div className="MyGroupsLogo">

            <h2 style={{ width:'80%', padding:'2%', displya:'inline'}}> MY Groups 
              <span style={{margin: '0'}}> 
<<<<<<< HEAD
                      <TooltipButton icon='info'  tooltip='{{ <MyGroupsPopoversection />}}'  tooltipPosition='right' />
              </span>
            </h2>

  
=======
                  <IconButton icon='info' onMouseOver={this.toggleActiveState} />
              </span>
            </h2>

            <Dialog active={this.state.active} 
                    onEscKeyDown={this.toggleActiveState} 
                    onOverlayClick={this.toggleActiveState}     
            >
              <MyGroupsPopoversection />

            </Dialog>
>>>>>>> f753b0a2335b687da00cba0bb89a576ff1d2b2b0

          </div>              

      </div>
    );
  }
});



