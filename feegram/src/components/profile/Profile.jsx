import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <main>
            <ProfileInfo />
            <MyPosts />
        </main>
    )
}

export default Profile;