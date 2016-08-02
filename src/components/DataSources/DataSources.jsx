import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState () {
    return {progress: 30};
  },  
  render () {
    return (
      <div>
      <section>
        <ProgressBar mode='determinate' value={this.state.progress} />        
        <b style = {{fontSize: 20}}>Data Sources</b>
         <p>The information in this reporting tool is composed of data sets that will help you to 
         view your outcomes over time and compared to your peers.</p>
              <small> <a href ="#">Read more about the data sources</a></small> 
      </section>
      </div>
    );
  }

});