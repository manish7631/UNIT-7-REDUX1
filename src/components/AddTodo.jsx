import React from 'react'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
const AddTodo = ({ onClick }) => {
    const [text, setText] = useState('')
    const handleAdd = () => {
        const payload = { id: uuid(), title: text, status: false }
        onClick(payload)
        setText("")
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='add Some Text' />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo