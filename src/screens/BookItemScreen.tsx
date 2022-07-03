import * as React from 'react';
import { FunctionComponent as F, useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScreenNames } from '../navigation/screenNames';
import { StackScreenProps } from '../types/navigation';
import Header from '../components/BookItem/Header';
import { useStoreActions, useStoreState } from '../core/store/hooks';
import Container from '../components/App/Container';
import useIsLandscape from '../hooks/useIsLandscape';

const BookItemScreen: F<StackScreenProps<ScreenNames.BookItem>> = ({ route }) => {
    const bookRequest = useStoreActions(actions => actions.bookItem.bookRequest);
    const bookStateReset = useStoreActions(actions => actions.bookItem.stateReset);
    const book = useStoreState(state => state.bookItem.book);

    const isLandscape = useIsLandscape();

    useEffect(() => {
        bookRequest(route.params.id);

        return () => {
            bookStateReset();
        };
    }, []);

    return (
        <View style={styles.screen}>
            <Header title={book?.title} />

            {book ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Container
                        style={[styles.container, isLandscape && styles.landscapeContainer]}
                        edges={['left', 'right']}
                    >
                        <Image
                            source={{ uri: book.coverImageUrl }}
                            style={[styles.image, isLandscape && styles.landscapeImage]}
                            resizeMode="contain"
                        />

                        <View style={isLandscape && styles.landscapeContent}>
                            <Text style={styles.author}>Name: {book.title}</Text>
                            <Text style={styles.author}>Author: {book.author}</Text>
                            <Text style={styles.author}>Number of pages: {book.pageCount}</Text>
                            <Text style={styles.synopsis}>{book.synopsis}</Text>
                        </View>
                    </Container>
                </ScrollView>
            ) : (
                <ActivityIndicator color={'black'} style={styles.activityIndicator} size="large" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
    },
    container: {
        flex: 1,
        paddingVertical: 16,
    },
    image: {
        aspectRatio: 1,
        marginBottom: 24,
    },
    landscapeContainer: {
        flexDirection: 'row',
    },
    landscapeImage: {
        flex: 1,
    },
    landscapeContent: {
        flex: 2,
    },
    synopsis: {
        fontSize: 14,
        marginTop: 12,
    },
    verticalRhythm: {
        marginBottom: 24,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    author: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default BookItemScreen;
