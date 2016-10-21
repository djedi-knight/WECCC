import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Choropleth from 'react-leaflet-choropleth';
import { Map } from 'react-leaflet';
import PilotData from './PilotData.json';
 
const style = {
    fillColor: '#F28F3B',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5
};
export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      zoom: 12,      
      data
    };
  },
  render() { 
    return (
      <Map>
        <Choropleth
          data={PilotData}
          valueProperty={(feature) => feature.properties.value}
          visible={(feature) => feature.id !== active.id}
          scale={['#b3cde0', '#011f4b']}
          steps={7}
          mode='e'
          style={style}
          onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.label)}
          ref={(el) => this.choropleth = el.leafletElement}
        />
      </Map>      
    );
  }
});