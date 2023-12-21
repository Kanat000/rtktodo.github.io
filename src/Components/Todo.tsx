import React from 'react';
import todoStyle from './scss/todo.module.scss'
import {RiDeleteBin6Line} from "react-icons/ri";
import {changeTodoStatus, deleteTodo, StatusType, todoListType} from "../app/todoSlice.ts";
import {useDispatch} from "react-redux";

interface TodoProps extends todoListType {
    index: number
}

export const getColorByStatus = (status: StatusType) => {
    switch (status){
        case 'pending': return 'rgba(255,104,0,0.58)';
        case "processing": return 'rgba(0,56,255,0.55)';
        case "done": return 'rgba(16,133,31,0.55)';
    }
}

const Todo: React.FC<TodoProps> = (todo) => {
    let statusColor = getColorByStatus(todo.status)
    let dispatch = useDispatch()
    return (
        <div className={todoStyle.container}>
            <div className={todoStyle.gridContainer}>
                <div className={todoStyle.mainBlock}>
                    <div><span style={{backgroundColor:statusColor}}>{todo.index}</span></div>
                    <div>
                        <div className={todoStyle.title} style={{borderColor:statusColor}}><span style={{color:statusColor}}>{todo.text}</span></div>
                    </div>
                    <div><select value={todo.status}
                                 onChange={(e)=>dispatch(changeTodoStatus({id: todo.id, status: e.target.value as StatusType}))}
                                 style={{borderColor:statusColor, color:statusColor}} >
                        <option value={'processing'}>В работе</option>
                        <option value={'pending'}>В ожидание</option>
                        <option value={'done'}>Выполнено</option>
                    </select></div>
                </div>
                <div className={todoStyle.descBlock}>
                    {todo.description.split('\n').map((desc_line)=>{
                        return <p>{desc_line}</p>
                    })}
                </div>
            </div>
            <button className={todoStyle.deleteContainer} onClick={()=>dispatch(deleteTodo(todo.id))}>
                <RiDeleteBin6Line style={{color:'white'}}/>
            </button>
        </div>
    );
}

export default Todo;