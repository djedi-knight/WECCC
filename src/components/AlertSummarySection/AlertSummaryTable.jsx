import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Table from 'react-toolbox/lib/table';
import FontIcon from 'react-toolbox/lib/font_icon';
import theme from '../../theme/default';

const AlertModel = {
  CATEGORY: {type: String},
  OUTCOME: {type: String},
  NOTES: {type: String}
};

const alert = [
  {CATEGORY: <b>Health Outcomes</b>, OUTCOME: '', NOTES: ''},
  {CATEGORY: <a href='#'>Patient Experience</a>, OUTCOME: '2/10', NOTES: <div><FontIcon value='person' />  Less than peers</div> },
  {CATEGORY: <b>Areas of Focus</b>, OUTCOME: '', NOTES: ''},
  {CATEGORY: <a href='#'>Safety Events</a>, OUTCOME: '--', NOTES: ''},
  {CATEGORY: <div style={{float:'right'}}><a href='#'>Adverse Drug Effects</a></div>, OUTCOME: '--', NOTES: <div><FontIcon value='person' /> High Risk Group</div>},
  {CATEGORY: <a href='#'>AVG Number of CAPS Triggered</a>, OUTCOME: '', NOTES: ''},
  {CATEGORY: <a href='#'>Readmissions</a>, OUTCOME: '37', NOTES: <div><FontIcon value='trending_up' /> Trending up</div>},
  {CATEGORY: <div style={{float:'right'}}><a href='#'>DIVERT Scale</a></div>, OUTCOME: '--', NOTES: <div><FontIcon value='person' /> Higher than peers</div>}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState (){ 
    return{source: alert }; 
  },

  render() {
    return (
      <div  style = {{width:'60%', margin: 'auto'}}>


      <Table className={theme.AlertTable}
        selectable={false}
        model={AlertModel}   
        source={this.state.source}  />
      </div>
    );
  }
});