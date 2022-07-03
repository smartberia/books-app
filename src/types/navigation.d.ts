import { ScreenNames } from '../navigation/screenNames';

// Params
export type StackParamList = {
    [ScreenNames.BooksList]: undefined;
    [ScreenNames.BookItem]: undefined;
};

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<
    StackParamList,
    Screen
>;
