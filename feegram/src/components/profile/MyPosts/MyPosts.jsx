import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.wrapper}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message={`It's my first post`} likesCount='2' />
                <Post likesCount='5' />
                <Post likesCount='7' />
            </div>
        </div>
    )
}

export default MyPosts;