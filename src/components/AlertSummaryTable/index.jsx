import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Table } from 'react-toolbox';
import style from './style';
import data from './data.json';
import config from './config.json';
import { Row, Col } from 'react-flexbox-grid';

// const AlertModel = {
//   CATEGORY: { type: String },
//   SUBCATEGORY: { type: String },
//   OUTCOME: { type: String },
//   NOTES: { type: String },
// };

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data, config };
  },
  getRows() {
    if (this.props.data) {
      return this.props.data;
    }

    return [];
  },
  render() {
    return (
      <div className={style.alertSummaryTable}>
        <Row >
            {this.state.config.tableHeaders.map((tableHeader, i) =>
              <Col key={i} xs={3}>{tableHeader}</Col>
            )}
          </Row>
          {this.getRows().map((row, i) =>
            <div key={i}>
              <Row style={{ border: '0.5px solid gray', backgroundColor: '#e8f8f5' }}>
                <Col xs={2}>{row.category}</Col>
                <Col xs={2}>{row.subCategory}</Col>
                <Col xs={2}>{row.outcome}</Col>
                <Col xs={2}>{row.notes}</Col>
              </Row>
            </div>
          )}
        
      </div>
    );
  }
});

// <Table 
// theme={style} 
// selectable={false} 
// model={AlertModel} 
// source={this.state.data.tableData} />
//         <br/><br/>