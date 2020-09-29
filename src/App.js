import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    name: 'finish project',
    id: 1,
    complete: 'false',
  },
  {
    name: 'feed dog',
    id: 2,
    complete: 'false',
  },
  {
    name: 'buy groceries',
    id: 3,
    complete: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      complete: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (taskId === todo.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      }),
    });
  };

  clearTodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.complete),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
