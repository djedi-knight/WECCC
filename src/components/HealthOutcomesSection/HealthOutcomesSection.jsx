import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ScoreBox from '../ScoreBox/ScoreBox';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="healthOutcomesSection">
        <ScoreBox />
      </div>
    );
  }
});
