import React from 'react';
import CreateTodo from './create-todos';
import TodosList from './Todos-list';

const todos = [
  {
    task: 'make bed',
    isCompleted: false
  },
  {
    task: 'dinner',
    isCompleted: true
  }
]

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
    
  }
 
  render () {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList  todos={this.state.todos} />
      </div>

    );

  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos});
  }
}