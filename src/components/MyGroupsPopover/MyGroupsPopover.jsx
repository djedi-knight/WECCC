import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, FontIcon } from 'react-toolbox';
import theme from '../../theme/default';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <Card className={theme.MyGroupsPopover} >
        <h3>OVERVIEWS</h3>
        <p> At my agency I manage: </p>
        <div className={theme.Overview}>
          <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin: '10px', float: 'left' }}>
            <h1> PROVIDERS </h1>
            <p> 30 </p>
          </Card>
          <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin: '10px 0', float: 'left' }}>
            <h1> PATIENTS </h1>
            <p> 2,000 </p>
          </Card>
          <Card style={{ width: 'auto', height: '100px', border: '2px solid gray', margin: '10px' }}>
            <h1> LONG-TERM CARE NEEDS PATIENTS </h1>
            <p> 1,500 </p>
          </Card>
        </div>
        <h3>
          <span><FontIcon value="person" /></span>
          PEER COMPARISON
        </h3>
        <p> Your 4 peer agencies manage: </p>
        <div className={theme.Overview}>
          <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin: '10px', float: 'left' }}>
            <h1> PROVIDERS </h1>
            <p> 205 </p>
          </Card>
          <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin: '10px 0', float: 'left' }}>
            <h1> PATIENTS </h1>
            <p> 1,843 </p>
          </Card>
          <Card style={{ width: 'auto', height: '100px', border: '2px solid gray', margin: '10px' }}>
            <h1> LONG-TERM CARE NEEDS PATIENTS </h1>
            <p> 800 </p>
          </Card>
        </div>
      </Card>
    );
  }
});
