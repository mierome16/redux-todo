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
export function complete(task) {
  store.dispatch({
    type: 'COMPLETE_TASK',
    payload: {
      id: task.id,
      completed: false
    }
  })
}
export function modifyTask(task) {
  store.dispatch({
    type: 'MODIFY_TASK',
    payload: {
      id: task.id,
      value: task.value,
      completed: task.completed
    }
  })
}


export function setFilter(filter) {
  store.dispatch({
    type: 'FILTER_CHANGE',
    payload: filter
  })
}



