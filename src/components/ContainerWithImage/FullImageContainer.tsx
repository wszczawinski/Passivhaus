import React from 'react';

import './FullImageContainer.scss';

interface FullImageContainerProps {
    imgSrc: string;
    imgAlt?: string;
}

export function FullImageContainer({ imgSrc, imgAlt }: FullImageContainerProps) {
    return (
        <div className="fullImage">
            <img className="fullImage" src={imgSrc} alt={imgAlt} />
        </div>
    );
}
