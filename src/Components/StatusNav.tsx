import React from 'react';
import navStyle from './scss/nav.module.scss'
import CounterItem from "./CounterItem.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import {StatusType, todoListType, toggleBtnList} from "../app/todoSlice.ts";
import StatusToggleButton from "./StatusToggleButton.tsx";
import {Link} from "react-router-dom";

const statusCounter = (todos:todoListType[], status: StatusType) => {
    return todos.filter(todo => todo.status === status).length
}
const StatusNav: React.FC = () => {
    let state = useSelector((state:RootState) => state)
    let todos = state.todos

    return (
        <div className={navStyle.container}>
            <div>
                <div className={navStyle.counterBlock}>
                    <CounterItem count_value={statusCounter(todos, 'done')} count_name={'Выполнено'} count_status={'done'}/>
                    <CounterItem count_value={statusCounter(todos, 'processing')} count_name={'В работе'} count_status={'processing'}/>
                    <CounterItem count_value={statusCounter(todos, 'pending')}  count_name={'В ожидание'} count_status={'pending'}/>
                </div>
            </div>
            <div>
                <div>
                        {toggleBtnList.map((toggle)=>{
                            return <Link to={'/'+toggle.statusType}><StatusToggleButton name={toggle.name} status={toggle.statusType as string}/></Link>
                        })}
                </div>
            </div>
        </div>
    );
}

export default StatusNav;