import React from 'react';
import './FullImageContainer.scss';

export function FullImageContainer({ image, alt }) {
    return (
        <div className="fullImage">
            <img className="fullImage" src={image} alt={alt} />
        </div>
    );
}
