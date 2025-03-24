import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/public" end
                             style={({isActive})=>({background:isActive?'#1a1a1a':'',
                                                                  border: isActive?'1px solid #1a1a1a':'',
                                                                  borderRadius: '8px'})}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/films" end>
                      Фильмы
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorits" end>
                      Избранное
                    </NavLink>
                </li>
            </ul>
        </nav>

                    );
                    };

                    export default Nav;