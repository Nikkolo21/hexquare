import React from 'react';
import './Input.scss';

export default function Input(props) {
    const {
        defaultValue="",
        title="",
        placeholder="",
        type="primary",
        inputType="text",
        inputName="",
        minLength="",
        maxLength="",
        inputRef= () => {},
        errors=false
    } = props;

    return (
        <div className="input-box">
            <span>{title}</span>
            <input name={inputName} defaultValue={defaultValue} className={`input input-${type}`} type={inputType} placeholder={placeholder} ref={inputRef}/>
            {errors && errors.type === "required" && <small className="error">{inputName} is required</small>}
            {errors && errors.type === "pattern" && <small className="error">Verify your {inputName}</small>}
            {errors && errors.type === "minLength" && <small className="error">Min {minLength} length</small>}
            {errors && errors.type === "maxLength" && <small className="error">Max {maxLength} length</small>}
        </div>
    )
}
