import React from 'react';
import { Card, FontIcon, Link, CardTitle,CardText } from 'react-toolbox';
import theme from '../../theme/default';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ScoreBox from '../ScoreBox/ScoreBox'


export const SubBox = React.createClass({
  
  render() {
    return (
      <div className={theme.ScoreBox}>
        <Card style={{ width: '23%', height: '300px', border: '2px solid gray',margin:'5px', float: 'right' }}>
          <p> Patient Experience <FontIcon value="info" /> </p>
          <h1> <FontIcon value="info" /> 3/15</h1>
          <h1> (label/define?) </h1>
          <h1> <FontIcon value="person" /> Peer Comparison </h1>
          <h1> 5/10 </h1>
          <h1> <FontIcon value="open_in_browser" />Change Over Time</h1>
          <h1> UP</h1>
          <Link href="#/" label="Show Detail" />
        </Card>
      </div>
    );
  }
});



export default React.createClass({
  render() {
    return (
    	<div>
        <Card className={theme.subgroup} >
            
                <p > Priority Subgroup </p>
                    <div className={theme.subbox}>
                        <SubBox />
                        <SubBox />                    
                    </div>  
        </Card>

        <Card className={theme.subgroup} >
            
                <p > Dependency Level </p>
                    <div className={theme.subbox}>
                        <SubBox />
                        <SubBox />
                        <SubBox />
                        <SubBox /> 
                    </div>  
        </Card>

        <Card className={theme.subgroup} >
            
                <p > Registed to </p>
                    <div className={theme.subbox}>
                        <SubBox />
                        <SubBox /> 
                        <SubBox />
                        
                    </div>  
        </Card>
        </div>
    );
  }
});


