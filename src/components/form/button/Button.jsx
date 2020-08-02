import React from 'react';
import './Button.scss';

export default function Button(props) {
    const {type="primary", text=""} = props;
    return (
        <div className="button-box">
            <button className={`button button-${type}`}>
                {text}
            </button>
        </div>
    )
}
