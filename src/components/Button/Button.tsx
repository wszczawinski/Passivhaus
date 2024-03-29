import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
    className: string;
    onClick: () => void;
    content: ReactNode | string;
}

export const Button = ({ className = 'btn__default', onClick, content }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type="button">
            {content}
        </button>
    );
};
