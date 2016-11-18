import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';
import style from './style';
import config from './config.json';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  render() {
    return (
      <div className={style.alertSummarySidebar}>
        <p>
          {this.state.config.text}
        </p>
        <hr />
        <Button theme={style} label="DOWNLOAD" href="#/download" />
      </div>
    );
  }
});
