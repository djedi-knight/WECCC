import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   constructor(props) {
    super(props);
    this.handleClick = this.onLike.bind(this);
   }



   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
            
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
            
         </div>
      )
   }

   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
   }
}
export default AddTodo;