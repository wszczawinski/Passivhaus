import React from 'react';
import './ContainerColumn.scss';

export function ContainerColumn({ textStart, textEnd, imgSrc, alt, shortBorder }) {
    return (
        <div className="container-column">
            {textStart}
            <img src={imgSrc} alt={alt} />
            <span className={`container-column__border${shortBorder ? '--short' : ''}`}></span>
            {textEnd}
        </div>
    );
}
