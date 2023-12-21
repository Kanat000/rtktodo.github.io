import React from 'react';
import navStyle from './scss/nav.module.scss';
import {getColorByStatus} from "./Todo.tsx";
import {StatusType} from "../app/todoSlice.ts";
interface CounterType{
    count_value : number,
    count_name: string,
    count_status: StatusType
}
const CounterItem: React.FC<CounterType> = (props) => {
    return (
        <div className={navStyle.counterItem}>
            <div  style={{color: getColorByStatus(props.count_status)}}>{props.count_value}</div>
            <div  style={{color: getColorByStatus(props.count_status)}}>{props.count_name}</div>
        </div>

    );
}

export default CounterItem;