import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <main>
            <div>Profile image</div>
            <div>
            <div>Avatar</div>
            <div>Decription</div>
            </div>
            <MyPosts />
        </main>
    )
}

export default Profile;