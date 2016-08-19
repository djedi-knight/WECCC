import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
  Button,
  Card,
  CardText
} from 'react-toolbox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.alertSummarySidebar}>
        <Card theme={style}>
          <div className={style.headerBar} />
          <CardText>
            <div>
              <p>
                This summary provides an overview of key areas of improvement.
                Explore the information in these sections to discover other potential
                opportunities for success.
              </p>
              <hr />
              <Button theme={style} label="DOWNLOAD OVERVIEW" href="#/download" />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});
