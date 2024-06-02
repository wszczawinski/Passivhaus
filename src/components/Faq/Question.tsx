import React, { ReactNode } from 'react';
import './Faq.scss';

interface QuestionProps {
    question: string;
    answer: ReactNode | string;
    imgSrc?: string;
}

export const Question = ({ question, answer, imgSrc }: QuestionProps) => {
    return (
        <li className="faq-question">
            <strong>{question}</strong>

            <div className="answer">
                {answer} {imgSrc ? <img src={imgSrc} alt={imgSrc} title={imgSrc} /> : null}
            </div>
        </li>
    );
};
