import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import {reducer, initialState} from './reducers/ToDoReducer';
import ToDoForm from './components/ToDoForm';
import TodoForm from './components/ToDoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      
      <TodoForm state={state} dispatch={dispatch}/>
      <ToDoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
