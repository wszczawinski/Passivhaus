import React from 'react';
import './ContainerBlue.scss';

export function ContainerBlue({ text, border, borderBottom, image, imageAlt }) {
    return (
        <div className="container-blue">
            {image && <img src={image} alt={imageAlt} />}
            {border && <span className="container-blue__border"></span>}
            {text}
            {borderBottom && <span className="container-blue__borderBottom"></span>}
        </div>
    );
}
