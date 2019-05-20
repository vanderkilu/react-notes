import React from 'react'
import './Todo.css'
function Todo() {
    return (
        <div className="todo">
            <p className="todo__done-btn"></p>
            <p className="todo__task">just creating a todo</p>
            <p className="todo__delete-icon">&times;</p>
        </div>
    )
}

export default Todo