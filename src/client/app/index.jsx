import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import HelloReact from './HelloReact.jsx';
//import User from './User.jsx';
import Counter from './counter.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
        <HelloReact />
        <Counter />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
