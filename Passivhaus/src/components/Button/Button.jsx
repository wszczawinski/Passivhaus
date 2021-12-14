import React from 'react';
import './Button.scss';

export function Button({ className = 'btn__default', onClick, textContent }) {
    return (
        <button className={className} onClick={onClick} type="button">
            {textContent}
        </button>
    );
}
