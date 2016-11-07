import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Dropdown } from 'react-toolbox';
import { Map, TileLayer, GeoJson } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import config from './config.json';
import style from './style';
import data from './data.json';
import PilotData from './PilotData.json';

export const GISView = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    maps: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      config,
      zoom: 12,
      data,
      PilotData,
      currentSelection: data.options[0].value
    };
  },
  getGeoJSONDataFor(key) {
    if (this.props.maps) {
      const index = this.props.maps.findIndex(map => map.key === key);

      return this.props.maps[index];
    }

    return {};
  },
  getColor(d) {
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
  getLegend() {},
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
  getMin(key) {
    var min = this.state.PilotData.features[0].properties[key];
    for (var i=0; this.state.PilotData.features.length > i; i++){
      console.log('current percentage: ' + this.state.PilotData.features[i].properties[key]);
      min = Math.min(parseInt(this.state.PilotData.features[i].properties[key]), min)
    }
    console.log('min: ' + min);
    //console.log( 'range:' + Math.range(2, 6));
  },
  getRange(start, stop) {
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
  handleSelectionChange(newSelection) {
    this.setState({ currentSelection: newSelection });
  },
  render() {
    return (
      <div className={style.gisPage}>
        <div className={style.header}>
          {this.props.title}
        </div>
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
                <GeoJson data={this.getGeoJSONDataFor(this.state.config.keys.maps[0])} style={this.getStyle} />
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

export const GISViewContainer = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.config.demoAPI;
    }

    return this.state.config.prodAPI;
  },
  render() {
    return (
      <div>
        <Fetch url={this.getURL()}>
          <GISView />
        </Fetch>
      </div>
    );
  }
});
