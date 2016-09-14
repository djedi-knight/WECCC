import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup, FontIcon } from 'react-toolbox';
import { Map, Marker, Popup, TileLayer, Polygon } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import data from './data.json';

export const GISSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: null };
  },
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <div>
        <RadioGroup name="layer" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="School" value="school" />
          <RadioButton label="Faith" value="faith" />
          <RadioButton label="Culture" value="culture" />
        </RadioGroup>
      </div>
    );
  }
});

export const GISView = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {      
      zoom: 13,
      value: null,
      data
    };
  },
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <div className={style.gisPage}>
        <div className={style.gisPageHeader}>
          Leamington Pilot
        </div>
        <br />
        <Row>
          <Col xs={2}>
            <RadioGroup name="gis" value={this.state.value} onChange={this.handleChange}>
              <RadioButton label="WECCC Partners" value="wecccpartners" />
              <RadioButton label="Social Networks" value="socialNetworks" />
              <RadioButton label="Equity" value="equity" />
            </RadioGroup>
            <br />
            <div>
              {this.state.value === 'wecccpartners' ? <GISSubgroups /> : null}
              {this.state.value === 'socialNetworks' ? <GISSubgroups /> : null}
              {this.state.value === 'equity' ? <GISSubgroups /> : null}
            </div>
          </Col>
          <Col xs={8}>
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />
                 {/* <Marker position={position}>
                    <Popup>
                      <span>A pretty CSS3 popup. </span>
                    </Popup>
                  </Marker>*/}
                <Polygon positions={this.state.data.west} color={"red"}>
                  <Popup>
                    <span>West Region. </span>
                  </Popup>
                </Polygon>
                <Polygon positions={this.state.data.east} color={"green"}>
                  <Popup>
                    <span>East Region. </span>
                  </Popup>
                </Polygon>
                <Polygon positions={this.state.data.north} >
                  <Popup>
                    <span>North Region. </span>
                  </Popup>
                </Polygon>
              </Map>
            </div>
          </Col>
          <Col xs={2}>
            <div>Legend</div>
            {this.state.data.legend.map((legend, i) =>
            <div key={i}>
              <FontIcon style={{ color: legend.color }} value="lens"/>
              {legend.title} <br/> <br/>            
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
