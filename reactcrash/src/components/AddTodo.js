import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
  state = {
  	title: ''
  }

  onSubmit = (e) => {
  	e.preventDefault();
  	this.props.addTodo(this.state.title);
  	this.setState({title: ''});
  }

  onChange = (e) => this.setState({
  	title: e.target.value
  })

  render() {
    return (
    <form  onSubmit={this.onSubmit} style={{display: 'flex'}}>
    	<input type='text' 
    	 name='title' 
    	 placeholder='Add Todo...'
    	 className={'btn btn-light'}
    	 style={{flex: '10'}}
    	 value={this.state.title}
    	 onChange={this.onChange}
    	/>

    	<input 
    	type='submit' 
    	value='Submit'  
    	className={'btn btn-primary'} 
    	style={{flex:'1'}}/>
    </form>

   )
  }
  
}

// PropTypes

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}


export default AddTodo;