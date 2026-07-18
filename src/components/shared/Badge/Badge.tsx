import React from 'react';
import { BadgeStyles } from './Badge.style';

interface BadgeProps {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    const { Container } = BadgeStyles;

    return <Container>{text}</Container>;
};

export default Badge;
