import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-box">
                <div className="love">
                    With <span>&#10084;</span> from Lima, Perú.
                </div>
            </footer>
        )
    }
}
