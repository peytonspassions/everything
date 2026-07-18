import React, { useEffect } from 'react';
import AppStyle from './AppStyle';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from 'components/Pages/HomePage';
import BlogPage from 'components/Pages/BlogPage';
import CollagesPage from 'components/Pages/CollagesPage';
import PoemsPage from 'components/Pages/PoemsPage';
import OtherPage from 'components/Pages/OtherPage';
import AboutPage from 'components/Pages/AboutPage';
import Header from 'components/Header/Header';
import { AppContainer } from 'App.style';

export enum PageRoutes {
    BASE = '/everything',
    BLOG = '/blog',
    COLLAGES = '/collages',
    POEMS = '/poems',
    OTHER = '/other',
    ABOUT = '/about',
}

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <AppStyle />
                <Header />
                <Routes>
                    <Route path={PageRoutes.BASE} element={<HomePage />} />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.BLOG}`}
                        element={<BlogPage />}
                    />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.COLLAGES}`}
                        element={<CollagesPage />}
                    />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.COLLAGES}/:collageId`}
                        element={<CollagesPage />}
                    />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.POEMS}`}
                        element={<PoemsPage />}
                    />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.OTHER}`}
                        element={<OtherPage />}
                    />
                    <Route
                        path={`${PageRoutes.BASE}${PageRoutes.ABOUT}`}
                        element={<AboutPage />}
                    />
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
};

export default App;
