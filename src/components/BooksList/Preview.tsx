import React, { FunctionComponent as F } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IBookItem } from '../../core/store/bookItem/bookItem.service.model';
import { ScreenNames } from '../../navigation/screenNames';
import useAppNavigation from '../../navigation/useAppNavigation';
import { StackScreenProps } from '../../types/navigation';

type Props = {
    book: IBookItem;
};

const Preview: F<Props> = ({ book }) => {
    const navigation = useAppNavigation<StackScreenProps<ScreenNames.BooksList>>();

    const onPress = () => {
        navigation.navigate(ScreenNames.BookItem, { id: book.id });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: book.coverImageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.author}>{book.author}</Text>
                </View>
                <Text numberOfLines={2}>{book.synopsis}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 18,
        backgroundColor: 'white',
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 6,
    },
    title: {
        color: 'rgb(63, 81, 181)',
        fontSize: 18,
        marginBottom: 4,
        fontWeight: '700',
    },
    author: {
        color: '#5d5d5d',
        marginBottom: 8,
    },
    image: {
        width: 80,
        height: 100,
        marginRight: 14,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default Preview;
