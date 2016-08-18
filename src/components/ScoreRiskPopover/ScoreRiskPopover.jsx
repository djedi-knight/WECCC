import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.ScoreRiskPopover}>
        <div className={theme.title}>
          <FontIcon className={theme.fontIcon} value="warning" />
        </div>
        <div className={theme.body}>
          There is an indication that <br />
          your High Risk score is <br />
          lower than the peer score.
        </div>
      </div>
    );
  }
});
