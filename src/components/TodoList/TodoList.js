import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {task: "going parting", id:0}, 
                {task: "watching hobbit", id:1},
                {task: "read at least two pages on pragmatic programmer",id:2, }
            ]
        }
    }
    render() {
        const tasks = this.state.todos.map(todo => 
            <Todo task={todo} key={todo.id}/>
        )
        return (
            <div className="todoWrapper">
                {tasks}
            </div>
        )
    }
}

export default TodoList