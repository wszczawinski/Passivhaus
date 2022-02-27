import React from 'react';
import './ContainerRow.scss';

export function ContainerRow({ text, imgSrc, alt }) {
    return (
        <div className="container-row">
            {text}
            <img src={imgSrc} alt={alt} />
        </div>
    );
}
