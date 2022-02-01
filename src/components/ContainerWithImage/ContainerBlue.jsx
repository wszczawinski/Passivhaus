import React from 'react';
import './ContainerBlue.scss'

function ContainerBlue({ text, border }) {
    return (
        <div className="container-blue">
            {border && <span className="container-blue__border"></span>}
            {text}
        </div>
    );
}

export default ContainerBlue;
