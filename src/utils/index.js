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

export function saveTheme(color) {
    localStorage.setItem(APP_NAME+'-theme', JSON.stringify(color))
}
export function getTheme() {
    const color = JSON.parse(localStorage.getItem(APP_NAME+'-theme'))
    if (color) return color
    return ''
}