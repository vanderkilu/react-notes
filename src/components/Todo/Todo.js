import React from 'react'
import './Todo.css'
function Todo(props) {
    return (
        <div className="todo">
            <p className="todo__done-btn"></p>
            <p className="todo__task">{props.task.task}</p>
            <p className="todo__delete-icon">&times;</p>
        </div>
    )
}

export default Todo