import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './Modal.scss';

export function Modal({ content, handleClose }) {
    return (
        <div className="modal">
            <section className="modal__window">
                <span>
                    {content.map(item => (
                        <p>{item}</p>
                    ))}
                </span>
                <button className="modal__window--close" onClick={handleClose} aria-label='close modal'>
                    <FaTimes />
                </button>
            </section>
        </div>
    );
}
