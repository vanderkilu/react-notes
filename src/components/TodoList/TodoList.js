import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'
import {Droppable} from 'react-beautiful-dnd'
import { getTasks, 
         updateTasks,
        } from '../../utils/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            todos: [
                {task: "app uses local storage for storing tasks", id:1, completed: false},
                {task: "first react app after learning it for 3days", id:2, completed: false}
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
        this.setState((state)=> ({
            todos: [...state.todos, {
                id: state.todos.length + 1,
                task: state.task,
                completed: false
            }],
            task: ""
        }), ()=> updateTasks(this.state.todos))
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
        updateTasks(updatedTodos)
    }
    deleteTodo(e,id) {
        e.stopPropagation();
        const newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos: newTodos})
        updateTasks(newTodos)
    }
    componentWillMount() {
        const todos = getTasks()
        if (todos.length > 0 ) {
            this.setState({
                todos: todos
            })
        }
    }
    render() {
        const tasks = this.state.todos.map((todo,i) => 
            <Todo todo={todo} 
                key={todo.id}
                onClick={()=> this.markDone(todo.id)}
                onDelete={(e)=> this.deleteTodo(e,todo.id)}
                index={i}
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
                {/* <ReactCSSTransitionGroup className="transitioner"
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                > */}
                 <Droppable droppableId="todolist">
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                        {tasks}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {/* </ReactCSSTransitionGroup> */}
            </div>
        )
    }
}

export default TodoList