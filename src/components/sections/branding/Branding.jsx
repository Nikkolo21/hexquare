import React from 'react'
import ColorPalette from './color-palette/ColorPalette';
import Fonts from './fonts/Fonts';
import './Branding.scss';

export default function Branding() {
    return (
        <section className="branding-section">
            <ColorPalette paletteTitle="My Palette" colors={["#37F3F3", "#43BBF3", "#5FAEEA", "#9E74C2", "#FFFFFF"]}></ColorPalette>
            <Fonts fonts={["Poppins", "Inter"]} />
        </section>
    )
}
