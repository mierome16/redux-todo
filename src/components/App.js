import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import TodoList from './TodoList'
import Tasks from './Tasks'
import TodoForm from './TodoForm'

export default props => {
  return (
    <Provider store={store}>
      <div>
      <TodoList></TodoList>
      </div>
    </Provider>
  )
}