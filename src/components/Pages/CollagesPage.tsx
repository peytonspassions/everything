import React, { useEffect } from 'react';
import Collages from 'components/Collages/Collages';
import Layout from 'components/Layout/Layout';
import { useStores } from 'hooks/useStores';
import { Pages } from 'enums/Pages';
import { observer } from 'mobx-react-lite';

const CollagesPage: React.FC = () => {
    const { pagesStore } = useStores();

    useEffect(() => {
        pagesStore.setCurrentPage(Pages.COLLAGES);
    }, []);

    return (
        <Layout>
            <Collages />
        </Layout>
    );
};

export default observer(CollagesPage);
