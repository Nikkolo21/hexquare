import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ListProjects from '../../sections/inside/ListProjects';
import AppContext from '../../../context/app.context';
import { verifySession } from '../../../services/session.service';
import { getItem } from '../../../utils/localstorage';
import './Header.scss';

export default function Header() {
    const {isLoggedIn, toggleIsLoggedIn} = useContext(AppContext);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getItem('tkn') && getItem('uid') && verifySession({}, resp => {
            setIsLoaded(true);
            if(resp && !resp.errorMessage) {
                toggleIsLoggedIn(true);
            }
        });
    }, [isLoggedIn, toggleIsLoggedIn]);

    return (
        <header>
            <NavLink exact={true} activeClassName="is-active" className="logo link" to="/">
                HEXQUARE
            </NavLink>
            {
                isLoaded && 
                    <>
                        {
                            isLoggedIn ?
                            <section>
                                <ListProjects/>
                            </section>
                            :
                            <section>
                                <NavLink activeClassName="is-active" className="link" to="/login">
                                    Login
                                </NavLink>
                            </section>
                        }
                    </>
            }
        </header>
    )
}
