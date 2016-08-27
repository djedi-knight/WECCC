import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon, Table } from 'react-toolbox';
import style from './style';

const AlertModel = {
  CATEGORY: { type: String },
  OUTCOME: { type: String },
  NOTES: { type: String }
};

const data = [
  { CATEGORY: <b>Health Outcomes</b>, OUTCOME: '', NOTES: '' },
  { CATEGORY: <a href="#">Patient Experience</a>, OUTCOME: '2/10', NOTES: <div><FontIcon value="person" />  Less than peers</div> },
  { CATEGORY: <b>Areas of Focus</b>, OUTCOME: '', NOTES: '' },
  { CATEGORY: <a href="#">Safety Events</a>, OUTCOME: '--', NOTES: '' },
  { CATEGORY: <div style={{ float: 'right' }}><a href="#">Adverse Drug Effects</a></div>, OUTCOME: '--', NOTES: <div><FontIcon value="person" /> High Risk Group</div> },
  { CATEGORY: <a href="#">AVG Number of CAPS Triggered</a>, OUTCOME: '', NOTES: '' },
  { CATEGORY: <a href="#">Readmissions</a>, OUTCOME: '37', NOTES: <div><FontIcon value="trending_up" /> Trending up</div> },
  { CATEGORY: <div style={{ float: 'right' }}><a href="#">DIVERT Scale</a></div>, OUTCOME: '--', NOTES: <div><FontIcon value="person" /> Higher than peers</div> }
];


export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className={style.alertSummaryTable}>
        <Table theme={style} selectable={false} model={AlertModel} source={this.state.data} />
      </div>
    );
  }
});
