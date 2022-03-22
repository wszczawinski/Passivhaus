import React from 'react';

function Modal({ title, content, handleClose }) {
    return (
        <div>
            <span>{title}</span>
            <span>{content}</span>
            <button onClick={handleClose}>X</button>
        </div>
    );
}

export default Modal;
