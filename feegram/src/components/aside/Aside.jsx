import React from "react";
import style from './Aside.module.css';
import { NavLink } from 'react-router-dom';

function Aside() {
    return (
        <aside className={style.aside}>
            <ul className={style.list}>
            <li className={style.item}><NavLink className={({isActive}) => isActive ? style.active : style.link} to="/Profile">Profile</NavLink></li>
            <li className={style.item}><NavLink className={({isActive}) => isActive ? style.active : style.link} to="/Dialogs">Messages</NavLink></li>
            <li className={style.item}><NavLink className={({isActive}) => isActive ? style.active : style.link} to="/News">News</NavLink></li>
            <li className={style.item}><NavLink className={({isActive}) => isActive ? style.active : style.link} to="/Music">Music</NavLink></li>
            <li className={style.item}><NavLink className={({isActive}) => isActive ? style.active : style.link} to="/Settings">Settings</NavLink></li>
            </ul>
        </aside>
    )
}

export default Aside;