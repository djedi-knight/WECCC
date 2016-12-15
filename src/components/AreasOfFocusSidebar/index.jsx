import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import config from './config.json';
import style from './style';

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
