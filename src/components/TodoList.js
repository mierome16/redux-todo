import React from 'react'
import { add, remove, complete, setFilter } from '../actions/todo.actions'
import Tasks from './Tasks'
import { useState } from 'react'
import '../styles/todolist.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useSelector } from 'react-redux'


export default props => {
  const allTasks = useSelector(appState => appState.tasks.length)
  const filter = useSelector(appState => appState.filter)
  const count = useSelector(appState => appState.tasks.filter(task => !task.complete).length)
  const [task, setTask] = useState('')

  const tasks = useSelector(appState => {
    const filter = appState.filter
    
    switch (filter) {
      case 'active':
        return appState.tasks.filter(task => !task.checked)
      case 'completed':
        return appState.tasks.filter(task => task.checked)
      default:
        return appState.tasks
    }
  })


  function addTask(e) {
    e.preventDefault()
    add(task)
    setTask('')
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
        <Tasks id={task.id} value={task.value} completed={task.completed}></Tasks>
      </ul>
      {allTasks > 0 ? (
      <footer>
        <p>Tasks Remaining: {count}</p>
        <div>
          <button className={filter === 'all' ? 'active' : ''} onClick={e => setFilter('all')} type="button">All</button>
          <button className={filter === 'active' ? 'active' : ''} onClick={e => setFilter('active')} type="button">Active</button>
          <button className={filter === 'completed' ? 'active' : ''} onClick={e => setFilter('active')} type="button">Completed</button>
        </div>
        <button >Clear All</button>
      </footer>
      ) : ''}
      </form>
    </div>
  )
}