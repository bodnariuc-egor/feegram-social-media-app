import React from "react";
import style from './Main.module.css';

function Main() {
    return (
        <main className={style.main}>
            <div>Main image</div>
            <div>
            <div>Avatar</div>
            <div>Decription</div>
            </div>
            <div>My posts
            <div>New post</div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
            </div>
        </main>
    )
}

export default Main;