import React from 'react';

import Card from './Card';

const ToDoList = ({ state, dispatch }) => {
  return (
    <>
      <h2>List of Todos</h2>
      <div className='card-container'>
        {state.toDos.map(todo => (
          <Card key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

export default ToDoList;