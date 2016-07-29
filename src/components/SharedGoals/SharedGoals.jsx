import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import style from '../../theme/style';
import chip from './chip.jsx';


let className = style.sharedgoals;
export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState () {
    return {progress: 30};
  },  
  render () {
    return (
      <div style= {{padding:10}} >
        <ProgressBar mode='determinate' value={this.state.progress} /> 
        <chip />       
        <b style = {{fontSize: 20}}>Shared Goals</b>
        <br/>

        <section>
                
          <div className={className}>          
            OPTIMIZE RESOURCES  
          </div>
          <div className={className}>
            IMPROVE EXPERIENCES
          </div>
          <div className={className}>
            IMPROVE HEALTH  OUTCOMES       
          </div>
        </section>
        <br style ={{clear: 'both'}}/>

        <p ><small> <a href ="#">Read more about the shared goals</a></small>   </p> 
        <br/>  
      </div>
    );
  }

});