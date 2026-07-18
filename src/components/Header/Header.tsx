import React from 'react';
import { HeaderStyles } from './Header.style';
import { Pages } from 'enums/Pages';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ModeIcon from '@mui/icons-material/Mode';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PersonIcon from '@mui/icons-material/Person';
import { useStores } from 'hooks/useStores';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from 'App';
import { observer } from 'mobx-react-lite';

const ICON_MAP: any = {
    [Pages.HOME]: <HomeIcon />,
    [Pages.BLOG]: <KeyboardIcon />,
    [Pages.COLLAGES]: <ContentCutIcon />,
    [Pages.POEMS]: <ModeIcon />,
    [Pages.OTHER]: <ColorLensIcon />,
    [Pages.ABOUT]: <PersonIcon />,
};

const Header: React.FC = () => {
    const { pagesStore } = useStores();
    const navigate = useNavigate();
    const { HeaderContainer, Tab, Icon, Text } = HeaderStyles;

    const navigateToTab = (page: Pages) => {
        pagesStore.setCurrentPage(page);
        switch (page) {
            default:
            case Pages.HOME:
                navigate(`${PageRoutes.BASE}`);
                return;
            case Pages.ABOUT:
                navigate(`${PageRoutes.BASE}${PageRoutes.ABOUT}`);
                return;
            case Pages.BLOG:
                navigate(`${PageRoutes.BASE}${PageRoutes.BLOG}`);
                return;
            case Pages.COLLAGES:
                navigate(`${PageRoutes.BASE}${PageRoutes.COLLAGES}`);
                return;
            case Pages.OTHER:
                navigate(`${PageRoutes.BASE}${PageRoutes.OTHER}`);
                return;
            case Pages.POEMS:
                navigate(`${PageRoutes.BASE}${PageRoutes.POEMS}`);
                return;
        }
    };

    return (
        <HeaderContainer>
            {Object.keys(Pages)
                .filter((val) => isNaN(Number(val)))
                .map((key: string, index: number) => {
                    const isCurrent = pagesStore.currentPage === index;
                    return (
                        <Tab
                            key={index}
                            $isCurrent={isCurrent}
                            onClick={() => navigateToTab(index)}
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

export default observer(Header);
