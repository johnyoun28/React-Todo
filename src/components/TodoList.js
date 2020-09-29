import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((item) => (
        <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
      ))}
      <button onClick={props.clearTodo}>Clear</button>
    </div>
  );
};

export default TodoList;
