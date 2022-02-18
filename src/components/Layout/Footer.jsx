import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer__name">
                <span>
                    Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej Imienia Güntera
                    Schlagowskiego Sp. z o.o.
                </span>
            </p>
            <p className="footer__contact">
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:pibp@pibp.pl"> pibp@pibp.pl</a>
                </span>
                <span>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel:+48585241200"> (0048) 58 524 12 00</a>
                </span>

                <span>Fax: (0048) 58 522 98 50</span>
            </p>
            <p className="footer__adress">
                ul. Homera 55, 80-299 Gdańsk (Osowa) <br />
                NIP: 204-000-04-44 <br />
                Instytut działa na zasadach non-profit
            </p>
        </div>
    );
}
