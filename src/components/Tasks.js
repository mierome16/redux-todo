import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import todo from '../reducers/todo.reducer'
import { remove, complete } from '../actions/todo.actions';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import DeleteButton from './DeleteButton';
import TodoList from './TodoList'

export default props => {
//const count = useSelector(appState => appState.count)

const [count, setCount] = useState(props.count)

function handleCompleted(e) {
  e.preventDefault(e)
  setCount((props.count) - 1)
}
// function handleSubmit(e) {
//   e.preventDefault()
//   setCount(count)
// }
  const task = useSelector(appState => appState.task)
  return (
    task.map((item, i) => {
      
      return (
        <li key={"item" + item.id}>
          <input type="checkbox" 
          // onClick={handleCompleted}
          ></input>

          <p className="todo">{item.task}</p>

          <DeleteButton id={item.id}></DeleteButton>
        </li>
      )
    }))
    
}