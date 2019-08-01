import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { remove } from '../actions/todo.actions'
import { useState } from 'react'

export default function DeleteButton(props) {
    const [task, setTask] = useState('')
    const [count, setCount] = useState(props.count)
    function removeTask (e) {
        e.preventDefault()
        remove(props.id)
        setCount(props.count - 1)
        console.log(props.count)

      }
    
    return (
        <div>
             <button className="deletebutton" onClick={removeTask}><MaterialIcon icon="delete" id="trash"/></button>

        </div>
    )
}
