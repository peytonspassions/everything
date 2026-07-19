import React, { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { useStores } from 'hooks/useStores';
import { Pages } from 'enums/Pages';
import { observer } from 'mobx-react-lite';
import Poems from 'components/Poems/Poems';

const PoemsPage: React.FC = () => {
    const { pagesStore } = useStores();

    useEffect(() => {
        pagesStore.setCurrentPage(Pages.POEMS);
    }, []);

    return (
        <Layout>
            <Poems />
        </Layout>
    );
};

export default observer(PoemsPage);
