import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText, FontIcon } from 'react-toolbox';
import style from './style';
import data from './data.json';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className={style.scoreBoxSimple}>
        <Card theme={style}>
          <CardText>
            <div className={style.title}>
              {this.state.data.title}
            </div>
            <div className={style.score}>
              {this.state.data.score}
            </div>
          </CardText>
          <CardText>
            <FontIcon value="trending_up" className={style.icon}/>
          </CardText>
        </Card>
      </div>
    );
  }
});
