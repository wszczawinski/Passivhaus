import React, { ReactNode } from 'react';

import './TransparentContainer.scss';

export const TransparentContainer = ({ content }: { content: string | ReactNode }) => {
    return <div className="container-transparent">{content}</div>;
};
