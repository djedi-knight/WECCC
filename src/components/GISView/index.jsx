import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup, FontIcon, Dropdown } from 'react-toolbox';
import { Map, TileLayer, GeoJson } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import data from './data.json';
import PilotData from './PilotData.json';

export const GISView = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      zoom: 12,
      data,
      PilotData,
      currentSelection: data.options[0].value
    };
  },
  handleSelectionChange(newSelection) {
    this.setState({ currentSelection: newSelection });
  },
  getColor(d){
    return (
      d > 128 ? '#800026':
      d > 64  ? '#BD0026' :
      d > 32  ? '#E31A1C' :
      d > 16  ? '#FC4E2A' :
      d > 8   ? '#FD8D3C' :
      d > 4   ? '#FEB24C' :
      d > 2   ? '#FED976' :
      '#FFEDA0'
    );
  },

  getMax(key) { 
    console.log('state: ' + this.state.PilotData);
    var max = this.state.PilotData.features[0].properties[key];
    for (var i=0 ; i < this.state.PilotData.features.length ; i++){
      console.log('current percentage: ' + this.state.PilotData.features[i].properties[key]);
      max = Math.max(parseInt(this.state.PilotData.features[i].properties[key]), max)
    }
    console.log('max: ' + max);
    return max;     
  },

  getMin(key){
    var min = this.state.PilotData.features[0].properties[key];
    for (var i=0; this.state.PilotData.features.length > i; i++){
      console.log('current percentage: ' + this.state.PilotData.features[i].properties[key]);
      min = Math.min(parseInt(this.state.PilotData.features[i].properties[key]), min)
    } 
    console.log('min: ' + min);
    //console.log( 'range:' + Math.range(2, 6));  
     
  },

  getrange(start, stop)
  {
    var array = [];
    start = getMax();
    stop = getMin();

    var length = stop - start; 

    for (var i = 0; i <= length; i++) { 
        array[i] = start;
        start++;
    };
    console.log('range: ' +array);

    return array;
  },


  getStyle(feature) {
    return {
      fillColor: this.getColor(feature.properties[this.state.currentSelection]),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  },
  getLegend(){
  },
  render() {
    return (
      <div className={style.gisPage}>
        <div className={style.header}>
          Leamington Pilot
        </div>
        {this.getMin('Pop_2011')}
       
        <br />
        <Row>
          <Col xs={2}> 
            <Dropdown
              onChange={this.handleSelectionChange}
              source={this.state.data.options}
              value={this.state.currentSelection}
            />
          </Col>
          <Col xs={8}>
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom} maxBounds={this.state.data.bounds}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />  
                <GeoJson data={PilotData} style={this.getStyle}/>           
              </Map>
            </div>     
          </Col>
          <Col xs={2}>
            <div>Legend</div>
            {/*{this.state.data.legend.map((legend, i) =>
              <div key={i}>
                <FontIcon style={{ color: legend.color }} value="lens" /> 

                <br />
              </div>
            )}*/}
          </Col>          
        </Row>        
      </div>
    );
  }
});
function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}
export const GISViewContainer = connect(
  mapStateToProps,
  actionCreators
)(GISView);


 // <button onClick={this.getMax}>JIll</button>