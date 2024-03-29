import React, { useState } from 'react';

import { Button, Modal } from '../';
import { ShopItemProps } from '@/constants/shopItems';

import './ShopItem.scss';

export function ShopItem({ img, alt, title, description, price }: ShopItemProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const modalContent = (
        <span>
            {description.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </span>
    );

    return (
        <div className="shopItem">
            <img src={img} alt={alt} />
            <span className="shopItem__title">{title}</span>
            <p className="shopItem__price">{price}</p>
            <Button content={'Szczegóły'} className="shopItem__btn" onClick={() => setModalOpen(true)} />

            {modalOpen && <Modal content={modalContent} handleClose={() => setModalOpen(false)} />}
        </div>
    );
}
