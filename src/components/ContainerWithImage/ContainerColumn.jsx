import React from 'react';
import './ContainerColumn.scss';

export function ContainerColumn({
    textStartRow,
    textStart,
    textEnd,
    imgSrc,
    alt,
    shortBorder,
    noBorder,
    smallPadding,
    colorCream,
    borderEnd,
}) {
    return (
        <div
            className={`container-column 
            ${smallPadding ? 'smallPadding' : ''} 
            ${colorCream ? 'colorCream' : ''}`}
        >
            {textStartRow ? (
                <div className="text-image-row">
                    {textStart}
                    <img src={imgSrc} alt={alt} />
                </div>
            ) : (
                <>
                    {textStart}
                    <img src={imgSrc} alt={alt} />
                </>
            )}

            {noBorder ?? (
                <span className={`container-column__border${shortBorder ? '--short' : ''}`}></span>
            )}
            {textEnd}

            {borderEnd ? (
                <span className={`container-column__border${shortBorder ? '--short' : ''}`}></span>
            ) : (
                ''
            )}
        </div>
    );
}
