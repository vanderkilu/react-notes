import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'
import { DragDropContext } from 'react-beautiful-dnd'
function App() {
    const onDragEnd = () => {}
    return (
      <div className="wrapper">
        <Header/>
        <DragDropContext>
          <TodoList></TodoList>
        </DragDropContext>
        <Footer/>
      </div>
    );
}

export default App;
