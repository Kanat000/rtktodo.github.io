import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import Todo from "./Todo.tsx";
import tdlStyle from './scss/todoList.module.scss'
import {Route, Routes} from "react-router-dom";

const TodoList: React.FC = () => {
    let state = useSelector((state:RootState) => state)

    return (
        <div className={tdlStyle.container}>
            <Routes>
                <Route path={'/'} element={
                    state.todos.map((todo, index)=>{
                        return <Todo id={todo.id} text={todo.text} status={todo.status} index={index} description={todo.description}/>
                    })
                }/>
                <Route path={'/all'} element={
                    state.todos.map((todo, index)=>{
                        return <Todo id={todo.id} text={todo.text} status={todo.status} index={index} description={todo.description}/>
                    })
                }/>
                <Route path={'/pending'} element={
                    state.todos.filter(todo=>todo.status==='pending').map((todo, index)=>{
                        return <Todo id={todo.id} text={todo.text} status={todo.status} index={index} description={todo.description}/>
                    })
                }/>
                <Route path={'/processing'} element={
                    state.todos.filter(todo=>todo.status==='processing').map((todo, index)=>{
                        return <Todo id={todo.id} text={todo.text} status={todo.status} index={index} description={todo.description}/>
                    })
                }/>
                <Route path={'/done'} element={
                    state.todos.filter(todo=>todo.status==='done').map((todo, index)=>{
                        return <Todo id={todo.id} text={todo.text} status={todo.status} index={index} description={todo.description}/>
                    })
                }/>
            </Routes>
        </div>
    );
}

export default TodoList;