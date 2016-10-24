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
import Choropleth from 'react-leaflet-choropleth';


export const GISView = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      zoom: 12,
      value: "religion",
      data
    };
  },
  handleChange(value) {
    this.setState({ value: value });
  },
  getColor(d) {
    return d > 128 ? '#800026' :
           d > 64  ? '#BD0026' :
           d > 32  ? '#E31A1C' :
           d > 16  ? '#FC4E2A' :
           d > 8   ? '#FD8D3C' :
           d > 4   ? '#FEB24C' :
           d > 2   ? '#FED976' :
                      '#FFEDA0';
  },
  Rstyle(feature) {
    return {
      fillColor: this.getColor(feature.properties.United_pct),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  },
   Estyle(feature) {
    return {
      fillColor: this.getColor(feature.properties.Western_Asian_pct),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }, 
  Pstyle(feature) {
    return {
      fillColor: this.getColor(feature.properties.low_income_seniors_pct),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  },
  render() {
    return (
      <div className={style.gisPage}>
        <div className={style.header}>
          Leamington Pilot
        </div>
        <br />
        <Row>
          <Col xs={2}>
           <Dropdown
              auto
              onChange={this.handleChange}
              source={this.state.data.dropdown}
              value={this.state.value}
            />
          </Col>
          <Col xs={8}>
          {this.state.value==='religion' ? 
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom} maxBounds={this.state.data.bounds}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />  
                <GeoJson data={PilotData} style={this.Rstyle}/>                
              </Map>
            </div> : null 
          }
          {this.state.value==='ethnicity' ? 
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom} maxBounds={this.state.data.bounds}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />  
                <GeoJson data={PilotData} style={this.Estyle}/>                
              </Map>
            </div> : null 
          }
          {this.state.value==='population' ? 
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom} maxBounds={this.state.data.bounds}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />  
                <GeoJson data={PilotData} style={this.Pstyle}/>                
              </Map>
            </div> : null 
          }
            
          </Col>
          <Col xs={2}>
            <div>Legend</div>
            {this.state.data.legend.map((legend, i) =>
              <div key={i}>
                <FontIcon style={{ color: legend.color }} value="lens" />
                {legend.title}
                <br />
                <br />
              </div>
            )}
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
