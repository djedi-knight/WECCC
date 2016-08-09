import React from 'react';
import { Card, FontIcon, Link } from 'react-toolbox';
import theme from '../../theme/default';

export default React.createClass({
  render() {
    return (
      <div className={theme.ScoreBox}>
        <Card style={{ width: '25%', height: '400px', border: '2px solid gray' }}>
          <p> Patient Experience <FontIcon value="info" /> </p>
          <h1> <FontIcon value="info" /> 3/15</h1>
          <h1> (label/define?) </h1>
          <h1> <FontIcon value="person" /> Peer Comparison </h1>
          <h1> 5/10 </h1>
          <h1> <FontIcon value="open_in_browser" />Change Over Time</h1>
          <h1> UP</h1>
          <Link href="#/" label="Show Detail" />
        </Card>
      </div>
    );
  }
});
