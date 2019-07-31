import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { remove } from '../actions/todo.actions'
import { useState } from 'react'

export default function DeleteButton(props) {
    const [task, setTask] = useState('')
    function removeTask (e) {
        e.preventDefault()
        remove(props.id)
      }
    
    return (
        <div>
             <button className="deletebutton" onClick={removeTask}><MaterialIcon icon="delete" id="trash"/></button>

        </div>
    )
}
