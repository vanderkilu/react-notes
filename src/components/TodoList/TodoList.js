import React from 'react'
import Todo from '../Todo/Todo.js'
import './TodoList.css'
import {DragDropContext,Droppable} from 'react-beautiful-dnd'
import { getTasks, 
         updateTasks,
         uuidv4
        } from '../../utils/index'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            todos: [
                {task: "app uses local storage for storing tasks", id:1, completed: false},
                {task: "rearrange task by dragging them", id:2, completed: false}
            ],
            showEmojiPicker: false
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
                id: uuidv4(),
                task: state.task,
                completed: false
            }],
            task: ""
        }), ()=> {
            updateTasks(this.state.todos)})
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
    reorder (list, startIndex, endIndex){
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        const items = this.reorder(
          this.state.todos,
          result.source.index,
          result.destination.index
        );
        this.setState({
          todos: items
        });
    }   
    toggleEmojiPickerShow() {
        this.setState({
            showEmojiPicker: !this.state.showEmojiPicker
        })
    } 
    addEmoji(emoji) {
        this.setState((state)=> ({
            task: state.task + emoji.native,
            showEmojiPicker: false
        }))
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
        const tasks = this.state.todos.map((todo,i) => (
            <Todo todo={todo} 
                key={todo.id}
                onClick={()=> this.markDone(todo.id)}
                onDelete={(e)=> this.deleteTodo(e,todo.id)}
                index={i}
            />
        ))
        const animatedTasks = (
            <ReactCSSTransitionGroup className="transitioner"
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {tasks}
            </ReactCSSTransitionGroup>
        )
        const showEmojiPicker = this.state.showEmojiPicker
        return (
            <div className="todoWrapper">
                <form className="form" onSubmit={(e)=> this.addTask(e) }>
                    <input type="text" 
                        className="input" 
                        placeholder="Add a task ..."
                        value={this.state.task}
                        onChange={ (e) => this.handleChange(e) }
                    />
                    <span role="img" className="emoji-toggle" 
                          aria-label="emoji-toggle"
                          onClick={this.toggleEmojiPickerShow.bind(this)}>
                        🙂
                    </span>
                </form>
                <span className='picker'>
                    { showEmojiPicker &&
                        <Picker className="epicker"
                            onSelect={this.addEmoji.bind(this)} 
                            set="emojione" 
                        />
                    }
                </span>
                <DragDropContext onDragEnd={this.onDragEnd.bind(this)} className="transitioner" >
                    <Droppable droppableId="todolist" className="transitioner">
                        {provided => (
                            <div className="transitioner"
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                            {animatedTasks}
                            {provided.placeholder}
                            
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
               
            </div>
        )
    }
}

export default TodoList