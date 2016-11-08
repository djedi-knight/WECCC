import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Dropdown, FontIcon } from 'react-toolbox';
import { Map, TileLayer, GeoJson } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import config from './config.json';
import style from './style';
import data from './data.json';

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
    const mapData = this.getGeoJSONDataFor(this.state.config.keys.maps[0]);

    if (Object.keys(mapData).length) {
      let max = mapData.features[0].properties[key];

      for (let i = 0; i < mapData.features.length; i++) {
        max = Math.max(mapData.features[i].properties[key], max);
      }

      return max;
    }

    return 0;
  },
  getMin(key) {
    const mapData = this.getGeoJSONDataFor(this.state.config.keys.maps[0]);

    if (Object.keys(mapData).length) {
      let min = mapData.features[0].properties[key];

      for (let i = 0; i < mapData.features.length; i++) {
        min = Math.min(mapData.features[i].properties[key], min);
      }

      return min;
    }

    return 0;
  },
  getRange(key) {
    const min = this.getMin(key);
    const max = this.getMax(key);
    const totalRange = max - min;
    const rangeSet = [min];

    for (let i = 1; i <= 7; i++) {
      rangeSet[i] = rangeSet[i - 1] + totalRange / 8;
    }

    return rangeSet;
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
            {this.state.data.legend.map((legend, i) =>
              <div key={i}>
                <FontIcon style={{ color: legend.color }} value="lens" />
                <br />
              </div>
            )}
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
