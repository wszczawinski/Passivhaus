import React, { ReactNode } from 'react';

import './ContainerRow.scss';

interface ContainerRowProps {
    text: ReactNode | string;
    imgSrc: string;
    imgAlt: string;
    imgSmall?: boolean;
}

export function ContainerRow({ text, imgSrc, imgAlt, imgSmall }: ContainerRowProps) {
    return (
        <div className="container-row">
            {text}
            <img src={imgSrc} alt={imgAlt} className={`${imgSmall ? 'imgSmall' : ''}`} />
        </div>
    );
}
