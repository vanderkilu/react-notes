import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="wrapper">
      <h3 className="app-name">TodoLy</h3>
      <p className="app-text"> Make your day productive  <span  className="emoji">⌛ 😄 </span></p>
       <TodoList/>
    </div>
  );
}

export default App;
