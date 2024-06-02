import React, { ReactNode, useState } from 'react';
import { Button } from '../Button/Button';
import './Faq.scss';

interface FaqProps {
    text: string;
    content: ReactNode | string;
    className?: string;
}

export const Faq = ({ text, content, className }: FaqProps) => {
    const [faqOpened, setFaqOpened] = useState(false);
    const handleFaqButton = () => setFaqOpened(!faqOpened);
    return (
        <>
            <Button onClick={handleFaqButton} content={text} className={`button ${className}`} />
            {faqOpened && <div className="content">{content}</div>}
        </>
    );
};
