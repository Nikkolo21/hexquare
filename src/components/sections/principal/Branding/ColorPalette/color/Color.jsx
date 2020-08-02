import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Color.scss';


export default function Color(props) {
    const [copied, setCopied] = useState(false);
    const {color} = props;

    return (
        <CopyToClipboard text={color} onCopy={() => setCopied(true)} onMouseLeave={() => copied && setCopied(false)}>
            <div className="color" style={{backgroundColor: color}}>
                <span>{color}</span> {copied && <small>Copied!</small>}
            </div>
        </CopyToClipboard>
    )
}
