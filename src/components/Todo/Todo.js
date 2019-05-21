import React from 'react'
import './Todo.css'
function Todo(props) {
    let isDoneElem
    if (!props.todo.completed) {
        isDoneElem = <p className="todo__done-icon"></p>
    }
    else {
        isDoneElem = <i className="fa fa-check todo__check-icon"></i>
    }
    
    return (
        <div className={props.todo.completed ? " todo todo-complete" : "todo" } 
            onClick={props.onClick}>
            {isDoneElem}
            <p className={props.todo.completed ? "todo__task completed ":"todo__task"}>{props.todo.task}</p>
            <i className="todo__delete-icon fa fa-times" onClick={props.onDelete}></i>
        </div>
    )
}

export default Todo