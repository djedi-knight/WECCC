import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import PopulationReachSubgroup from '../PopulationReachSubgroup/PopulationReachSubgroup'


export default React.createClass({
  mixins: [PureRenderMixin],
    getInitialState() {
    return { index: 0 };
  }, 

handleTabChange (index){
    this.setState({index});
  },


  render() {
    return (
      <div>
         <h2 style={{ background: '#E7F6ED', padding: '10px', margin: '80px 0 0 0' }}> 
        Community Outcomes
      </h2>
      
      <div className="PopulationTab">
          <Tabs index={this.state.index} onChange={this.handleTabChange}>

          <Tab label="28,000 Population"> <PopulationReachSubgroup />  </Tab>
          <Tab label="6,000 Eligible"> </Tab>
          <Tab label="1,500 Target">  </Tab>
          <Tab label="0 Registered"> <PopulationReachSubgroup /> </Tab>
   
        </Tabs>
      </div>
    </div>
    );
  }
});

