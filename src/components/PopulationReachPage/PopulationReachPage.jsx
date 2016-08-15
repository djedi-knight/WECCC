import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';


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
      <div className="PopulationTab">
          <Tabs index={this.state.index} onChange={this.handleTabChange}>

          <Tab label="28,000 Population"><small>Eligible</small></Tab>
          <Tab label="6,000 Eligible"><small>Eligible</small></Tab>
          <Tab label="1,500 Target" ><small>Target</small></Tab>
          <Tab label="0 Registered"><small>Registered</small></Tab>
   
        </Tabs>
      </div>
    );
  }
});






  