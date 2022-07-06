import React from "react";
import style from './Header.module.css';

function Header() {
    return(
        <header className={style.header}>
            <a>
                <img className={style.logo} src="../assets/images/social-media-logo.svg" alt="Social media logo" />
            </a>
        </header>
    )
}

export default Header;