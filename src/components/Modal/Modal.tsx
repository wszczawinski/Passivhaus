import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../';

import './Modal.scss';

interface ModalProps {
    content: string | ReactNode;
    handleClose: () => void;
}

export const Modal = ({ content, handleClose }: ModalProps) => {
    return (
        <div className="modal">
            <section className="modal__window">
                {content}
                <Button className="modal__window--close" content={<FaTimes />} onClick={handleClose} aria-label="close modal" />
            </section>
        </div>
    );
};
