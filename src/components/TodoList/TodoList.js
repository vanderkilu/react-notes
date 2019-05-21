import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'
import { getTasks, 
         storeTask,
         updateTasks
        } from '../../utils/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let counter = 2

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            todos: [
                {task: "app uses local storage for storing tasks", id:0, completed: false},
                {task: "first react app after learning it for 3days", id:1, completed: false}
            ]
        }
    }
    _isFieldEmpty(){
        return this.state.task === ""
    }
    addTask(e) {
        if (this._isFieldEmpty()) {
            return null
        }
        const newTask = {
            id: counter++,
            task: this.state.task,
            completed: false
        }
        this.setState((state)=> ({
            todos: state.todos.concat([newTask]),
            task: ""
        }))
        e.preventDefault()
        storeTask(newTask)
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
        updateTasks(updatedTodos)
    }
    deleteTodo(e,id) {
        e.stopPropagation();
        const newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos: newTodos})
        updateTasks(newTodos)
    }
    componentDidMount() {
        const todos = getTasks()
        if (todos.length > 0 ) {
            this.setState({
                todos: todos
            })
        }
    }
    render() {
        const tasks = this.state.todos.map(todo => 
            <Todo todo={todo} 
                key={todo.id}
                onClick={()=> this.markDone(todo.id)}
                onDelete={(e)=> this.deleteTodo(e,todo.id)}
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
                <ReactCSSTransitionGroup className="transitioner"
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {tasks}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default TodoList