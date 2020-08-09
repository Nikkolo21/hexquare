import React from 'react';
import './ColorPalette.scss';
import Color from './color/Color';
import Unavailable from '../../../../shared/Unavailable';

export default function ColorPalette(props) {
    const {colors, paletteTitle=""} = props;
    return (
        <>
            <p>{paletteTitle}</p>
            <section className="palette-section">
                {
                    colors ?
                    <div className="palette-box">
                        {
                            colors.map((color, index) => (
                                <Color key={index} color={color} />
                            ))
                        }
                    </div> :
                    <Unavailable />
                }
            </section>
        </>
    )
}
