import React from 'react';
import './ContainerRow.scss'

const ContainerRow = ({ text, imgSrc, alt }) => {

    return (
        <div className="container-row">
            {text}
            <img src={imgSrc} alt={alt} />
        </div>
    );
};


export default ContainerRow;
