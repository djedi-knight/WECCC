import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Dropdown, FontIcon } from 'react-toolbox';
import { Map, TileLayer, GeoJson } from 'react-leaflet';
import { Row, Col } from 'react-flexbox-grid';
import appConfig from '../../../config.json';
import config from './config.json';
import style from './style';

export const GISView = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    maps: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentSelection: config.keys.selections[0].value,
      config
    };
  },
  getGeoJSONDataFor(key) {
    if (this.props.maps) {
      const index = this.props.maps.findIndex(map => map.key === key);

      return this.props.maps[index];
    }

    return {};
  },
  getColor(value) {
    const rangeSet = this.getRangeSet(this.state.currentSelection);

    for (let i = 0; i < rangeSet.length - 1; i++) {
      if (value >= rangeSet[i] && value <= rangeSet[i + 1]) {
        return this.state.config.colourScale[i];
      }
    }

    return this.state.config.colourScale[rangeSet.length];
  },
  getLegend() {
    const rangeSet = this.getRangeSet(this.state.currentSelection);

    return (
      <Col xs={2}>
        <div>{this.state.config.legendTitle}</div>
        {this.state.config.colourScale.map((colour, i) =>
          <div key={i}>
            <FontIcon style={{ color: colour }} value="lens" />
            {this.getLegendLabel(rangeSet, i)}
            <br />
          </div>
        )}
      </Col>
    );
  },
  getLegendLabel(range, index) {
    return Number(range[index]).toFixed(2);
  },
  getMap() {
    return (
      <Col xs={8}>
        <div className={style.mapView}>
          <Map
            center={this.state.config.map.center}
            zoom={this.state.config.map.zoom}
            maxBounds={this.state.config.map.bounds}
          >
            <TileLayer url={this.state.config.map.tileLayer} />
            <GeoJson
              data={this.getGeoJSONDataFor(this.state.config.keys.maps[0])}
              style={this.getStyle}
            />
          </Map>
        </div>
      </Col>
    );
  },
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
  getRangeSet(key) {
    const min = this.getMin(key);
    const max = this.getMax(key);
    const totalRange = max - min;
    const rangeSet = [min];
    const rangeSetLength = this.state.config.colourScale.length;

    for (let i = 1; i <= rangeSetLength - 1; i++) {
      rangeSet[i] = rangeSet[i - 1] + totalRange / rangeSetLength;
    }

    return rangeSet;
  },
  getSelectionSidebar() {
    return (
      <Col xs={2}>
        <Dropdown
          onChange={this.handleSelectionChange}
          source={this.state.config.keys.selections}
          value={this.state.currentSelection}
        />
      </Col>
    );
  },
  getStyle(feature) {
    return {
      fillColor: this.getColor(feature.properties[this.state.currentSelection]),
      weight: this.state.config.mapStyle.weight,
      opacity: this.state.config.mapStyle.opacity,
      color: this.state.config.mapStyle.colour,
      dashArray: this.state.config.mapStyle.dashArray,
      fillOpacity: this.state.config.mapStyle.fillOpacity
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
          {this.getSelectionSidebar()}
          {this.getMap()}
          {this.getLegend()}
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
    return {
      appConfig,
      config
    };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.appConfig.servers.dev.concat(this.state.config.demoAPI);
    }

    return this.state.appConfig.servers.prod.concat(this.state.config.prodAPI);
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
