import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card } from 'react-toolbox/lib/card';
import ScoreBoxList from './ScoreBoxList';
import mui from 'material-ui';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ScoreBox">
        <Card style={{ width: '400px', height: '1000px' }}>
          <ScoreBoxList>
          </ScoreBoxList>
        </Card>
      </div>
    );
  }
});
