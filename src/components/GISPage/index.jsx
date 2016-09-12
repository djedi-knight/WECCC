import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Map, Marker, Popup, TileLayer, Polygon } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';

 const polygon = [{lng: 42.0468, lat: -82.60544}, {lng: 42.0465, lat: -82.60542}, {lng: 42.0568, lat: -82.60524}];
 
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
      lng: 42.0468,
      lat: -82.60544,
      zoom: 13,
      value: null
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
        <Col xs={3}>
        <RadioGroup name="gis" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="WECCC Partners" value="wecccpartners" />
          <RadioButton label="Social Networks" value="socialNetworks" />
          <RadioButton label="Equity" value="equity" />
        </RadioGroup>
        </Col>
        <Col xs={9}>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}/>
          <Marker position={position}>          
            <Popup>
              <span>A pretty CSS3 popup. </span>
            </Popup>
          </Marker>
          <Polygon positions={polygon}/>
        </Map>
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
