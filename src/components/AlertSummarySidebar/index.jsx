import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.alertSummarySidebar}>
        <p>
          This summary provides an overview of key areas of improvement.
          Explore the information in these sections to discover other potential
          opportunities for success.
        </p>
        <hr />
        <Button theme={style} label="DOWNLOAD" href="#/download" />
      </div>
    );
  }
});
