import React from 'react';
import { LayoutStyles } from './Layout.style';
import { Pages } from 'enums/Pages';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';

interface LayoutProps {
    children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pagesStore } = useStores();
    const { Container, PageContent, PageHeader } = LayoutStyles;

    return (
        <Container>
            <PageContent>
                {pagesStore.currentPage !== Pages.HOME && (
                    <PageHeader>
                        {Pages[pagesStore.currentPage].toLowerCase()}
                    </PageHeader>
                )}
                {children}
            </PageContent>
        </Container>
    );
};

export default observer(Layout);
