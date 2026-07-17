import React, { useState } from 'react';
import { HeaderStyles } from './Header.style';
import { Pages } from 'enums/Pages';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ModeIcon from '@mui/icons-material/Mode';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PersonIcon from '@mui/icons-material/Person';

const ICON_MAP: any = {
    [Pages.HOME]: <HomeIcon />,
    [Pages.BLOG]: <KeyboardIcon />,
    [Pages.COLLAGES]: <ContentCutIcon />,
    [Pages.POEMS]: <ModeIcon />,
    [Pages.OTHER]: <ColorLensIcon />,
    [Pages.ABOUT]: <PersonIcon />,
};

interface HeaderProps {
    currentTab: Pages;
    setCurrentTab: (page: Pages) => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
    const { HeaderContainer, Tab, Icon, Text } = HeaderStyles;

    return (
        <HeaderContainer>
            {Object.keys(Pages)
                .filter((val) => isNaN(Number(val)))
                .map((key: string, index: number) => {
                    const isCurrent = currentTab === index;
                    return (
                        <Tab
                            key={index}
                            $isCurrent={isCurrent}
                            onClick={() => setCurrentTab(index)}
                        >
                            <Icon $isCurrent={isCurrent}>
                                {ICON_MAP[index]}
                            </Icon>
                            <Text $isCurrent={isCurrent} className="text">
                                {key}
                            </Text>
                        </Tab>
                    );
                })}
        </HeaderContainer>
    );
};

export default Header;
