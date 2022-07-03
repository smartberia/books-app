import bookStore, { IBookStore } from './bookItem/bookItem.store';
import booksStore, { IBooksListStore } from './booksList/bookItem.store';

export interface IStore {
    booksList: IBooksListStore;
    bookItem: IBookStore;
}

const model: IStore = {
    booksList: booksStore,
    bookItem: bookStore,
};

export default model;
