import React, { useState } from 'react';
import { LayoutStyles } from './Layout.style';
import Header from 'components/Header/Header';
import { Pages } from 'enums/Pages';

const Layout: React.FC = () => {
    const { Container, PageContent, PageHeader } = LayoutStyles;
    const [currentTab, setCurrentTab] = useState<Pages>(Pages.HOME);

    return (
        <Container>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <PageContent>
                {currentTab !== Pages.HOME && (
                    <PageHeader>{Pages[currentTab].toLowerCase()}</PageHeader>
                )}
            </PageContent>
        </Container>
    );
};

export default Layout;
