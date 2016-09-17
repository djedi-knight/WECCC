import React from 'react';
import Fetch from 'react-fetch';
import ScoreBoxModal from '../ScoreBoxModal';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Test = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    console.log(this.props);
    return (
      <div>
        <ScoreBoxModal />
      </div>
    );
  }
});

export const TestContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api">
          <Test test="works" />
        </Fetch>
      </div>
    );
  }
});
