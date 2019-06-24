import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
    return (
      <div className="wrapper">
        <Header/>
        <TodoList></TodoList>
        <Footer/>
      </div>
    );
}

export default App;
