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
import choropleth from './choropleth.jsx';



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
      zoom: 12,
      value: "religion",
      data
    };
  },
  handleChange(value) {
    this.setState({ value: value });
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
            <div className={style.mapView}>
              <Map center={this.state.data.map} zoom={this.state.zoom} maxBounds={this.state.data.bounds}>
                <TileLayer url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'} />  
                <GeoJson data={PilotData} />   
                <choropleth/>
              </Map>
            </div>
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
