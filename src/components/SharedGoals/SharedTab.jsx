import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Tab, Tabs} from 'react-toolbox';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState () {
    return {index: 0
      
    };
  },
  
  render() {
    return (
      <div>
      <Tabs index={this.state.index}>
        <Tab label='Shared Goals'>
          <small>By putting data into your hands, you can affect the ecosystem of care and help achieve the shared goals of the system</small>
          <p>We have another image Component</p>
          <br/>          
          <small> <a href ="#">Read more about the shared goals</a></small> 
        </Tab>
      </Tabs>
      </div>
    );
  }
});