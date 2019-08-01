const initialState = {
  tasks: [],
  id: '',
  count: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, tasks: [action.payload, ...state.tasks]}
    default:
      return state
    case 'DELETE_TASK':
      return {...state, tasks: state.tasks.filter(task => action.payload !== task.id)}
    case 'COMPLETE_TASK':
      return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)}
      case 'MODIFY_TODO':
        return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)}
    
    case 'FILTER_CHANGE':
      return {...state, filter: action.payload}
  }
}