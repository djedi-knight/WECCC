import React from 'react'

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

export default Hello;



// ReactDOM.render(<HelloMessage name="Dee" />, mountNode);