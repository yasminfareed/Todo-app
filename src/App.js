import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';


function App() {
  return (
    <>
    <div className='todo-app'>
    <TodoList />
  </div>
  <div className="App">
      <Counter />
    </div>
  </>
  );
}


export default App;