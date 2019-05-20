import React from 'react'
import './Todo.css'
function Todo(props) {
    return (
        <div className="todo">
            <p className={props.todo.completed ? "todo__done-btn done": "todo__done-btn"}
                onClick={props.onClick}>
            </p>
            <p className={props.todo.completed ? "todo__task completed ":"todo__task"}>{props.todo.task}</p>
            <p className="todo__delete-icon">&times;</p>
        </div>
    )
}

export default Todo