import React from 'react';
//This is a stateless component
class CombinedComponent extends React.Component {
   render() {
      return (
         <div>
            <TimerComponent />
            <AwesomeComponent />
            <Hello />
            
         </div>
      );
   }
}
//This is a stateful component
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }
}

//This is a stateful component
class Hello extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name : 'Dee'};
    // this.onLike = this.onLike.bind(this);
  }
  render() {
    return (<div> Hello {this.state.name}</div>);
  }
}


//This is a stateful component
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


export default CombinedComponent;