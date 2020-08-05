import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Button from '../../form/button/Button';
import Input from '../../form/input/Input';
import { signup } from '../../../services/session.service';
import { registerForm } from './register.form';
import './Register.scss';

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = ({name, lastname, email, password}) => {
        setErrorMessage(null);
        signup(name, lastname, email, password, (response) => {
            if(response && response.errorMessage) {
                setErrorMessage(response.errorMessage);
            }
        });
    };

    return (
        <section className="register-section">
            <div className="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Create your account</h1>
                    {
                        registerForm.map(elem => 
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
                    <small><Link className="have-account" to="/login">I already have an account</Link></small>
                    <p>{errorMessage && <small className="error">{errorMessage}</small>}</p>
                    <Button type="primary" text="Sign up" />
                </form>
            </div>
            <div className="right"></div>
        </section>
    )
}