import React from 'react';
import banner from '../banner.jpg';

export default function Header() {
    return (
        <div className="responsive-banner">
            <img src={banner} alt="Banner TCE Calculator"/>
            <div className="container-envelope">
                <h1 className="center text-white">Total Cost of Engagement Calculator</h1>
            </div>
        </div>
    );
}
