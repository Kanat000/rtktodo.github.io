import React from 'react';
import navStyle from './scss/nav.module.scss';
import {useLocation} from "react-router-dom";

interface ToggleBtnProps{
    name: string
    status: string
}

const StatusToggleButton: React.FC<ToggleBtnProps> = (props) => {
    let currentStatus = useLocation().pathname.split('/')[1] === props.status
    return (
        <button className={currentStatus ? [navStyle.toggleBtn, navStyle.activeBtn].join(' ') : navStyle.toggleBtn}>
            {props.name}
        </button>
    );
}

export default StatusToggleButton;