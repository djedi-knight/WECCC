import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Chip, Avatar } from 'react-toolbox';
import Slider from 'react-toolbox/lib/slider';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory/dist/victory';

const data = [
  { x: 0, y: 4 }
];

export default React.createClass({
  mixins: [PureRenderMixin],  
  render() {
    return (
      <div>
      <VictoryChart height={100} >
       <VictoryAxis
       tickValues={[0, 1, 2, 3, 4, 5]}
         style={{
        ticks: {stroke: "red", size: 10},
        tickLabels: {fontSize: 22},  

        }}/>        
        <VictoryBar horizontal data={data} />
      </VictoryChart>     
      </div>
    );
  }
});
