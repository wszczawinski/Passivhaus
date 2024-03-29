import React, { ReactNode } from 'react';

import './ContainerColumn.scss';

interface ContainerColumnProps {
    textStart?: ReactNode | string;
    textEnd?: ReactNode | string;
    textStartRow?: boolean;
    imgSrc?: string;
    imgAlt?: string;
    imgSrc2?: string;
    imgAlt2?: string;
    colorCream?: boolean;
    smallPadding?: boolean;
    noBorder?: boolean;
    borderEnd?: boolean;
    shortBorder?: boolean;
    imageDescription?: string;
}

export function ContainerColumn({
    textStartRow,
    textStart,
    textEnd,
    imgSrc,
    imgAlt,
    imgSrc2,
    imgAlt2,
    colorCream,
    smallPadding,
    noBorder,
    borderEnd,
    shortBorder,
    imageDescription,
}: ContainerColumnProps) {
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
                    <img src={imgSrc} alt={imgAlt} />
                </div>
            ) : (
                <>
                    {textStart}
                    <div className="container-column__images">
                        <img src={imgSrc} alt={imgAlt} />
                        {imgSrc2 && <img src={imgSrc2} alt={imgAlt2} />}
                    </div>
                    {imageDescription && imageDesc}
                </>
            )}

            {noBorder ?? <span className={`container-column__border${shortBorder ? '--short' : ''}`}></span>}

            {textEnd}

            {borderEnd ? <span className={`container-column__border${shortBorder ? '--short' : ''}`}></span> : ''}
        </div>
    );
}
