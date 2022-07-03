import * as React from 'react';
import { FunctionComponent as F, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { ScreenNames } from '../navigation/screenNames';
import { StackScreenProps } from '../types/navigation';
import { useStoreActions } from '../core/store/hooks';
import { useStoreState } from '../core/store/hooks';
import { IBookItem } from '../core/store/bookItem/bookItem.service.model';
import Preview from '../components/BooksList/Preview';
import Container from '../components/App/Container';
import InputSearch from '../components/BooksList/InputSearch';

const BooksListScreen: F<StackScreenProps<ScreenNames.BooksList>> = () => {
    const booksRequest = useStoreActions(actions => actions.booksList.booksRequest);
    const books = useStoreState(state => state.booksList.books);
    const isLoading = useStoreState(state => state.booksList.isLoading);
    const searchQuery = useStoreState(state => state.booksList.query);

    const [query, setQuery] = useState('');

    useEffect(() => {
        booksRequest('');
    }, []);

    const onPressSearch = () => {
        if (searchQuery === query) return;

        booksRequest(query);
    };

    const renderBookPreview = useCallback(({ item }: { item: IBookItem }) => {
        return <Preview book={item} />;
    }, []);

    return (
        <Container style={styles.container}>
            <InputSearch value={query} onChangeText={setQuery} onPressSearch={onPressSearch} />

            {!isLoading ? (
                <FlatList data={books} renderItem={renderBookPreview} />
            ) : (
                <ActivityIndicator color={'black'} style={styles.activityIndicator} size="large" />
            )}

            {!isLoading && !books.length && (
                <Text style={styles.notFoundText}>
                    Hmmm... I couldn't find any books with the query "{query}". Please try another.
                </Text>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notFoundText: {
        flex: 1,
        fontSize: 16,
        padding: 30,
        textAlign: 'center',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BooksListScreen;
