const APP_NAME = 'todoly'


export function getTasks() {
    const todos = JSON.parse(localStorage.getItem(APP_NAME))
    if (todos) {
        return todos
    }
    return []
}
export function updateTasks(tasks) {
    localStorage.setItem(APP_NAME, JSON.stringify(tasks))
}
