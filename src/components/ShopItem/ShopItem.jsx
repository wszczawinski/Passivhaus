import React, { useState } from 'react';
import { Modal } from '../';
import './ShopItem.scss';

export function ShopItem({ img, alt, title, description, price }) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return (
        <div className="shopItem">
            <img src={img} alt={alt} />
            <span className="shopItem__title">{title}</span>
            {price && <p className="shopItem__price">{price}</p>}
            <button className="shopItem__btn" onClick={handleOpen}>
                Szczegóły
            </button>
            {modalOpen && <Modal content={description} handleClose={handleClose} />}
        </div>
    );
}
