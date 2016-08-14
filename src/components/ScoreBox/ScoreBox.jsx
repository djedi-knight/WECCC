import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardTitle, CardText, CardActions, FontIcon, Link } from 'react-toolbox';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.ScoreBox}>
        <Card theme={theme} raised>
          <CardTitle
            theme={theme}
            avatar={<FontIcon value="info" />}
            title="Patient Experience"
          />
          <div className={theme.score}>
            <CardTitle
              theme={theme}
              avatar={<FontIcon value="warning" />}
              title="3/15"
              subtitle="(label/define?)"
            />
          </div>
          <CardText>
            <FontIcon value="person" />
            Peer Comparison
            5 / 10
          </CardText>
          <CardText>
            <FontIcon value="open_in_browser" />
            Change Over Time
            <FontIcon value="arrow_upward" />
          </CardText>
          <CardActions>
            <Link href="#" label="Show Detail" />
          </CardActions>
        </Card>
      </div>
    );
  }
});
