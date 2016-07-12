import React from 'react';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';

<ReactSliderNativeBootstrap
    value={this.state.currentValue}
    handleChange={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
    disabled="disabled" />
    }

export default Slider;
