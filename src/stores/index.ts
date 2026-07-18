import { createContext } from 'react';
import { PagesStore } from './PagesStore';

export const storesContext = createContext({
    pagesStore: new PagesStore(),
});
