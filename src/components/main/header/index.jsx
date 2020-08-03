import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header({isLoggedIn}) {
    return (
        <header>
            <NavLink exact={true} activeClassName="is-active" className="logo link" to="/">
                HEXQUARE <sup>dev</sup>
            </NavLink>
            {
                isLoggedIn ?
                <section>
                    <NavLink activeClassName="is-active" className="link" to="/create_project">
                        Create Project
                    </NavLink>
                </section>:
                <section>
                    <NavLink activeClassName="is-active" className="link" to="/login">
                        Login
                    </NavLink>
                </section>
            }
        </header>
    )
}
