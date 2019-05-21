const APP_NAME = 'todoly'

export function storeTask(todo) {
    let todos =  JSON.parse(localStorage.getItem(APP_NAME))
    if (todos.length < 1 || todos === undefined || todos === null) {
        todos = []
    }
    todos.push(todo)
    return localStorage.setItem(APP_NAME, JSON.stringify(todos))
}

export function getTasks() {
    return JSON.parse(localStorage.getItem(APP_NAME))
}

export function removeTask(id) {
    let todos =  JSON.parse(localStorage.getItem(APP_NAME))
    if (todos.length < 1 || todos === undefined || todos === null) {
       return 
    }
    todos = todos.filter( todo => todo.id !== id )
    localStorage.setItem(APP_NAME, JSON.stringify(todos))
}