import React from 'react';
import Control from 'react-leaflet-control';
import { Map, TileLayer, ZoomControl, Circle } from 'react-leaflet';


export default React.createClass({ 
  getInitialState() {
      return {center: [51.3, 0.7]
    } 
  },  
  handleTabChange(center) {
    this.setState({ center: [51.51, -0.06] });

    console.log("Button clicked");
  },
  render(){
    return(
      <Map
      center={this.state.center}
      zoom={10}
    >
    <ZoomControl position="topright" />
      
      <TileLayer
        url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        maxZoom={18}
      />

      <Control position="topleft" >
        <button 
          onClick={ this.handleTabChange}
        >
          Reset View
        </button>
      </Control>
    </Map>
    )
    
  }
});