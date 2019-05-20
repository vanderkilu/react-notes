import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            todos: [
                {task: "going parting", id:0, completed: false},
            ]
        }
    }
    addTask(e) {
        const id = this.state.todos.length - 1
        const newTask = {
            id: id + 1,
            task: this.state.task,
            completed: false
        }
        this.setState((state)=> ({
            todos: state.todos.concat([newTask]),
            task: ""
        }))
        e.preventDefault()
    }
    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }
    markDone(id) {
        const updatedTodos = this.state.todos.map( todo => (todo.id === id) 
                ? Object.assign({}, todo, {completed: !todo.completed})
                : todo )
        this.setState({
            todos:  updatedTodos
        })
        console.log(this.state.todos)
    }
    render() {
        const tasks = this.state.todos.map(todo => 
            <Todo todo={todo} 
                key={todo.id}
                onClick={()=> this.markDone(todo.id)}
            />
        )
        return (
            <div className="todoWrapper">
                <form className="form" onSubmit={(e)=> this.addTask(e) }>
                    <input type="text" 
                        className="input" 
                        placeholder="Add a task ..."
                        value={this.state.task}
                        onChange={ (e) => this.handleChange(e) }
                    />
                </form>
                {tasks}
            </div>
        )
    }
}

export default TodoList