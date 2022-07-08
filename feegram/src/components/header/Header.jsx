import React from "react";
import style from './Header.module.css';
import {ReactComponent as Logo} from '../../assets/images/social-media-logo.svg'
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header className={style.header}>
            <NavLink to="/" >
                <Logo />
            </NavLink>
        </header>
    )
}

export default Header;