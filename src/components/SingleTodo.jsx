import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { removeTodoFailure, removeTodoRequest, removeTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../redux/action'
const SingleTodo = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(store => store)
    console.log(todos)
    const { id } = useParams()
    const [currentTodo, setCurrentTodo] = useState({});
    const navigate = useNavigate()
    const toggleStatus = (id, newStatus) => {
        dispatch(toggleTodoRequest())
        return axios.patch(`http://localhost:8080/todos/${id}`, { status: newStatus })
            .then((r) => dispatch(toggleTodoSuccess(r.data)))
            .catch((err) => dispatch(toggleTodoFailure(err)))
    }
    const removeTodo = (id) => {
        dispatch(removeTodoRequest())
        return axios.delete(`http://localhost:8080/todos/${id}`)
            .then((r) => {
                dispatch(removeTodoSuccess(id))
                navigate("/")
            })
            .catch((err) => dispatch(removeTodoFailure(err)))
    }
    useEffect(() => {
        let currentTodo = todos.find((item) => item.id === id || null)
        currentTodo && setCurrentTodo(currentTodo)
    }, [todos, id])
    return (
        <div>
            <h1>{currentTodo?.title} {currentTodo?.status ? "True" : "False"}</h1>
            <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>TOGGLE</button>
            <button onClick={() => removeTodo(currentTodo.id)}>Remove</button>
        </div>
    )
}

export default SingleTodo