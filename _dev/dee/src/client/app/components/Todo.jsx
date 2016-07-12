import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
	constructor(props) {
    super(props);
  	}
   render() {
      return (
         <li>
            {this.props.text}
         </li>
      )
   }
}