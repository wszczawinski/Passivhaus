import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ShopItem.scss';

function ShopItem({ img, alt, title, description, price }) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return (
        <div className="shopItem">
            <img src={img} alt={alt} />
            <span className="shopItem__title">{title}</span>
            {price && <p className="shopItem__price">{price}</p>}
            {!modalOpen &&<button onClick={handleOpen}>Szczegóły</button>}
            {modalOpen && <Modal title={title} content={description} handleClose={handleClose} />}
        </div>
    );
}

export default ShopItem;
