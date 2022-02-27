import React from 'react';
import './FullImageContainer.scss';

function FullImageContainer({ image, alt }) {
    return (
        <div className="fullImage">
            <img className="fullImage" src={image} alt={alt} />
        </div>
    );
}

export default FullImageContainer;
