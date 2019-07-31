import store from '../store'

let newid = 0
export function add(task) {
  store.dispatch({
    type: 'ADD_TASK',
    payload: {
      task: task,
      id: newid++,
      completed: false
    }
  })
}

export function remove(id) {
  store.dispatch({
    type: 'DELETE_TASK',
    payload: id
  })
}
export function complete(id) {
  store.dispatch({
    type: 'COMPLETE_TASK',
    payload: id
  })
}



