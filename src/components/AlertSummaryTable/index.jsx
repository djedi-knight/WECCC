import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Table } from 'react-toolbox';
import style from './style';
import data from './data.json';

const AlertModel = {
  CATEGORY: { type: String },
  SUBCATEGORY: { type: String },
  OUTCOME: { type: String },
  NOTES: { type: String },
};

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className={style.alertSummaryTable}>
        <Table theme={style} selectable={false} model={AlertModel} source={this.state.data.tableData} />
      </div>
    );
  }
});
