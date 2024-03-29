import React from 'react';
import { Helmet } from 'react-helmet';

export const Head = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Polski Instytut Budownictwa Pasywnego</title>
            <meta
                name="description"
                content="Naszym celem jest upowszechnianie wiedzy o budownictwie pasywnym, zero energetycznym, plus energetycznym oraz o kompleksowej termomodernizacji."
            />
            <meta name="keywords" content="instytut, budownictwo, pasywne" />
            <meta name="author" content="Lemme-Do" />
        </Helmet>
    );
};
