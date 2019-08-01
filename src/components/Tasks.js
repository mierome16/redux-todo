import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import todo from '../reducers/todo.reducer'
import { remove, modifyTask } from '../actions/todo.actions';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import DeleteButton from './DeleteButton';
import TodoList from './TodoList'

export default props => {
  const [value, setValue] = useState(props.value)

const [completed, setCompleted] = useState('')

useEffect(() => {
  modifyTask({
    value: value,
    completed: completed,
    id: props.id
  })
}, [value, completed, props.id])


// function handleCompleted(e) {
//   const checked = e.target.checked
//   setCompleted(completed)
//   complete({
//     completed:completed
//   })
// }
// function handleSubmit(e) {
//   e.preventDefault()
//   setCount(count)
// }
  const tasks = useSelector(appState => appState.tasks)
  return (
    tasks.map((item, i) => {
      
      return (
        <li key={"item" + item.id}>
          <input type="checkbox" 
          id={'completed' + props.id}
          completed={completed}
          onChange={e => setCompleted(completed)}
          ></input>

          <p className="todo">{item.task}</p>

          <DeleteButton id={item.id}></DeleteButton>
        </li>
      )
    }))
    
}