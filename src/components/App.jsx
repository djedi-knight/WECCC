import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
