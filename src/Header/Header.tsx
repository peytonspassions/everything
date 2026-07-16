import React from 'react';
import { HeaderStyles } from './Header.style';

const Header: React.FC = () => {
    const { HeaderContainer } = HeaderStyles;

    return <HeaderContainer>Peyton's Passions</HeaderContainer>;
};

export default Header;
