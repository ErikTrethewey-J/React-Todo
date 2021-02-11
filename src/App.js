import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from './components/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addTodo = (input) => {
    const newTodo = {
      id: Date.now(),
      task: input,
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        else { 
          return todo;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm clearCompleted={ this.clearCompleted } addTodo={this.addTodo} />
        <TodoList toggleCompleted={ this.toggleCompleted }todos={ this.state.todos }/>
      </div>
    );
  }
}

export default App;
