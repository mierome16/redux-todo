import { createStore } from 'redux'

import exampleReducer from './reducers/todo.reducer'
import todoReducer from './reducers/todo.reducer';

const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store