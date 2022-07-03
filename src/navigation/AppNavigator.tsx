import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamList } from '../types/navigation';
import { ScreenNames } from './screenNames';
import BookItemScreen from '../screens/BookItemScreen';
import BooksListScreen from '../screens/BooksListScreen';

const AppNavigator = () => (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
);

const Stack = createStackNavigator<StackParamList>();

export function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ScreenNames.BooksList}>
            <Stack.Screen name={ScreenNames.BooksList} component={BooksListScreen} />
            <Stack.Screen name={ScreenNames.BookItem} component={BookItemScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
