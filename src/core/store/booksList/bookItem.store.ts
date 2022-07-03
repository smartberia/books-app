import { action, Action, thunk, Thunk } from 'easy-peasy';
import { IStore } from '../model';
import { requestBooksList } from './booksList.service';
import { IBookItem } from '../bookItem/bookItem.service.model';
import { IBooksList } from './booksList.service.model';

export interface IBooksListStore {
    books: IBookItem[];
    isLoading: boolean;
    query: string;

    booksRequest: Thunk<IBooksListStore, string, unknown, IStore>;
    requestStarted: Action<IBooksListStore, string>;
    requestEnded: Action<IBooksListStore, void>;
    booksRequestFailed: Action<IBooksListStore, string>;
    booksReceived: Action<IBooksListStore, IBooksList>;
}

const initState = {
    books: [],
    isLoading: false,
    query: '',
};

const booksStore: IBooksListStore = {
    ...initState,

    requestStarted: action((state, payload) => {
        state.isLoading = true;
        state.query = payload;
    }),

    requestEnded: action(state => {
        state.isLoading = false;
    }),

    booksReceived: action((state, payload) => {
        state.isLoading = false;
        state.books = payload.books;
    }),

    booksRequest: thunk(async (actions, payload) => {
        try {
            actions.requestStarted(payload);
            const books = await requestBooksList(payload);
            actions.booksReceived(books);
        } catch (error) {
            actions.booksRequestFailed(payload);
        }
    }),

    booksRequestFailed: action(state => {
        state.isLoading = false;
    }),
};

export default booksStore;
