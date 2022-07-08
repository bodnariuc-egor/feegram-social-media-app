import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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