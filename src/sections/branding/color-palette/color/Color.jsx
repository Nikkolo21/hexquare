import React, { useState } from 'react';
import './Color.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Color(props) {
    const [copied, setCopied] = useState(false);
    const {color} = props;

    return (
        <CopyToClipboard text={color} onCopy={() => setCopied(true)} onMouseLeave={() => copied && setCopied(false)}>
            <div className="color" style={{backgroundColor: color}}>
                <span>{color}</span> {copied && <small>copied</small>}
            </div>
        </CopyToClipboard>
    )
}
