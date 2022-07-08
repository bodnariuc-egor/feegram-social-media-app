import React from "react";
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogs = [
        {id:1, name:'Arthur'},
        {id:1, name:'John'},
        {id:1, name:'Dutch'},
        {id:1, name:'Hosea'},
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messages = [
        {id:1, m:'Hi'},
        {id:2, m:'How are you?'},
        {id:3, m:'I have a plan'},
    ]

    const messagesElements = messages.map(message => <Message className={style.message} message={message.m} id={message.id} />)

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