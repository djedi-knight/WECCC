import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import style from '../../theme/style';
import { Button } from 'react-toolbox/lib/button';

let className = style.sharedgoals;
export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState () {
    return {progress: 30};
  },  
  render () {
    return (
      <div>
        <ProgressBar mode='determinate' value={this.state.progress} />        
        <b style = {{fontSize: 20}}>Shared Goals</b>
        <br/>
        <div className={{className}}>OPTIMIZE RESOURCES</div>

        
         <Button label="OPTIMIZE RESOURCES" primary />
          <Button label=" IMPROVE EXPERIENCES" primary />
           <Button label="IMPROVE HEALTH OUTCOMES" primary />
        <br/>
        <div><small> <a href ="#">Read more about the shared goals</a></small>   </div>   
      </div>
    );
  }

});