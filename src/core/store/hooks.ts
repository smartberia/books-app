import { createTypedHooks } from 'easy-peasy';
import { IStore } from './model';

const typedHooks = createTypedHooks<IStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
