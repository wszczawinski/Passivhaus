import React, { ReactNode } from 'react';

import './ContainerRow.scss';

interface ContainerRowProps {
    text: ReactNode | string;
    imgSrc?: string;
    imgAlt?: string;
    imgSmall?: boolean;
}

export const ContainerRow = ({ text, imgSrc, imgAlt, imgSmall }: ContainerRowProps) => {
    return (
        <div className="container-row">
            <p className={`container-row-text ${imgSrc ? '' : 'container-row-full-text'}`}>{text}</p>
            {imgSrc && <img src={imgSrc} alt={imgAlt} className={`${imgSmall ? 'imgSmall' : ''}`} />}
        </div>
    );
};
