import React from 'react';
import './Button.scss';

export function Button({ className = 'default_btn', text, ...rest }) {
    return (
        <button className={className} {...rest} type="button">
            {text}
        </button>
    );
}
