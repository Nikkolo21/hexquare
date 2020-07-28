import React from 'react';
import './Font.scss';

export default function Font(props) {
    const {font="Roboto"} = props;

    return (
        <section className="font-section" style={{fontFamily: font}}>
            <div className="left">
                <small>{font}</small>
                <a href={`https://fonts.google.com/download?family=${font}`} rel="noopener noreferrer" target="_blank" className="big-size">
                    Aa
                </a>
                <br/>
                <textarea maxLength={50} style={{fontFamily: font}} defaultValue="This text can be edit" className="editable" />
            </div>
            <div className="right medium-size">
                <span>
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    <br/>
                    0123456789
                </span>
            </div>
        </section>
    )
}
