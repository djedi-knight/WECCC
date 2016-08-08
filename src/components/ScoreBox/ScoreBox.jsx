import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardTitle } from 'react-toolbox/lib/card';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ScoreBox">
        <Card style={{ width: '300px', height: '300px' }}>
          <CardTitle
            title="Patient Experience"
            avatar="https://s31.postimg.org/ihdkqz7ez/Information.png"
          />
        </Card>
      </div>
    );
  }
});
