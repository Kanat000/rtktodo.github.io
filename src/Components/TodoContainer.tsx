import React from 'react';
import tdcStyle from './scss/todoContainer.module.scss'
import TodoList from "./TodoList.tsx";
import StatusNav from "./StatusNav.tsx";
import CreateForm from "./CreateForm.tsx";
import Loading from "./Loading.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../app/store.ts";

const TodoContainer: React.FC = () => {
    let loading = useSelector((state:RootState) => state.loading)
    return (
        <div className={tdcStyle.container}>
            <StatusNav />
            <TodoList />
            <CreateForm />
            <Loading loading={loading}/>
        </div>
    );
}

export default TodoContainer;