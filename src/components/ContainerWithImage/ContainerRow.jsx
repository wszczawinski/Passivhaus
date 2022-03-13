import React from 'react';
import './ContainerRow.scss';

export function ContainerRow({ text, imgSrc, alt, imgSmall }) {
    return (
        <div className="container-row">
            {text}
            <img src={imgSrc} alt={alt} className={`${imgSmall ? 'imgSmall' : ''}`} />
        </div>
    );
}
