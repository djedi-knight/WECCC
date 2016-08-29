import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.registeredCaregiversBox}>
        <Card theme={style}>
          <CardText>
            <div className={style.title}>
              Registered Caregivers
            </div>
            <div className={style.score}>
              0
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});
