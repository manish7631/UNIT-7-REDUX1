import React from 'react'
import { Link } from 'react-router-dom'
const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.length && todos.map((e, index) => {
                return <div key={e.id}><Link to={`/todo/${e.id}`}>
                    <h4>{index + 1}.  {e.title}   {e.status}</h4>
                </Link>
                </div>
            })}
        </div>
    )
}

export default TodoList