import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { CardMedia } from 'react-toolbox/lib/card';
import style from '../../theme/style';

let className = style.headerimage;

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={className}>
        <h1>
          Improving Value by Exploring Data
        </h1>
        <CardMedia aspectRatio="wide" image="https://placeimg.com/800/450/nature" />
        <i><p>
          This tool has been developed by the ENCOMPASS Community project.
        </p></i>        
        <i><p>
          It is an opportunity to allow home, community, long-term home
          providers and mangers as well as community
          professionals to explore and to understand the outcomes of their
          efforts on the population they serve.
        </p></i>
        <h3>What you do has an impact on the ecosystem of care</h3>
        <img src ="https://s31.postimg.org/hla3xitq3/imageedit.jpg" style ={{width:'600px', height:'150px'}} />
       <br/>
      </div>
		);
  }
});