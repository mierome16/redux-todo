const initialState = {
  task: [],
  id: '',
  counter: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, task: [action.payload, ...state.task]}
    default:
      return state
    case 'DELETE_TASK':
      return {...state, task: state.task.filter(todo => action.payload !== todo.id)}
    case 'COMPLETE_TASK':
      return {...state, task: state.task.filter(todo => action.payload !== todo.id.length)}
  }
}