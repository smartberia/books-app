import * as React from 'react';
import { useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IProps {
    leftContent?: JSX.Element;
    rightContent?: JSX.Element;
    errorText?: string | null;
    onFocus?: () => void;
    onBlur?: () => void;
    onPressSearch: () => void;
    onChangeText?: (text: string) => void;
    caption?: string;
    placeholder?: string;
    value: string;
}

const InputSearch = (props: IProps) => {
    const { value, onChangeText, onPressSearch, ...otherProps } = props;
    const localRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);

    const inputStyle = { backgroundColor: isFocused ? 'white' : 'transparent' };

    return (
        <View style={styles.container}>
            <TextInput
                onSubmitEditing={onPressSearch}
                returnKeyType="search"
                value={value}
                style={[styles.input, inputStyle]}
                placeholder="Search books..."
                ref={localRef}
                onChangeText={onChangeText}
                blurOnSubmit
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...otherProps}
            />
            <TouchableOpacity style={[styles.icon]} onPress={onPressSearch}>
                <MaterialIcons name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    activeContainer: {
        borderColor: '#484848',
    },
    icon: {
        position: 'absolute',
        right: 0,
        top: 6,
        paddingHorizontal: 16,
    },
    container: {
        marginVertical: 14,
    },
    input: {
        fontSize: 16,
        padding: 8,
        borderColor: '#bbbbbb',
        borderStyle: 'solid',
        borderRadius: 6,
        borderWidth: 1,
    },
});

export default InputSearch;
