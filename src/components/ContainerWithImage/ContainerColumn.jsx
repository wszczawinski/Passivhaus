import React from 'react';
import './ContainerColumn.scss';

export function ContainerColumn({
    textStartRow,
    textStart,
    textEnd,
    imgSrc,
    img2Src,
    alt,
    alt2,
    shortBorder,
    noBorder,
    smallPadding,
    colorCream,
    borderEnd,
    imageDescription,
}) {
    const imageDesc = <p className="image-description">{imageDescription}</p>;

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
                    <div className="container-column__images">
                        <img src={imgSrc} alt={alt} />
                        {img2Src && <img src={img2Src} alt={alt2} />}
                    </div>
                    {imageDesc}
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
