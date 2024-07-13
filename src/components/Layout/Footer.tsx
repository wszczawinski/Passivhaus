import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { withPrefix } from 'gatsby';

import './Footer.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__name">
                <span>Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej Imienia Güntera Schlagowskiego Sp. z o.o.</span>
            </p>
            <p className="footer__contact">
                <span>
                    <FaEnvelope />
                    <a href="mailto:pibp@pibp.pl"> pibp@pibp.pl</a>
                </span>
                <span>
                    <FaPhone />
                    <a href="tel:+48585241200"> (0048) 58 524 12 00</a>
                </span>

                <span>Fax: (0048) 58 522 98 50</span>
            </p>
            <p className="footer__adress">
                ul. Homera 55, 80-299 Gdańsk (Osowa) <br />
                NIP: 204-000-04-44 <br />
                <a href={withPrefix('Regulamin.pdf')} target="_blank" rel="noreferrer noopener">
                    Regulamin
                </a>{' '}
                |{' '}
                <a href={withPrefix('polityka-prywatności-serwisu-www.pibp.pl.pdf')} target="_blank" rel="noreferrer noopener">
                    Polityka prywatności
                </a>
            </p>
        </div>
    );
};
