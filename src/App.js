import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'

function App() {
  const handleClick = () => {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light-theme')
  }
  return (
    <div className="wrapper">
      <h3 className="app-name">TodoLy</h3>
      <p className="app-text"> Make your day productive   
          <span role="img" className="emoji" aria-label="productivity-emojis">
              ⌛ 😄 
          </span>
      </p>
       <TodoList/>
       <div className="footer">
          <p className="footer__by">
            Made With  
            <span role="img" className="emoji" aria-label="love-emoji">
                💜
            </span>
            love by <a href="http://twitter.com/kweku_kilu" 
                    target="_blank" rel="noopener noreferrer"> kweku_kilu</a>
          </p>
          <div className="footer__theme">
              <span className="theme" onClick={ ()=> handleClick() }></span>
          </div>
       </div>
    </div>
  );
}

export default App;
