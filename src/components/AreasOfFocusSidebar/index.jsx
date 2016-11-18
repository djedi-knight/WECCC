import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from './style';
import data from './data.json';
import config from './config.json';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  render() {
    return (
      <div className={style.areasOfFocusSidebar} >
        {this.state.config.keys.items.map((item, i) =>
          <div key={i}>
            <label>{item}</label>
            <br />
            <hr />
          </div>
        )}
      </div>
    );
  }
});
