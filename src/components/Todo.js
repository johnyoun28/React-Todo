import React from 'react';

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.complete ? 'complete' : ''}`}
      onClick={() => props.toggleTask(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
