import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import './Todo.css'
function Todo(props) {
    let isDoneElem
    if (!props.todo.completed) {
        isDoneElem = <i className="far fa-circle todo__done-icon"></i>
    }
    else {
        isDoneElem = <i className="fa fa-check todo__check-icon"></i>
    }
    return (
        <Draggable  key={props.todo.id} draggableId={props.todo.id.toString()}  index={props.index}>
        {(provided)=> (
            <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={props.todo.completed ? " todo todo-complete" : "todo" } 
                onClick={props.onClick}>

                {isDoneElem}
                <p className={props.todo.completed ? "todo__task completed ":"todo__task"}>
                    {props.todo.task}
                </p>
                <i className="todo__delete-icon fa fa-times" onClick={props.onDelete}></i>
            </div>
        )}
        </Draggable>
    )
}

export default Todo