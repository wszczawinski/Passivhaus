import React, { ReactNode } from 'react';

import './ContainerBlue.scss';

interface ContainerBlueProps {
    text: ReactNode | string;
    border?: boolean;
    borderBottom?: boolean;
    imgSrc?: string;
    imgAlt?: string;
}

export function ContainerBlue({ text, border, borderBottom, imgSrc, imgAlt }: ContainerBlueProps) {
    return (
        <div className="container-blue">
            {imgSrc && <img src={imgSrc} alt={imgAlt} />}
            {border && <span className="container-blue__border"></span>}
            {text}
            {borderBottom && <span className="container-blue__borderBottom"></span>}
        </div>
    );
}
