import Slider from 'react-toolbox/lib/slider';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],


  getInitialState() {
    return {   slider2: 5,
    slider3: 1 };
  },

  handleChange (slider, value) {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  },

  render () {
    return (
      <section>
        <h1>Divert</h1>
        <Slider pinned snaps min={0} max={10} step={1} editable value={this.state.slider3} onChange={this.handleChange.bind(this, 'slider3')} />
      </section>
    );
  }
});
