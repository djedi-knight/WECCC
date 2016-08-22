import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ListBox from '../ListBox';
import style from './style';
import {Button} from 'react-toolbox';
import ScoreBox from '../ScoreBox';

export default React.createClass({
  mixins: [PureRenderMixin],

    getInitialState() {
    return { isShowMore: false};
  },

  handleToggle() {
    this.setState({ isShowMore: !this.state.isShowMore });
  },

  render() {
    return (
      <div className={style.AreasOfFocusBody} >
        <ListBox />

          {this.state.isShowMore ?  <div> <ScoreBox /> <ScoreBox /> </div> : null}
        <Button label="Show More/Less" onClick={this.handleToggle} />
      </div>
    );
  }
});
