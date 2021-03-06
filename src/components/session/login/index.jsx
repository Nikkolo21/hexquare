import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Button from '../../form/button/Button';
import Input from '../../form/input/Input';
import { login } from '../../../services/session.service';
import { loginForm } from './login.form';
import { setItem } from '../../../utils/localstorage';
import AppContext from '../../../context/app.context';
import './Login.scss';

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const { toggleIsLoggedIn } = useContext(AppContext);
    const history = useHistory();

    const onSubmit = ({email, password}) => {
        setErrorMessage(null);
        login(email, password, (response) => {
            if(response && response.errorMessage) {
                setErrorMessage(response.errorMessage);
            } else {
                setItem('tkn', response.token);
                setItem('uid', response.user_id);
                toggleIsLoggedIn(true);
                history.push('/i/projects');
            }
        });
    };

    return (
        <section className="login-section">
            <div className="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Log in to your account</h1>
                    {
                        loginForm.map(elem => 
                        <Input
                            key={elem.id}
                            minLength={elem.minLenght}
                            maxLength={elem.maxLenght}
                            errors={errors[`${elem.name}`]}
                            inputRef={register({
                                minLength: elem.minLenght,
                                maxLength: elem.maxLenght,
                                required: elem.required,
                                pattern: elem.pattern
                            })}
                            inputName={elem.name}
                            title={elem.title}
                            inputType={elem.inputType}
                            type={elem.type}
                            placeholder={elem.placeholder}
                        />)
                    }
                    <small>You do not have an account? <Link className="create-account" to="/o/register">Create one</Link></small>

                    {
                        errorMessage && errorMessage.map(elem =>
                            <p><small className="error">{elem}</small></p>
                        )
                    }
                    <Button type="primary" text="Log in" />
                </form>
            </div>
            <div className="right"></div>
        </section>
    )
}
