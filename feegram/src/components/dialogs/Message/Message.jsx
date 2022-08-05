import React from "react";
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.avatar}></div>
            <div className={style.text}>{props.message}</div>
        </div>
    )
}

export default Message;