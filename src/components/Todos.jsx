import axios from 'axios';
import React, { useEffect } from 'react'
import { getTodoListsFailure, getTodoListsRequest, getTodoListsSuccess, addTodoFailure, addTodoRequest, addTodoSuccess } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
const Todos = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((store) => store)
    const handleAdd = (payload) => {
        addTodos(payload).then(() => getTodos()).catch(err => console.log(err))
    }

    const addTodos = (payload) => {
        const requestAction = addTodoRequest();
        dispatch(requestAction);

        return axios
            .post(`http://localhost:8080/todos`, payload)
            .then((res) => {
                const successAction = addTodoSuccess(res.data);
                dispatch(successAction);

            })
            .catch((err) => {
                const errorAction = addTodoFailure(err);
                dispatch(errorAction);
            });
    }
    const getTodos = () => {
        dispatch(getTodoListsRequest())
        axios.get("http://localhost:8080/todos").then((r) => {
            dispatch(getTodoListsSuccess(r.data))
        })
            .catch((e) => dispatch(getTodoListsFailure(e)))

    }
    useEffect(() => {
        if (todos.length === 0) {
            getTodos()
        }

    }, [])
    console.log(todos)
    return (
        <div>
            TODOS
            <div>
                <AddTodo onClick={handleAdd} />
                <TodoList todos={todos} />
            </div>

        </div>
    )
}

export default Todos