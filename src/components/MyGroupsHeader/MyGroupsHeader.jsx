import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dropdown from 'react-toolbox/lib/dropdown';
import Navigation from 'react-toolbox/lib/navigation';
import {Button,IconButton,FontIcon} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import MyGroupsPopoversection from '../MyGroupsPopoversection/MyGroupsPopoversection.jsx';


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

  toggleActiveState() {
    this.setState({ active: !this.state.active });
  },

  render() {
    return (

      <div className="MyGroupsHeader" style={{  background:'#E7F6ED', margin:'100px 0 0 0'}}>
          <div className="MyGroupsLogo">

            <h2 style={{ width:'80%', padding:'0 2%', displya:'inline'}}> MY Groups 
              <span style={{margin: '0'}}> 
                  <IconButton icon='info' onMouseOver={this.toggleActiveState} />
              </span>
            </h2>

            <Dialog active={this.state.active} 
                    onEscKeyDown={this.toggleActiveState} 
                    onOverlayClick={this.toggleActiveState}
                  
            >
              <MyGroupsPopoversection />

            </Dialog>

          </div>    

          <div className="SortingSelector"  style={{ float: 'right', width: '20%'}}> 
             <Dropdown
              label={'Sort by timeframe:'}
              auto
              onChange={this.handleChange}
              source={countries}
              value={this.value}
              template={this.customItem}
            />
          </div>

      </div>
    );
  }
});



