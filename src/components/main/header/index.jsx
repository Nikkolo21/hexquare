import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ListProjects from '../../sections/inside/ListProjects';
import AppContext from '../../../context/app.context';
import { verifySession } from '../../../services/session.service';
import { getItem } from '../../../utils/localstorage';
import './Header.scss';

export default function InsHeader() {
    const {isLoggedIn, toggleIsLoggedIn} = useContext(AppContext);
    const [isLoaded, setIsLoaded] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const verifyToken = () => {
            setIsLoaded(false);
            if(getItem('tkn') && getItem('uid')) {
                verifySession({}, resp => {
                    setIsLoaded(true);
                    if(resp && !resp.errorMessage) {
                        toggleIsLoggedIn(true);
                    } else {
                        setIsLoaded(true);
                        toggleIsLoggedIn(false);
                        history.push('/o/login');
                    }
                })
            } else {
                setIsLoaded(true);
            }
        }
        !isLoggedIn && verifyToken();
    }, [history, toggleIsLoggedIn, isLoggedIn]);

    return (
        <header>
            <NavLink exact={true} activeClassName="is-active" className="logo link" to="/i/projects">
                HEXQUARE
            </NavLink>
            {
                isLoaded && 
                    <section>
                        {
                            isLoggedIn ?
                                <ListProjects/>:
                                <NavLink activeClassName="is-active" className="link" to="/o/login">
                                    Login
                                </NavLink>
                        }
                    </section>
            }
        </header>
    )
}
