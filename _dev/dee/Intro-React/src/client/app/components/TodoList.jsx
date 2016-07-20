import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

class TodoList extends Component {
	constructor(props) {
    super(props);
  	}
   render() {
      return (
         <ul>
            {this.props.todos.map(todo => <Todo key = {todo.id} {...todo}  />)}
         </ul>
      )
   }
}

export default TodoList;