import React from 'react';
import WebFont from 'webfontloader';
import Unavailable from '../../../../shared/Unavailable';
import Font from './Font';
import './Fonts.scss';

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
