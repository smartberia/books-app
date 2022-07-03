import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/core/store/store';

export default function App() {
    return (
        <StoreProvider store={store}>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </StoreProvider>
    );
}
