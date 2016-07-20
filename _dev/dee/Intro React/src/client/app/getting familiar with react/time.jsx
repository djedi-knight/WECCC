import React from 'react';

class TimerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {secondsElapsed : 0};
    this.onTick = this.onTick.bind(this);
  }
  
    onTick () {
    let newCount = this.state.secondsElapsed + 1;
    this.setState({secondsElapsed: newCount});
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default TimerComponent;