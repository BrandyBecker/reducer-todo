import React from 'react';

const Card = ({ todo, dispatch }) => {
  return (
  
    <div
     className={`card ${todo.Completed ? 'completed' : ''}`}
     onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })}>
     <p>{todo.toDo}</p>
    </div>
   
  );
};

export default Card;