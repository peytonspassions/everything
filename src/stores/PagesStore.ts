import { Pages } from 'enums/Pages';
import { makeAutoObservable } from 'mobx';

export class PagesStore {
    currentPage: Pages = Pages.HOME;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(currentPage: Pages) {
        this.currentPage = currentPage;
    }
}
