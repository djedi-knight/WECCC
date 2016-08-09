import React from 'react';
import { Card, FontIcon, Link } from 'react-toolbox';

export default React.createClass({
  render() {
    return (
      <div className="ScoreBox">
        <Card style={{ width: '400px', height: '1000px' }}>
          <p> Patient Experience <FontIcon value="info" /> </p>
          <h1> <FontIcon value="info" /> 3/15</h1>
          <h2> (label/define?) </h2>
          <p1> <FontIcon value="person" /> Peer Comparison </p1>
          <p2> 5/10 </p2>
          <p1> <FontIcon value="open_in_browser" />Change Over Time</p1>
          <p3> UP</p3>
          <Link href="#/" label="Show Detail" />
        </Card>
      </div>
    );
  }
});
