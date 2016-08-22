import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.scoreRiskPopover}>
        <div className={style.title}>
          <FontIcon className={style.icon} value="warning" />
        </div>
        <div className={style.body}>
          There is an indication that <br />
          your High Risk score is <br />
          lower than the peer score.
        </div>
      </div>
    );
  }
});
