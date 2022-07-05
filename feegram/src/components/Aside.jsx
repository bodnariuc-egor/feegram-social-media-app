import React from "react";
import style from './Aside.module.css';

function Aside() {
    return (
        <aside className={style.aside}>
            <ul className={style.list}>
            <li className={`${style.item} ${style.active}`}><a href="#">Profile</a></li>
            <li className={style.item}><a className={style.link} href="#">Messages</a></li>
            <li className={style.item}><a className={style.link} href="#">News</a></li>
            <li className={style.item}><a className={style.link} href="#">Music</a></li>
            <li className={style.item}><a className={style.link} href="#">Settings</a></li>
            </ul>
        </aside>
    )
}

export default Aside;