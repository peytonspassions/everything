import React, { useState } from 'react';
import { LayoutStyles } from './Layout.style';
import Header from 'components/Header/Header';
import { Pages } from 'enums/Pages';
import Collages from 'components/Collages/Collages';

const Layout: React.FC = () => {
    const { Container, PageContent, PageHeader } = LayoutStyles;
    const [currentTab, setCurrentTab] = useState<Pages>(Pages.HOME);

    const pageContent = () => {
        switch (currentTab) {
            default:
            case Pages.HOME:
                return null;
            case Pages.COLLAGES:
                return <Collages />;
        }
    };
    return (
        <Container>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <PageContent>
                {currentTab !== Pages.HOME && (
                    <PageHeader>{Pages[currentTab].toLowerCase()}</PageHeader>
                )}
                {pageContent()}
            </PageContent>
        </Container>
    );
};

export default Layout;
