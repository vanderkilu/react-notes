const APP_NAME = 'todoly'

export function storeTask(todo) {
    let todos =  JSON.parse(localStorage.getItem(APP_NAME))
    if (todos === undefined || todos === null) {
        todos = []
    }
    todos.push(todo)
    localStorage.setItem(APP_NAME, JSON.stringify(todos))
}

export function getTasks() {
    const todos = JSON.parse(localStorage.getItem(APP_NAME))
    if (todos) {
        return todos
    }
    return []
}

export function removeTask(id) {
    let todos =  JSON.parse(localStorage.getItem(APP_NAME))
    if (todos !== undefined || todos !== null) {
        todos = todos.filter( todo => todo.id !== id )
        localStorage.setItem(APP_NAME, JSON.stringify(todos))
    }
   
}