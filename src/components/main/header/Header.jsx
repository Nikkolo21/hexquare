import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact={true} activeClassName="is-active" className="logo link" to="/">
                    HEXQUARE dev
                </NavLink>
                <NavLink activeClassName="is-active" className="link" to="/login">
                    Login
                </NavLink>
            </header>
        )
    }
}
