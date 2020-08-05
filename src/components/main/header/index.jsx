import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ListProjects from '../../sections/inside/ListProjects';
import AppContext from '../../../context/app.context';
import './Header.scss';
import { verifySession } from '../../../services/session.service';
import { getItem } from '../../../utils/localstorage';

export default function Header() {
    const {isLoggedIn, toggleIsLoggedIn} = useContext(AppContext);
  
    getItem('tkn') && getItem('uid') && verifySession({}, resp => {
      if(resp && !resp.errorMessage) {
        toggleIsLoggedIn(true);
      }
    });

    return (
        <header>
            <NavLink exact={true} activeClassName="is-active" className="logo link" to="/">
                HEXQUARE
            </NavLink>
            {
                isLoggedIn ?
                <section>
                    <ListProjects/>
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
