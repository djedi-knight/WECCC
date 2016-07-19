// Import REact and Hellotext class
import React from 'react';
import HelloText from './HelloText';

// Create class called Hellobox that extends the base React Component class
export default class HelloBox extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      <HelloText name="Joe" />
      </div>
  }
}

