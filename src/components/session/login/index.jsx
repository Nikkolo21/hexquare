import React, { useState } from 'react';
import './Login.scss';
import Button from '../../form/button/Button';
import Input from '../../form/input/Input';
import { useForm } from "react-hook-form";
import { login } from '../../../services/session.service';
import { Link } from 'react-router-dom';
import { loginForm } from './login.form';

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = ({email, password}) => {
        setErrorMessage(null);
        login(email, password, (response) => {
            if(response && response.errorMessage) {
                setErrorMessage(response.errorMessage);
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
                    <small>You do not have an account? <Link className="create-account" to="/register">Create one</Link></small>
                    <p>{errorMessage && <small className="error">{errorMessage}</small>}</p>
                    <Button type="primary" text="Log in" />
                </form>
            </div>
            <div className="right"></div>
        </section>
    )
}
