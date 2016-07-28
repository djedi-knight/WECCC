import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { CardMedia } from 'react-toolbox/lib/card';
import style from './style';

let className = style.headerimage;

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={className}>
        <h1 style={{ paddingTop: 10, paddingRright: 10, paddingLeft: 10 }}>
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
      </div>
		);
  }
});
