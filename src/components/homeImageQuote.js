import React from 'react';

export default function HomeImageQuote(props) {

    return (
    <div className="home-image-outer-container">
    <div className="home-image-container">
        <img src={props.image} alt={props.alt} className="home-image-small"/>
        <div className="home-image-overlay">
        </div>
    </div>
    </div>
    )}