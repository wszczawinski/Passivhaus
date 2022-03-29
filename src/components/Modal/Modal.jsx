import React from 'react';

import './Modal.scss';

function Modal({ content, handleClose }) {
    return (
        <div className="modal">
            <section className="modal__window">
                <span>{content.map(item => <p>{item}</p>)}</span>
                <button className='modal__window--close' onClick={handleClose}>X</button>
            </section>
        </div>
    );
}

export default Modal;
