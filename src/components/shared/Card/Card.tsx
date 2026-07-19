import React from 'react';
import { CardContainer } from './Card.style';

interface CardProps {
    children: React.ReactElement;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
    return <CardContainer onClick={onClick}>{children}</CardContainer>;
};

export default Card;
