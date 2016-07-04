import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React how are you......</p>;
  }
}

render(<App/>, document.getElementById('app'));
