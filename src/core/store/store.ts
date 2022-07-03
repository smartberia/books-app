import { createStore } from 'easy-peasy';

import model, { IStore } from './model';

const store = createStore<IStore>(model);

export default store;
