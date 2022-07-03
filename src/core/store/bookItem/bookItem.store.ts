import { action, Action, thunk, Thunk } from 'easy-peasy';
import { IStore } from '../model';
import { IBookItem } from './bookItem.service.model';
import { requestBookItem } from './bookItem.service';

export interface IBookStore {
    book: IBookItem | null;

    bookRequest: Thunk<IBookStore, string, unknown, IStore>;
    bookReceived: Action<IBookStore, IBookItem>;
    stateReset: Action<IBookStore, void>;
}

const initState = {
    book: null,
};

const bookStore: IBookStore = {
    ...initState,

    bookReceived: action((state, payload) => {
        state.book = payload;
    }),

    bookRequest: thunk(async (actions, payload) => {
        try {
            const book = await requestBookItem(payload);
            actions.bookReceived(book);
        } catch (error) {
            console.log('Error bookRequest', error);
        }
    }),

    stateReset: action(state => {
        state.book = null;
    }),
};

export default bookStore;
