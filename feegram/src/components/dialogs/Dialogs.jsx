import React from "react";
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>Arthur</div>
                <div className={style.dialog}>John</div>
                <div className={style.dialog}>Dutch</div>
                <div className={style.dialog}>Hosea</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>I have a plan</div>
            </div>
        </div>
    )
}

export default Dialogs;