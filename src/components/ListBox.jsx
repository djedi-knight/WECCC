import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Table} from 'react-toolbox';

const UserModel = {
  name: {type: String},
  twitter: {type: String},
  birthdate: {type: Date},
  cats: {type: Number},
  dogs: {type: Number},
  active: {type: Boolean}
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ListBox">
    <Table
      model={UserModel}
      />
      </div>
    );
  }
});


