import React, { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { useStores } from 'hooks/useStores';
import { Pages } from 'enums/Pages';
import { observer } from 'mobx-react-lite';

const PoemsPage: React.FC = () => {
    const { pagesStore } = useStores();

    useEffect(() => {
        pagesStore.setCurrentPage(Pages.POEMS);
    }, []);

    return (
        <Layout>
            <>Coming Soon</>
        </Layout>
    );
};

export default observer(PoemsPage);
