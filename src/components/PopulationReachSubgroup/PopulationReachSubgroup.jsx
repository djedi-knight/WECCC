import React from 'react';
import { Card, FontIcon, Link, CardTitle,CardText } from 'react-toolbox';
import theme from '../../theme/default';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ScoreBox from '../ScoreBox/ScoreBox'



export default React.createClass({
  render() {
    return (
    	<div>
        <Card className={theme.priority} >
            
                <p > Priority Subgroup </p>
                    <div className={theme.subbox}>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>               
                    </div>  
        </Card>

        <Card className={theme.dependency} >
            
                <p > Dependency Level </p>
                    <div className={theme.subbox}>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>
                    </div>  
        </Card>

        <Card className={theme.registed} >
            
                <p > Registed to </p>
                    <div className={theme.subbox}>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>
                        <span > <ScoreBox /></span>
                        
                    </div>  
        </Card>
        </div>
    );
  }
});

