import React from 'react';
import './Input.scss';

export default function Input(props) {
    const {title="", placeholder="", type="primary", input_type="text"} = props;
    return (
        <>
            <span>{title}</span>
            <input className={`input input-${type}`} type={input_type} placeholder={placeholder}/>
        </>
    )
}
