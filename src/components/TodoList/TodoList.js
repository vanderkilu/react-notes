import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'
import { getTasks, storeTask } from '../../utils/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    _isFieldEmpty(){
        return this.state.task === ""
    }
    addTask(e) {
        if (this._isFieldEmpty()) {
            return null
        }
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
    }
    deleteTodo(e,id) {
        e.stopPropagation();
        const newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos: newTodos})
    }
    componentDidMount() {
        const todos = getTasks()
        if (todos) {
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
                    transtionLeaveTimeout={300}
                >
                    {tasks}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default TodoList