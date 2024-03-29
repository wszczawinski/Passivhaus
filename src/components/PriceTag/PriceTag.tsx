import React from 'react';
import './PriceTag.scss';

export const PriceTag = () => {
    return (
        <section className="pricetag">
            <div>
                <h4>PACZKOMATY PRZEDPŁATA:</h4>
                <p>Gabaryt A - 12,99 zł (kwota zawiera 23% VAT)</p>
                <p>Gabaryt B- 13,99 zł (kwota zawiera 23% VAT)</p>
                <h4>KURIER PRZEDPŁATA:</h4>
                <p>Gabaryt A - 14,99 zł (kwota zawiera 23% VAT)</p>
                <p>Gabaryt B- 16,49 zł (kwota zawiera 23% VAT)</p>
                <h4>POBRANIE:</h4>
                <p>Do powyższych cen należy doliczyć 4zł (kwota zawiera 23% VAT)</p>
            </div>
            <div className="pricetag__info">
                <u>Chwilowo nie działa nasz sklep internetowy.</u>
                <p className="pricetag__info--order">Zamówienia prosimy wysyłać mailowo na adres info@pibp.pl 🔥🔥🔥</p>W zamówieniu prosimy podać:
                <ul className="pricetag__info--order-list">
                    <li>- nazwa i ilość wybranych produktów </li>
                    <li>- dane zamawiającego do faktury</li>
                    <li>- dane adresowe do wysyłki: imię i nazwisko, nazwa firmy, adres dostawy, nr telefonu adresata przesyłki</li>
                </ul>
                <p className="pricetag__info--order">Zazwyczaj czas realizacji zamówień to 2-3 dni.</p>
            </div>
        </section>
    );
};
