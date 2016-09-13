import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Map, Marker, Popup, TileLayer, Polygon, Circle } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import data from './data.json';

export const GISSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  
  render() {
    return (
      <div>        
        <RadioGroup name="layer">
          <RadioButton label="School" value="school" />
          <RadioButton label="Faith" value="faith" />
          <RadioButton label="Culture" value="culture" />
        </RadioGroup>               
      </div>
    );
  }
});

export const GISPage = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      lng: 42.3149,
      lat: -83.0364,
      zoom: 13,
      value: null,
      data
    };
  },
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    const position = [this.state.lng, this.state.lat];

    return (
      <div className={style.gisPage}>
        <div className={style.gisPageHeader}>
          Leamington Pilot
        </div >
        <br/>
        <Row>
        <Col xs={2}>
        <RadioGroup name="gis" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="WECCC Partners" value="wecccpartners" />
          <RadioButton label="Social Networks" value="socialNetworks" />
          <RadioButton label="Equity" value="equity" />
        </RadioGroup>
        </Col>
        <Col xs={8}>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}/>
         {/* <Marker position={position}>          
            <Popup>
              <span>A pretty CSS3 popup. </span>
            </Popup>
          </Marker>*/}
          
          <Polygon positions={this.state.data.polygon} color ={"red"}>
            <Popup>
              <span>East Region. </span>
            </Popup>
            </Polygon>
          <Polygon positions={this.state.data.polygonn} color ={"green"}>
          <Popup>
              <span>West Region. </span>
            </Popup>
            </Polygon>
          <Polygon positions={this.state.data.pollygon} >
          <Popup>
              <span>North Region. </span>
            </Popup>
            </Polygon>
        </Map>
        </Col>
        <Col xs={2}>
        <div style={{border: "1px solid", backgroundColor:"red", width: "20px", height: "20px"}}></div>East Region
        <div style={{ border: "1px solid", backgroundColor:"blue", width: "20px", height: "20px"}}></div>North Region
        <div style={{border: "1px solid", backgroundColor:"green", width: "20px", height: "20px"}}></div>West Region
        </Col>
        </Row>
        <Row>
        {this.state.value === 'wecccpartners' ? <GISSubgroups /> : null}
        {this.state.value === 'socialNetworks' ? <GISSubgroups /> : null}
        {this.state.value === 'equity' ? <GISSubgroups /> : null}
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

export const GISPageContainer = connect(
  mapStateToProps,
  actionCreators
)(GISPage);
