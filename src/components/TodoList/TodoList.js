import React from 'react'
import Todo from '../Todo/Todo.js'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="todoWrapper">
                <Todo/>
            </div>
        )
    }
}

export default TodoList