import React from 'react';
import './Unaivalable.scss';

export default function Unavailable(props) {
    const {text="section unavailable"} = props;
    return (
        <div className="unaivalable-section">
            <small>{text}</small>
        </div>
    )
}
