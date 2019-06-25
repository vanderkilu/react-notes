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

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }