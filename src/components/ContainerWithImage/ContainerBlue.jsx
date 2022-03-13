import React from 'react';
import './ContainerBlue.scss';

export function ContainerBlue({ text, border, borderBottom }) {
    return (
        <div className="container-blue">
            {border && <span className="container-blue__border"></span>}
            {text}
            {borderBottom && <span className="container-blue__borderBottom"></span>}
        </div>
    );
}
