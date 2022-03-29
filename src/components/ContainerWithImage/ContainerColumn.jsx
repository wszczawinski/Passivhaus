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

    const textAndImage = <div className="text-and-image">
        {textStart}
        <img src={imgSrc} alt={alt} />
    </div>
    return (
        <div
            className={`container-column 
            ${smallPadding ? 'smallPadding' : ''} 
            ${colorCream ? 'colorCream' : ''}`}
        >
            {textStartRow ? (
                <div className="text-image-row">
                    {textAndImage}
                </div>
            ) : (
                <>
                    {textStart}
                    <div className="text-image-row__images">
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
