import React from 'react';
import './Login.scss';
import Button from '../../form/button/Button';
import Input from '../../form/input/Input';
import { getUsers } from '../../../services/user.service';

export default function Login() {
    // getUsers(elem => {})
    return (
        <section className="login-section">
            <div className="left">
                <form>
                    <h1>Log in to your account</h1>
                    <Input title="Email Address" input_type="email" type="primary" placeholder="example@mail.com"/>
                    <Input title="Password" input_type="password" type="primary" placeholder="password"/>
                    <Button type="primary" text="Log in"/>
                </form>
            </div>
            <div className="right"></div>
        </section>
    )
}
