import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox';
import style from './style';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.registeredCaregiversBox}>
        <Card theme={style}>
          <CardText>
            <div className={style.title}>
              {this.props.data.title}
            </div>
            <div className={style.score}>
              {this.props.data.value}
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});
