import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ListBox from '../ListBox/ListBox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.AreasOfFocusBody} >
        <ListBox />
      </div>
    );
  }
});
