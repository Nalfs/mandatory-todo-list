
import React from 'react';


export default class TodosList extends React.Component {
  
  render () {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Chose a task" ref="createInput" required />
        <button>Create</button>
      </form>
    );

  }

  handleCreate(event) {
      event.preventDefault();
        if (this.refs.createInput.value === "") return;
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
  }
}