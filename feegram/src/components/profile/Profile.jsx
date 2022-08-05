import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </main>
    )
}

export default Profile;