import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.scss';

export default function OutHeader() {


    return (
        <header>
            <NavLink exact={true} activeClassName="is-active" className="logo link" to="/o/home">
                HEXQUARE
            </NavLink>
            <section>
                <NavLink activeClassName="is-active" className="link" to="/o/login">
                    Login
                </NavLink>
            </section>
        </header>
    )
}
