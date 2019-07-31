import React from 'react'
import { add, remove, complete } from '../actions/todo.actions'
import Tasks from './Tasks'
import { useState } from 'react'
import '../styles/todolist.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


export default props => {
  const [task, setTask] = useState('')
  const [count, setCount] = useState('')

  function addTask(e) {
    e.preventDefault()
    add(task)
    setTask('')
    setCount(Number(count) + 1)
  }

  function handleSubmit(e) {
   
    setTask(task)
  }

  return (
    <div className="tdpage">
      <header>
        <h1 className="title">todos</h1>
      </header>
      <form onSubmit={addTask}>
        <div className="taskinput">
        <MaterialIcon icon="keyboard_arrow_down" id="i"/>
      <input className="todoinput"name="task" type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="What needs to be done?"></input>
      <button className="submitbutton"><MaterialIcon icon="add_circle_outline" id="add"/></button>
      </div>
      <ul className="tasklist">
        <Tasks></Tasks>
      </ul>
      <footer>
        Tasks Remaining: {count}
      </footer>
      </form>
    </div>
  )
}