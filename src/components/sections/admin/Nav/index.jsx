import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
    const { id } = useParams();

    return (
        <section className="admin-navigation">
            <NavLink activeClassName="is-active" className="link" to={`/i/project/${id}/visual`}>
                Visual
            </NavLink>
            <NavLink activeClassName="is-active" className="link" to={`/i/project/${id}/assets`}>
                Assets
            </NavLink>
            <NavLink activeClassName="is-active" className="link" to={`/i/project/${id}/code`}>
                Code
            </NavLink>
        </section>
    )
}
