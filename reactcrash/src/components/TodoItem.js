import React from 'react';
import PropTypes from 'prop-types'


class TodoItem extends React.Component {
    

  getStyle = () => {
  	return {
  		textDecoration: this.props.todo.completed ? "line-through" : 'none',
  		backrground: '#f4f4f4',
  		padding: '10px',
  		borderBottom: '1px #ccc dotted'
  	}
  }

 

  render() {
    
  	const { id, title } = this.props.todo;
    return (
    	<div style={this.getStyle()}>
    	<p>
    	<input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {' '}
    	{title}
    	<button onClick={this.props.delTodo.bind(this, id)} className={'btn btn-danger'} style={btnStyle}> x </button>
    	</p>
    	</div>
    	)
  }
  
}

TodoItem.propTypes = {
	


  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

const btnStyle = {
	borderRadius: "20%",
	cursor: 'pointer',
	float: 'right'
}




export default TodoItem;
