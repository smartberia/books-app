import React, { FunctionComponent as F } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAppNavigation from '../../navigation/useAppNavigation';
import { StackScreenProps } from '../../types/navigation';
import { ScreenNames } from '../../navigation/screenNames';

type Props = {
    title?: string;
};

const Header: F<Props> = ({ title }) => {
    const navigation = useAppNavigation<StackScreenProps<ScreenNames.BooksList>>();
    const insets = useSafeAreaInsets();

    const insetsStyle = {
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingLeft: insets.left,
    };

    return (
        <View style={[styles.header, insetsStyle]}>
            <TouchableOpacity style={styles.goBackButton} onPress={navigation.goBack}>
                <MaterialCommunityIcons name="chevron-left" size={38} color="rgb(63, 81, 181)" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.goBackButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    goBackButton: {
        width: 50,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 4,
        flex: 1,
    },
    iconBack: {
        width: 30,
        height: 30,
    },
});

export default Header;
