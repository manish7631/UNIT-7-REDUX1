import React from 'react'
import { Routes, Route } from "react-router-dom"
import SingleTodo from '../components/SingleTodo'
import HomePage from './HomePages'



const Pages = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
    </Routes>
}

export default Pages