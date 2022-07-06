import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img className={style.avatar} src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg" alt="Avatar image" />
            {props.message}
            <div>
               {props.likesCount}
            </div>
        </div>
    )
}

export default Post;