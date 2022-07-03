import * as React from 'react';
import { FunctionComponent as F, ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    noPadding?: boolean;
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    edges?: Edge[];
};

const Container: F<Props> = ({
    noPadding,
    children,
    style,
    edges = ['top', 'left', 'right'],
}) => {
    const hasNoPadding = noPadding ? styles.noPadding : null;

    return (
        <SafeAreaView edges={edges} style={[styles.container, hasNoPadding, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    noPadding: {
        paddingLeft: 0,
        paddingRight: 0,
    },
});

export default Container;
