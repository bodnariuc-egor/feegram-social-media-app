import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div>Profile image</div>
            <div className={style.descriptionBlock}>
                <div>Avatar</div>
                <div>Decription</div>
            </div>
        </>
    )
}

export default ProfileInfo;