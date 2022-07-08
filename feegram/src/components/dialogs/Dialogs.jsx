import React from "react";
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElements = props.messages.map(message => <Message className={style.message} message={message.m} id={message.id} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;