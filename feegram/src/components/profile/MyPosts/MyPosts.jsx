import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {id:1, message:'Hi, how are you?', likesCount: 12},
        {id:2, message:'It\'s my first post', likesCount: 7},
        {id:3, message:'', likesCount: 0},
        {id:4, message:'', likesCount: 2},
    ]

    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={style.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.wrapper}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;