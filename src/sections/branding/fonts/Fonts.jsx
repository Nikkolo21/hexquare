import React from 'react';
import './Fonts.scss';
import Unavailable from '../../../shared/unavailable/Unavailable';
import WebFont from 'webfontloader';
import Font from './font/Font';

export default function Fonts(props) {
    const {fonts} = props;
    WebFont.load({
        google: {
            families: [...fonts]
        }
    })
    return (
        <section className="fonts-section">
            {
                fonts ?
                fonts.map((e, i) => <Font key={i} font={e} />) : <Unavailable />
            }
        </section>
    )
}
