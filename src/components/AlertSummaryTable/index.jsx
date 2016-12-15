import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Table } from 'react-toolbox';
import config from './config.json';
import style from './style';

const AlertModel = {
  category: { type: String },
  subCategory: { type: String },
  outcome: { type: String },
  notes: { type: String }
};

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  render() {
    return (
      <div className={style.alertSummaryTable}>
        <Table
          theme={style}
          selectable={false}
          model={AlertModel}
          source={this.state.config.tableData}
        />
      </div>
    );
  }
});
